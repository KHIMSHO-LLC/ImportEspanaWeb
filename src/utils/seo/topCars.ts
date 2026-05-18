import { Vehicle } from "@/types";
import boePrices from "@/data/boe_prices.json";

// We want to generate SEO pages for the most searched imported cars.
// Brands in boe_prices.json are UPPERCASE (e.g. "VOLKSWAGEN", "MERCEDES").
// TOP_SEO_MODELS uses display-friendly names — normalizeBrand() handles the mapping.

// Trimmed to the 20 highest-volume Spanish car-import searches.
// These are the models that dominate "importar coche desde Alemania" queries —
// mostly German premium/mid-range cars + a few high-search niche models.
// Fewer URLs with stronger unique content > many thin pages (better for
// Google's crawl budget and quality classifier on a new domain).
export const TOP_SEO_MODELS = [
  // Volkswagen — top imports
  { brand: "Volkswagen", modelQuery: "Golf" },
  { brand: "Volkswagen", modelQuery: "Polo" },
  { brand: "Volkswagen", modelQuery: "Tiguan" },
  { brand: "Volkswagen", modelQuery: "Passat" },
  // BMW — high-volume German imports
  { brand: "BMW", modelQuery: "Serie 1" },
  { brand: "BMW", modelQuery: "Serie 3" },
  { brand: "BMW", modelQuery: "X3" },
  { brand: "BMW", modelQuery: "X5" },
  // Mercedes-Benz
  { brand: "Mercedes-Benz", modelQuery: "Clase A" },
  { brand: "Mercedes-Benz", modelQuery: "Clase C" },
  { brand: "Mercedes-Benz", modelQuery: "Clase E" },
  { brand: "Mercedes-Benz", modelQuery: "GLC" },
  // Audi
  { brand: "Audi", modelQuery: "A3" },
  { brand: "Audi", modelQuery: "A4" },
  { brand: "Audi", modelQuery: "A6" },
  { brand: "Audi", modelQuery: "Q5" },
  // Porsche — high-value imports
  { brand: "Porsche", modelQuery: "911" },
  { brand: "Porsche", modelQuery: "Cayenne" },
  // Other top searches
  { brand: "Toyota", modelQuery: "RAV4" },
  { brand: "Land Rover", modelQuery: "Range" },
];

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

// Normalize brand names for case-insensitive matching against BOE uppercase brands.
// BOE data uses UPPERCASE (VOLKSWAGEN, MERCEDES, etc.).
// Display names use mixed case (Volkswagen, Mercedes-Benz, etc.).
function normalizeBrand(brand: string): string {
  const normalized = brand
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents (Citroën → citroen)
    .replace(/-/g, " ") // Mercedes-Benz → mercedes benz
    .trim();
  // Handle aliases where display name differs from BOE name
  const aliases: Record<string, string> = {
    "mercedes benz": "mercedes",
  };
  return aliases[normalized] ?? normalized;
}

// Normalize model text for accent-insensitive matching.
// BOE data has accented models (MÉGANE, SCÉNIC); queries use plain text (Megane, Scenic).
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Returns the highest-value BOE entry for the given brand+model combination.
export function getHeroCarForModel(
  brand: string,
  modelQuery: string,
): Vehicle | null {
  const normalizedBrand = normalizeBrand(brand);
  const normalizedQuery = normalizeText(modelQuery);

  const matches = (boePrices as unknown as Vehicle[]).filter(
    (v) =>
      normalizeBrand(v.brand) === normalizedBrand &&
      normalizeText(v.model).includes(normalizedQuery),
  );

  if (matches.length === 0) return null;

  matches.sort((a, b) => b.value - a.value);
  return matches[0];
}
