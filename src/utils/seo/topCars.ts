import { Vehicle } from "@/types";
import boePrices from "@/data/boe_prices.json";

// We want to generate SEO pages for the most searched imported cars.
// Brands in boe_prices.json are UPPERCASE (e.g. "VOLKSWAGEN", "MERCEDES").
// TOP_SEO_MODELS uses display-friendly names — normalizeBrand() handles the mapping.

export const TOP_SEO_MODELS = [
  // Volkswagen
  { brand: "Volkswagen", modelQuery: "Golf" },
  { brand: "Volkswagen", modelQuery: "Polo" },
  { brand: "Volkswagen", modelQuery: "Tiguan" },
  { brand: "Volkswagen", modelQuery: "Passat" },
  { brand: "Volkswagen", modelQuery: "Arteon" },
  { brand: "Volkswagen", modelQuery: "T-Roc" },
  { brand: "Volkswagen", modelQuery: "Caddy" },
  // BMW
  { brand: "BMW", modelQuery: "Serie 3" },
  { brand: "BMW", modelQuery: "Serie 1" },
  { brand: "BMW", modelQuery: "Serie 5" },
  { brand: "BMW", modelQuery: "X1" },
  { brand: "BMW", modelQuery: "X3" },
  { brand: "BMW", modelQuery: "X5" },
  { brand: "BMW", modelQuery: "X6" },
  { brand: "BMW", modelQuery: "M3" },
  { brand: "BMW", modelQuery: "M4" },
  { brand: "BMW", modelQuery: "M5" },
  // Mercedes-Benz (BOE brand: MERCEDES)
  { brand: "Mercedes-Benz", modelQuery: "Clase A" },
  { brand: "Mercedes-Benz", modelQuery: "Clase C" },
  { brand: "Mercedes-Benz", modelQuery: "Clase E" },
  { brand: "Mercedes-Benz", modelQuery: "Clase S" },
  { brand: "Mercedes-Benz", modelQuery: "GLC" },
  { brand: "Mercedes-Benz", modelQuery: "GLE" },
  { brand: "Mercedes-Benz", modelQuery: "GLS" },
  { brand: "Mercedes-Benz", modelQuery: "GLA" },
  { brand: "Mercedes-Benz", modelQuery: "CLA" },
  { brand: "Mercedes-Benz", modelQuery: "AMG" },
  // Audi
  { brand: "Audi", modelQuery: "A3" },
  { brand: "Audi", modelQuery: "A4" },
  { brand: "Audi", modelQuery: "A5" },
  { brand: "Audi", modelQuery: "A6" },
  { brand: "Audi", modelQuery: "A7" },
  { brand: "Audi", modelQuery: "A8" },
  { brand: "Audi", modelQuery: "Q3" },
  { brand: "Audi", modelQuery: "Q5" },
  { brand: "Audi", modelQuery: "Q7" },
  { brand: "Audi", modelQuery: "TT" },
  { brand: "Audi", modelQuery: "R8" },
  // Ford
  { brand: "Ford", modelQuery: "Focus" },
  { brand: "Ford", modelQuery: "Fiesta" },
  { brand: "Ford", modelQuery: "Mustang" },
  { brand: "Ford", modelQuery: "Kuga" },
  { brand: "Ford", modelQuery: "Mondeo" },
  // SEAT
  { brand: "SEAT", modelQuery: "Ibiza" },
  { brand: "SEAT", modelQuery: "Leon" },
  { brand: "SEAT", modelQuery: "Ateca" },
  { brand: "SEAT", modelQuery: "Tarraco" },
  { brand: "SEAT", modelQuery: "Arona" },
  // Skoda
  { brand: "Skoda", modelQuery: "Octavia" },
  { brand: "Skoda", modelQuery: "Superb" },
  { brand: "Skoda", modelQuery: "Fabia" },
  { brand: "Skoda", modelQuery: "Kodiaq" },
  { brand: "Skoda", modelQuery: "Kamiq" },
  // Renault
  { brand: "Renault", modelQuery: "Megane" },
  { brand: "Renault", modelQuery: "Clio" },
  { brand: "Renault", modelQuery: "Captur" },
  { brand: "Renault", modelQuery: "Scenic" },
  { brand: "Renault", modelQuery: "Laguna" },
  // Peugeot
  { brand: "Peugeot", modelQuery: "208" },
  { brand: "Peugeot", modelQuery: "308" },
  { brand: "Peugeot", modelQuery: "508" },
  { brand: "Peugeot", modelQuery: "2008" },
  { brand: "Peugeot", modelQuery: "3008" },
  { brand: "Peugeot", modelQuery: "5008" },
  // Toyota
  { brand: "Toyota", modelQuery: "Corolla" },
  { brand: "Toyota", modelQuery: "Yaris" },
  { brand: "Toyota", modelQuery: "RAV4" },
  { brand: "Toyota", modelQuery: "Prius" },
  { brand: "Toyota", modelQuery: "Land Cruiser" },
  // Porsche
  { brand: "Porsche", modelQuery: "911" },
  { brand: "Porsche", modelQuery: "Macan" },
  { brand: "Porsche", modelQuery: "Cayenne" },
  { brand: "Porsche", modelQuery: "Panamera" },
  { brand: "Porsche", modelQuery: "Taycan" },
  { brand: "Porsche", modelQuery: "Boxster" },
  // Opel
  { brand: "Opel", modelQuery: "Astra" },
  { brand: "Opel", modelQuery: "Corsa" },
  { brand: "Opel", modelQuery: "Insignia" },
  { brand: "Opel", modelQuery: "Mokka" },
  // Volvo
  { brand: "Volvo", modelQuery: "XC60" },
  { brand: "Volvo", modelQuery: "XC90" },
  { brand: "Volvo", modelQuery: "XC40" },
  { brand: "Volvo", modelQuery: "V60" },
  { brand: "Volvo", modelQuery: "S60" },
  // Hyundai
  { brand: "Hyundai", modelQuery: "Tucson" },
  { brand: "Hyundai", modelQuery: "Kona" },
  { brand: "Hyundai", modelQuery: "i30" },
  { brand: "Hyundai", modelQuery: "Santa Fe" },
  // Kia
  { brand: "Kia", modelQuery: "Sportage" },
  { brand: "Kia", modelQuery: "Ceed" },
  { brand: "Kia", modelQuery: "Sorento" },
  { brand: "Kia", modelQuery: "Picanto" },
  // Nissan
  { brand: "Nissan", modelQuery: "Qashqai" },
  { brand: "Nissan", modelQuery: "Juke" },
  { brand: "Nissan", modelQuery: "Micra" },
  { brand: "Nissan", modelQuery: "X-Trail" },
  // Mazda
  { brand: "Mazda", modelQuery: "CX-5" },
  { brand: "Mazda", modelQuery: "Mazda3" },
  { brand: "Mazda", modelQuery: "MX-5" },
  { brand: "Mazda", modelQuery: "CX-30" },
  // Honda
  { brand: "Honda", modelQuery: "Civic" },
  { brand: "Honda", modelQuery: "CR-V" },
  { brand: "Honda", modelQuery: "HR-V" },
  // Land Rover
  { brand: "Land Rover", modelQuery: "Range" },
  { brand: "Land Rover", modelQuery: "Discovery" },
  { brand: "Land Rover", modelQuery: "Defender" },
  // Citroën
  { brand: "Citroen", modelQuery: "C3" },
  { brand: "Citroen", modelQuery: "C4" },
  { brand: "Citroen", modelQuery: "C5" },
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
