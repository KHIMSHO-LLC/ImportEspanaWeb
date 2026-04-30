import { test, expect } from "@playwright/test";
import { calculateImportCost } from "../src/utils/taxCalculator";
import type { CalculationInput } from "../src/types";

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD VALIDATION
// Each scenario replicates a worked example published by an external authority
// (RACE, Agencia Tributaria de Cataluña simulator, smartcarrenting.com, etc.)
// and asserts our calculator returns the same number within tolerance.
// ─────────────────────────────────────────────────────────────────────────────

const baseInput: Partial<CalculationInput> = {
  importType: "EU",
  originCountry: "Germany",
  sellerType: "dealer",
  needsHomologation: false,
};

// ─── Reference #1: RACE — IEDMT 30k€ vehicle, 126 g/km ──────────────────────
// Source: race.es/impuesto-matriculacion-coche
// Inputs: pre-VAT vehicle value €30,000; CO₂ 126 g/km; new vehicle.
// Expected: rate 4.75% → IEDMT €1,425.
test("RACE IEDMT example: €30k @ 126 g/km new → €1,425 matriculación", () => {
  const r = calculateImportCost({
    ...(baseInput as CalculationInput),
    importType: "EU",
    originCountry: "Germany",
    carPrice: 30000,
    officialFiscalValue: 30000,
    isNewCondition: true,
    carAge: "new",
    co2Emissions: 126,
    sellerType: "dealer",
    spanishRegion: "Madrid",
  });
  expect(r.taxRateApplied).toBe(0.0475);
  // 30,000 × 4.75% = 1,425 exact.
  expect(Math.round(r.registrationTax)).toBe(1425);
});

// ─── Reference #2: RACE — ITP Seat León, Madrid, 15y → €56.40 ───────────────
// Source: race.es/impuesto-transmisiones-patrimoniales-coche
// Inputs: BOE valuation €14,100; depreciation 90% (10% retained — 12+ yrs);
//         Madrid 4%.
// Expected: taxable base €1,410, ITP €56.40.
test("RACE ITP example: Seat León 15y old, Madrid → €56.40", () => {
  const r = calculateImportCost({
    ...(baseInput as CalculationInput),
    importType: "EU",
    originCountry: "Germany",
    carPrice: 1500, // private sale value (low)
    officialFiscalValue: 14100,
    carAge: "12_plus_years", // 10% retained per Orden HAC
    co2Emissions: 150, // Seat León 1.4 TSI ~150 g/km (out of scope for ITP)
    sellerType: "private",
    itpRate: 0.04,
    spanishRegion: "Madrid",
  });
  // Tax base 14,100 × 0.10 = 1,410
  expect(Math.round(r.taxBase)).toBe(1410);
  // ITP 1,410 × 4% = 56.40
  expect(Math.round(r.itpTax * 100) / 100).toBe(56.4);
});

// ─── Reference #3: ATC Cataluña — €50k @ 5% → €2,500 ────────────────────────
// Source: ATC Cataluña + multiple aggregators.
// Inputs: fiscal value €50,000; Cataluña; private sale; not exempt
//         (we make it old enough but >40k€ so not exempt).
test("Cataluña ITP: €50k tax base → €2,500", () => {
  // Use a brand-new car so depreciation = 100%.
  const r = calculateImportCost({
    ...(baseInput as CalculationInput),
    importType: "EU",
    originCountry: "Germany",
    carPrice: 50000,
    officialFiscalValue: 50000,
    carAge: "new",
    co2Emissions: 150, // anything above 0 to disable EV exemption
    sellerType: "private",
    itpRate: 0.05,
    spanishRegion: "Cataluña",
  });
  expect(Math.round(r.itpTax)).toBe(2500); // 50,000 × 5%
  expect(r.itpRateApplied).toBe(0.05);
});

// ─── Reference #4: Cataluña 12y/<40k → exempt ──────────────────────────────
// Source: ATC Cataluña — vehicles ≥10y AND original value <40k€ are exempt
//         (since Decreto-ley 5/2025).
test("Cataluña classic ITP: 12y old, 30k€ original → ITP €0 exempt", () => {
  const r = calculateImportCost({
    ...(baseInput as CalculationInput),
    importType: "EU",
    originCountry: "Germany",
    carPrice: 4000,
    officialFiscalValue: 30000,
    carAge: "12_plus_years",
    co2Emissions: 180,
    sellerType: "private",
    itpRate: 0.05,
    spanishRegion: "Cataluña",
  });
  expect(r.itpTax).toBe(0);
  expect(r.itpExemptReason).toBe("cat_old_low_value");
});

// ─── Reference #5: ITP Andalucía 1% EV ──────────────────────────────────────
// Source: Junta de Andalucía / Ley 5/2021.
// EV worth €40k, 1y old in Andalucía → ITP 1% on (40k × 0.84 = 33,600) = €336.
test("Andalucía EV ITP: 40k€ 1y old → €336 (1% reduced)", () => {
  const r = calculateImportCost({
    ...(baseInput as CalculationInput),
    importType: "EU",
    originCountry: "Germany",
    carPrice: 35000,
    officialFiscalValue: 40000,
    carAge: "1_year",
    co2Emissions: 0,
    sellerType: "private",
    itpRate: 0.04,
    spanishRegion: "Andalucía",
  });
  expect(r.itpRateApplied).toBe(0.01);
  expect(Math.round(r.itpTax)).toBe(336); // 40,000 × 0.84 × 0.01
});

// ─── Reference #6: Non-EU CIF + duty + VAT chain ────────────────────────────
// Standard formula widely published (Hacienda + multiple gestoría sites):
// CIF = price + freight + insurance
// duty = CIF × 10%
// VAT = (CIF + duty) × 21%
// Inputs: price 25k, freight 2k, insurance 200 → CIF 27,200
//   duty = 2,720
//   VAT = (27,200 + 2,720) × 0.21 = 6,283.20
test("Non-EU import duty + VAT formula matches Hacienda chain", () => {
  const r = calculateImportCost({
    ...(baseInput as CalculationInput),
    importType: "NonEU",
    originCountry: "Japan",
    carPrice: 25000,
    officialFiscalValue: 60000,
    carAge: "2_years",
    co2Emissions: 175,
    sellerType: "dealer",
    transportCost: 2000,
    insuranceCost: 200,
    spanishRegion: "Madrid",
    needsHomologation: true,
  });
  expect(Math.round(r.duty!)).toBe(2720);
  expect(Math.round(r.vat! * 100) / 100).toBe(6283.2);
});

// ─── Reference #7: Boundary cases on CO₂ thresholds ─────────────────────────
// Per Ley 38/1992 art. 70: brackets are STRICT inequalities at upper bound.
// 119 g/km → 0%; 120 g/km → 4.75%; 159 → 4.75%; 160 → 9.75%; 199 → 9.75%; 200 → 14.75%.
test("CO₂ boundary 119/120 → 0% / 4.75% (strict less-than)", () => {
  const a = calculateImportCost({
    ...(baseInput as CalculationInput),
    importType: "EU",
    originCountry: "Germany",
    carPrice: 30000,
    officialFiscalValue: 30000,
    isNewCondition: true,
    carAge: "new",
    co2Emissions: 119,
    sellerType: "dealer",
    spanishRegion: "Madrid",
  });
  const b = calculateImportCost({
    ...(baseInput as CalculationInput),
    importType: "EU",
    originCountry: "Germany",
    carPrice: 30000,
    officialFiscalValue: 30000,
    isNewCondition: true,
    carAge: "new",
    co2Emissions: 120,
    sellerType: "dealer",
    spanishRegion: "Madrid",
  });
  expect(a.taxRateApplied).toBe(0);
  expect(b.taxRateApplied).toBe(0.0475);
});

test("CO₂ boundary 199/200 → 9.75% / 14.75% (national)", () => {
  const a = calculateImportCost({
    ...(baseInput as CalculationInput),
    importType: "EU",
    originCountry: "Germany",
    carPrice: 50000,
    officialFiscalValue: 50000,
    isNewCondition: true,
    carAge: "new",
    co2Emissions: 199,
    sellerType: "dealer",
    spanishRegion: "Madrid",
  });
  const b = calculateImportCost({
    ...(baseInput as CalculationInput),
    importType: "EU",
    originCountry: "Germany",
    carPrice: 50000,
    officialFiscalValue: 50000,
    isNewCondition: true,
    carAge: "new",
    co2Emissions: 200,
    sellerType: "dealer",
    spanishRegion: "Madrid",
  });
  expect(a.taxRateApplied).toBe(0.0975);
  expect(b.taxRateApplied).toBe(0.1475);
});
