import { Vehicle } from "@/types";
import boePrices from "@/data/boe_prices.json";

// We want to generate SEO pages for the most searched imported cars.
// Instead of generating 40,000 pages (which would kill build times),
// we statically define the top ~30 models here.

export const TOP_SEO_MODELS = [
  { brand: "Volkswagen", modelQuery: "Golf" },
  { brand: "Volkswagen", modelQuery: "Polo" },
  { brand: "Volkswagen", modelQuery: "Tiguan" },
  { brand: "Volkswagen", modelQuery: "Passat" },
  { brand: "BMW", modelQuery: "Serie 3" },
  { brand: "BMW", modelQuery: "Serie 1" },
  { brand: "BMW", modelQuery: "X3" },
  { brand: "BMW", modelQuery: "X5" },
  { brand: "BMW", modelQuery: "M4" },
  { brand: "Mercedes-Benz", modelQuery: "Clase A" },
  { brand: "Mercedes-Benz", modelQuery: "Clase C" },
  { brand: "Mercedes-Benz", modelQuery: "Clase E" },
  { brand: "Mercedes-Benz", modelQuery: "GLC" },
  { brand: "Mercedes-Benz", modelQuery: "AMG" },
  { brand: "Audi", modelQuery: "A3" },
  { brand: "Audi", modelQuery: "A4" },
  { brand: "Audi", modelQuery: "Q3" },
  { brand: "Audi", modelQuery: "Q5" },
  { brand: "Ford", modelQuery: "Focus" },
  { brand: "Ford", modelQuery: "Fiesta" },
  { brand: "Ford", modelQuery: "Mustang" },
  { brand: "Renault", modelQuery: "Megane" },
  { brand: "Renault", modelQuery: "Clio" },
  { brand: "Peugeot", modelQuery: "208" },
  { brand: "Peugeot", modelQuery: "3008" },
  { brand: "Toyota", modelQuery: "Corolla" },
  { brand: "Toyota", modelQuery: "Yaris" },
  { brand: "Toyota", modelQuery: "RAV4" },
  { brand: "Porsche", modelQuery: "911" },
  { brand: "Porsche", modelQuery: "Macan" },
  { brand: "Porsche", modelQuery: "Cayenne" },
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

// Function to find the absolute most popular/expensive variant of a query in our BOE database
// For example, if the query is "Golf", we find the highest value Golf to use as the page's "Hero" car.
export function getHeroCarForModel(
  brand: string,
  modelQuery: string,
): Vehicle | null {
  const lowerQuery = modelQuery.toLowerCase();

  const matches = (boePrices as unknown as Vehicle[]).filter(
    (v) => v.brand === brand && v.model.toLowerCase().includes(lowerQuery),
  );

  if (matches.length === 0) return null;

  // Sort by value descending.
  matches.sort((a, b) => b.value - a.value);

  return matches[0];
}
