"use server";

import boePrices from "@/data/boe_prices.json";
import { Vehicle } from "@/types";

// Cache unique brands (server-side memory)
const allBrands = Array.from(
  new Set((boePrices as unknown as Vehicle[]).map((v) => v.brand)),
).sort();

export async function searchBrands(query: string): Promise<string[]> {
  if (!query.trim()) return [];
  const lowerQuery = query.toLowerCase();
  return allBrands
    .filter((brand) => brand.toLowerCase().includes(lowerQuery))
    .slice(0, 10);
}

export async function searchModels(
  brand: string,
  query: string,
  year?: number,
): Promise<Vehicle[]> {
  if (!brand || !query.trim()) return [];

  const lowerQuery = query.toLowerCase();

  return (boePrices as unknown as Vehicle[])
    .filter((vehicle) => {
      // Brand match
      if (vehicle.brand !== brand) return false;

      // Model match
      if (!vehicle.model.toLowerCase().includes(lowerQuery)) return false;

      // Year filter (if provided)
      if (year) {
        const startYear = parseInt(vehicle.startYear);
        const endYear = vehicle.endYear ? parseInt(vehicle.endYear) : 2026;
        if (year < startYear || year > endYear) return false;
      }

      return true;
    })
    .slice(0, 15);
}
