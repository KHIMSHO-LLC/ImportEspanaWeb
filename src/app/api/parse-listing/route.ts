import { NextRequest, NextResponse } from "next/server";

interface ParsedVehicle {
  make?: string;
  model?: string;
  year?: number;
  price?: number;
  mileage?: number;
  co2?: number;
  fuelType?: string;
}

interface CacheEntry {
  data: ParsedVehicle;
  timestamp: number;
}

// Module-level cache (persists within a serverless instance lifetime, ~1h TTL)
const cache = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function getCached(url: string): ParsedVehicle | null {
  const entry = cache.get(url);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    cache.delete(url);
    return null;
  }
  return entry.data;
}

function isAllowedUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    return (
      host === "mobile.de" ||
      host.endsWith(".mobile.de") ||
      host === "autoscout24.es" ||
      host.endsWith(".autoscout24.es") ||
      host === "autoscout24.com" ||
      host.endsWith(".autoscout24.com")
    );
  } catch {
    return false;
  }
}

function parseMobileDe(html: string): ParsedVehicle {
  const result: ParsedVehicle = {};

  // Title often contains make + model + year
  const titleMatch = html.match(/<h1[^>]*class="[^"]*headline[^"]*"[^>]*>([^<]+)<\/h1>/i);
  if (titleMatch) {
    const title = titleMatch[1].trim();
    const yearMatch = title.match(/\b(19|20)\d{2}\b/);
    if (yearMatch) result.year = parseInt(yearMatch[0]);
  }

  // Price
  const pricePatterns = [
    /data-testid="price-label"[^>]*>([^<]*€[^<]*)</i,
    /"price":\s*(\d+)/,
    /class="[^"]*price[^"]*"[^>]*>\s*([0-9.]+)\s*€/i,
  ];
  for (const pattern of pricePatterns) {
    const m = html.match(pattern);
    if (m) {
      const priceStr = m[1].replace(/[^0-9]/g, "");
      const price = parseInt(priceStr);
      if (price > 500 && price < 5000000) {
        result.price = price;
        break;
      }
    }
  }

  // Mileage
  const kmPatterns = [
    /(\d[\d.]+)\s*km/i,
    /"mileage":\s*(\d+)/,
  ];
  for (const pattern of kmPatterns) {
    const m = html.match(pattern);
    if (m) {
      const km = parseInt(m[1].replace(/\./g, ""));
      if (km > 0 && km < 2000000) {
        result.mileage = km;
        break;
      }
    }
  }

  // CO2
  const co2Match = html.match(/(\d+)\s*g\/km/i);
  if (co2Match) {
    const co2 = parseInt(co2Match[1]);
    if (co2 >= 0 && co2 <= 500) result.co2 = co2;
  }

  // Fuel type
  const fuelMatch = html.match(/(?:Kraftstoff|fuel|combustible)[^:]*:\s*([^<\n,]+)/i);
  if (fuelMatch) {
    const fuel = fuelMatch[1].trim().toLowerCase();
    if (fuel.includes("elektro") || fuel.includes("electr")) result.fuelType = "Elc";
    else if (fuel.includes("benzin") || fuel.includes("petrol") || fuel.includes("gasolin")) result.fuelType = "Petrol";
    else if (fuel.includes("diesel")) result.fuelType = "Diesel";
    else if (fuel.includes("hybrid")) result.fuelType = "Hybrid";
  }

  // Try JSON-LD for structured data
  const jsonLdMatches = html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  );
  for (const match of jsonLdMatches) {
    try {
      const data = JSON.parse(match[1]);
      if (data["@type"] === "Car" || data["@type"] === "Vehicle") {
        if (data.name && !result.make) {
          const nameParts = data.name.split(/\s+/);
          result.make = nameParts[0];
          result.model = nameParts.slice(1).join(" ");
        }
        if (data.offers?.price && !result.price) {
          result.price = parseFloat(data.offers.price);
        }
        if (data.mileageFromOdometer?.value && !result.mileage) {
          result.mileage = parseInt(data.mileageFromOdometer.value);
        }
        if (data.vehicleModelDate && !result.year) {
          result.year = parseInt(data.vehicleModelDate);
        }
      }
    } catch {
      // ignore parse errors
    }
  }

  return result;
}

function parseAutoScout24(html: string): ParsedVehicle {
  const result: ParsedVehicle = {};

  // Try JSON-LD first
  const jsonLdMatches = html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  );
  for (const match of jsonLdMatches) {
    try {
      const data = JSON.parse(match[1]);
      if (data["@type"] === "Car" || data["@type"] === "Vehicle") {
        if (data.brand?.name && !result.make) result.make = data.brand.name;
        if (data.model && !result.model) result.model = data.model;
        if (data.offers?.price && !result.price) {
          result.price = parseFloat(data.offers.price);
        }
        if (data.mileageFromOdometer?.value && !result.mileage) {
          result.mileage = parseInt(data.mileageFromOdometer.value);
        }
        if (data.vehicleModelDate && !result.year) {
          result.year = parseInt(data.vehicleModelDate);
        }
      }
    } catch {
      // ignore
    }
  }

  // Price fallback
  if (!result.price) {
    const priceMatch = html.match(/([0-9]+[.,][0-9]+)\s*€/);
    if (priceMatch) {
      result.price = parseInt(priceMatch[1].replace(/[.,]/g, "").slice(0, -2));
    }
  }

  // Mileage fallback
  if (!result.mileage) {
    const kmMatch = html.match(/(\d[\d.]+)\s*km/i);
    if (kmMatch) {
      result.mileage = parseInt(kmMatch[1].replace(/\./g, ""));
    }
  }

  // CO2
  const co2Match = html.match(/(\d+)\s*g\/km/i);
  if (co2Match) {
    const co2 = parseInt(co2Match[1]);
    if (co2 >= 0 && co2 <= 500) result.co2 = co2;
  }

  return result;
}

export async function POST(request: NextRequest) {
  let body: { url?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "URL inválida" }, { status: 400 });
  }

  const { url } = body;

  if (!url || typeof url !== "string") {
    return NextResponse.json({ success: false, error: "URL requerida" }, { status: 400 });
  }

  if (!isAllowedUrl(url)) {
    return NextResponse.json(
      { success: false, error: "Solo se admiten URLs de mobile.de o AutoScout24" },
      { status: 400 },
    );
  }

  // Check cache
  const cached = getCached(url);
  if (cached) {
    return NextResponse.json({ success: true, data: cached });
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "es-ES,es;q=0.9,de;q=0.8,en;q=0.7",
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "No se pudo obtener el anuncio. Intenta de nuevo." },
        { status: 502 },
      );
    }

    const html = await response.text();
    const hostname = new URL(url).hostname.toLowerCase();

    let parsed: ParsedVehicle;
    if (hostname.includes("mobile.de")) {
      parsed = parseMobileDe(html);
    } else {
      parsed = parseAutoScout24(html);
    }

    // Only return if we got something useful
    const hasData = parsed.price || parsed.make || parsed.year || parsed.mileage;
    if (!hasData) {
      return NextResponse.json(
        {
          success: false,
          error:
            "No se pudieron extraer datos del anuncio. Introduce los datos manualmente.",
        },
        { status: 422 },
      );
    }

    // Cache the result
    cache.set(url, { data: parsed, timestamp: Date.now() });

    return NextResponse.json({ success: true, data: parsed });
  } catch (err) {
    console.error("[PARSE-LISTING ERROR]", err);
    return NextResponse.json(
      {
        success: false,
        error: "Error al acceder al anuncio. Introduce los datos manualmente.",
      },
      { status: 500 },
    );
  }
}
