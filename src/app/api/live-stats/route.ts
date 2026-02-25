import { NextResponse } from "next/server";

// Cache duration: 6 hours (in seconds)
const CACHE_DURATION = 6 * 60 * 60;

interface ExchangeRateResponse {
  result: string;
  base_code: string;
  rates: Record<string, number>;
  time_last_update_utc: string;
}

// Average fuel prices in Spain — updated periodically from
// https://geoportalgasolineras.es/
const FUEL_PRICES = {
  diesel: 1.379,
  gasolina95: 1.489,
  lastUpdated: "2026-02-25",
};

// Monthly car imports to Spain — from DGT statistics
// https://sedeapl.dgt.gob.es/WEB_IEST_CONSULTA/categoria.faces
const IMPORT_STATS = {
  monthlyImports: 4120,
  month: "Jan",
  year: 2026,
  yearlyTotal2025: 47283,
};

export async function GET() {
  try {
    // Fetch exchange rates (free, no API key needed)
    const ratesRes = await fetch("https://open.er-api.com/v6/latest/EUR", {
      next: { revalidate: CACHE_DURATION },
    });

    let rates: Record<string, number> = {};
    let ratesUpdated = "";

    if (ratesRes.ok) {
      const data: ExchangeRateResponse = await ratesRes.json();
      rates = {
        GBP: data.rates.GBP,
        PLN: data.rates.PLN,
        CZK: data.rates.CZK,
        SEK: data.rates.SEK,
        CHF: data.rates.CHF,
        USD: data.rates.USD,
        RON: data.rates.RON,
        HUF: data.rates.HUF,
      };
      ratesUpdated = data.time_last_update_utc;
    }

    return NextResponse.json(
      {
        exchangeRates: {
          base: "EUR",
          rates,
          lastUpdated: ratesUpdated,
        },
        fuelPrices: FUEL_PRICES,
        importStats: IMPORT_STATS,
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${CACHE_DURATION * 2}`,
        },
      },
    );
  } catch (error) {
    console.error("Error fetching live stats:", error);

    // Return cached/fallback data
    return NextResponse.json(
      {
        exchangeRates: {
          base: "EUR",
          rates: {
            GBP: 0.843,
            PLN: 4.29,
            CZK: 24.23,
            SEK: 10.98,
            CHF: 0.912,
            USD: 1.178,
            RON: 4.975,
            HUF: 399.7,
          },
          lastUpdated: "",
        },
        fuelPrices: FUEL_PRICES,
        importStats: IMPORT_STATS,
      },
      { status: 200 },
    );
  }
}
