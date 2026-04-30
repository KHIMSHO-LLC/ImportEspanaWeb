import { test, expect } from "@playwright/test";
import {
  calculateImportCost,
  getDepreciationFactor,
  getIedmtRate,
  getItpCalc,
  DEPRECIATION_TABLE,
  IEDMT_BRACKETS,
} from "../src/utils/taxCalculator";
import type { CalculationInput } from "../src/types";

// Lightweight tolerance for FP comparisons.
const eq = (a: number, b: number, tol = 0.01) => Math.abs(a - b) < tol;

const baseEU: CalculationInput = {
  importType: "EU",
  originCountry: "Germany",
  carPrice: 20000,
  officialFiscalValue: 35000,
  carAge: "3_years",
  co2Emissions: 130,
  sellerType: "dealer",
  spanishRegion: "Madrid",
};

// ─── DEPRECIATION TABLE ────────────────────────────────────────────────────
test.describe("Depreciation table — Orden HAC/1501/2025", () => {
  test("matches official table values", () => {
    expect(DEPRECIATION_TABLE.new).toBe(1.0);
    expect(DEPRECIATION_TABLE["1_year"]).toBe(0.84);
    expect(DEPRECIATION_TABLE["3_years"]).toBe(0.56);
    expect(DEPRECIATION_TABLE["5_years"]).toBe(0.39);
    expect(DEPRECIATION_TABLE["12_plus_years"]).toBe(0.1);
  });

  test("getDepreciationFactor by registration date", () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    expect(getDepreciationFactor(`${yyyy}-${mm}`)).toBe(1.0);
    expect(getDepreciationFactor(`${yyyy - 3}-${mm}`)).toBe(0.56);
    expect(getDepreciationFactor(`${yyyy - 13}-${mm}`)).toBe(0.1);
  });
});

// ─── IEDMT BRACKETS ─────────────────────────────────────────────────────────
test.describe("IEDMT national brackets — Ley 38/1992 art. 70", () => {
  test("CO2 < 120 → 0% (epígrafe 1)", () => {
    expect(getIedmtRate(0)).toBe(0);
    expect(getIedmtRate(119)).toBe(0);
  });

  test("120 ≤ CO2 < 160 → 4.75% (epígrafe 2)", () => {
    expect(getIedmtRate(120)).toBe(0.0475);
    expect(getIedmtRate(159)).toBe(0.0475);
  });

  test("160 ≤ CO2 < 200 → 9.75% (epígrafe 3)", () => {
    expect(getIedmtRate(160)).toBe(0.0975);
    expect(getIedmtRate(199)).toBe(0.0975);
  });

  test("CO2 ≥ 200 → 14.75% national (epígrafe 4)", () => {
    expect(getIedmtRate(200)).toBe(0.1475);
    expect(getIedmtRate(350)).toBe(0.1475);
  });
});

// ─── REGIONAL IEDMT OVERRIDES ───────────────────────────────────────────────
test.describe("IEDMT regional top-bracket overrides", () => {
  test("Cataluña top bracket = 16%", () => {
    expect(getIedmtRate(200, "Cataluña")).toBe(0.16);
    expect(getIedmtRate(150, "Cataluña")).toBe(0.0475); // middle bracket unchanged
  });

  test("Murcia top bracket = 15.9%", () => {
    expect(getIedmtRate(220, "Murcia")).toBe(0.159);
  });

  test("Asturias / Baleares / Valencia top = 16%", () => {
    expect(getIedmtRate(210, "Asturias")).toBe(0.16);
    expect(getIedmtRate(210, "Baleares")).toBe(0.16);
    expect(getIedmtRate(210, "Comunidad Valenciana")).toBe(0.16);
  });

  test("Canarias / Ceuta / Melilla → 0% all brackets", () => {
    expect(getIedmtRate(250, "Canarias")).toBe(0);
    expect(getIedmtRate(250, "Ceuta")).toBe(0);
    expect(getIedmtRate(250, "Melilla")).toBe(0);
  });

  test("Cantabria uses national 14.75% (regression — was 15% in old code)", () => {
    expect(getIedmtRate(220, "Cantabria")).toBe(0.1475);
  });

  test("Zero-emissions vehicle always 0% IEDMT regardless of region", () => {
    expect(getIedmtRate(0, "Madrid", true)).toBe(0);
    expect(getIedmtRate(50, "Cataluña", true)).toBe(0); // hybrid w/ low CO2 + zero badge override
  });
});

// ─── ITP REGIONAL EXEMPTIONS ────────────────────────────────────────────────
test.describe("ITP regional exemptions and reductions", () => {
  test("Cataluña: zero-emissions exempt (Decreto-ley 5/2025)", () => {
    const r = getItpCalc({
      region: "Cataluña",
      defaultRate: 0.05,
      isZeroEmission: true,
      vehicleAgeYears: 2,
      originalValue: 30000,
    });
    expect(r.exempt).toBe(true);
    expect(r.rate).toBe(0);
    expect(r.reasonCode).toBe("cat_zero_emissions");
  });

  test("Cataluña: ≥10 years AND <40k€ exempt", () => {
    const r = getItpCalc({
      region: "Cataluña",
      defaultRate: 0.05,
      isZeroEmission: false,
      vehicleAgeYears: 12,
      originalValue: 25000,
    });
    expect(r.exempt).toBe(true);
    expect(r.reasonCode).toBe("cat_old_low_value");
  });

  test("Cataluña: ≥10 years but ≥40k€ → not exempt, pays 5%", () => {
    const r = getItpCalc({
      region: "Cataluña",
      defaultRate: 0.05,
      isZeroEmission: false,
      vehicleAgeYears: 12,
      originalValue: 80000,
    });
    expect(r.exempt).toBe(false);
    expect(r.rate).toBe(0.05);
  });

  test("Andalucía: zero-emissions reduced 1% ITP", () => {
    const r = getItpCalc({
      region: "Andalucía",
      defaultRate: 0.04,
      isZeroEmission: true,
      vehicleAgeYears: 1,
      originalValue: 50000,
    });
    expect(r.rate).toBe(0.01);
    expect(r.reasonCode).toBe("and_zero_emissions");
  });

  test("Special territories: 0% ITP", () => {
    expect(
      getItpCalc({
        region: "Canarias",
        defaultRate: 0,
        isZeroEmission: false,
        vehicleAgeYears: 5,
        originalValue: 30000,
      }).exempt,
    ).toBe(true);
  });

  test("Madrid default: 4% ITP", () => {
    const r = getItpCalc({
      region: "Madrid",
      defaultRate: 0.04,
      isZeroEmission: false,
      vehicleAgeYears: 5,
      originalValue: 30000,
    });
    expect(r.rate).toBe(0.04);
    expect(r.exempt).toBe(false);
  });
});

// ─── INTEGRATION: REPRESENTATIVE SCENARIOS ─────────────────────────────────
test.describe("Integration scenarios", () => {
  test("Scenario 1 — EU dealer used (BMW 320d 3y old, Madrid)", () => {
    const r = calculateImportCost({
      ...baseEU,
      carPrice: 22000,
      officialFiscalValue: 38000,
      carAge: "3_years", // 56% retained → taxBase 21,280€
      co2Emissions: 130, // 4.75%
      sellerType: "dealer",
      spanishRegion: "Madrid",
    });
    expect(eq(r.taxBase, 38000 * 0.56)).toBe(true);
    expect(r.taxRateApplied).toBe(0.0475);
    expect(eq(r.registrationTax, 38000 * 0.56 * 0.0475)).toBe(true);
    expect(r.itpTax).toBe(0);
    expect(r.duty).toBe(0);
    expect(r.vat).toBe(0);
  });

  test("Scenario 2 — EU private used (Mercedes E-Class, Cataluña, 8y old, 80k€)", () => {
    const r = calculateImportCost({
      ...baseEU,
      carPrice: 18000,
      officialFiscalValue: 80000,
      carAge: "8_years", // 24% retained
      co2Emissions: 180, // bracket 3 → 9.75%
      sellerType: "private",
      itpRate: 0.05, // Cataluña fixed
      spanishRegion: "Cataluña",
    });
    const expectedBase = 80000 * 0.24;
    expect(eq(r.taxBase, expectedBase)).toBe(true);
    expect(eq(r.itpTax, expectedBase * 0.05)).toBe(true); // 5% Cataluña, NOT exempt (<10y)
    expect(r.itpRateApplied).toBe(0.05);
    expect(r.taxRateApplied).toBe(0.0975);
  });

  test("Scenario 3 — EU new (VW Golf, France)", () => {
    const r = calculateImportCost({
      ...baseEU,
      originCountry: "France",
      carPrice: 30000,
      officialFiscalValue: 30000,
      isNewCondition: true,
      co2Emissions: 110,
      sellerType: "dealer",
      spanishRegion: "Madrid",
    });
    expect(r.taxBase).toBe(30000); // new → uses carPrice
    expect(r.vat).toBe(30000 * 0.21); // 21% intracommunity new
    expect(r.taxRateApplied).toBe(0); // CO2 < 120
    expect(r.registrationTax).toBe(0);
  });

  test("Scenario 4 — Non-EU import (Lexus from Japan, used 2y)", () => {
    const r = calculateImportCost({
      ...baseEU,
      importType: "NonEU",
      originCountry: "Japan",
      carPrice: 25000,
      officialFiscalValue: 60000,
      carAge: "2_years", // 67%
      co2Emissions: 175,
      sellerType: "dealer",
      transportCost: 2000,
      insuranceCost: 200,
      spanishRegion: "Madrid",
    });
    const cif = 25000 + 2000 + 200; // 27,200
    const expectedDuty = cif * 0.1;
    const expectedVat = (cif + expectedDuty) * 0.21;
    expect(eq(r.duty!, expectedDuty)).toBe(true);
    expect(eq(r.vat!, expectedVat)).toBe(true);
    expect(r.itpTax).toBe(0); // never ITP for non-EU
    expect(r.taxRateApplied).toBe(0.0975); // bracket 3
  });

  test("Scenario 5 — Tesla Model 3 EV from Germany to Cataluña (private)", () => {
    const r = calculateImportCost({
      ...baseEU,
      carPrice: 35000,
      officialFiscalValue: 50000,
      carAge: "2_years",
      co2Emissions: 0,
      sellerType: "private",
      itpRate: 0.05,
      spanishRegion: "Cataluña",
    });
    expect(r.taxRateApplied).toBe(0); // EV → 0% IEDMT
    expect(r.itpTax).toBe(0); // Cataluña EV exempt
    expect(r.itpExemptReason).toBe("cat_zero_emissions");
  });

  test("Scenario 6 — Audit-risk indicator: declared price 50% of market", () => {
    const r = calculateImportCost({
      ...baseEU,
      carPrice: 5000, // declared
      officialFiscalValue: 30000,
      carAge: "3_years", // market = 16,800
      co2Emissions: 130,
      sellerType: "private",
      itpRate: 0.04,
      spanishRegion: "Madrid",
    });
    expect(r.auditRisk).toBe("high");
  });

  test("Scenario 7 — High emissions to Cataluña uses 16% top bracket", () => {
    const r = calculateImportCost({
      ...baseEU,
      carPrice: 50000,
      officialFiscalValue: 80000,
      carAge: "1_year", // 84%
      co2Emissions: 220, // ≥200 → bracket 4 → Cataluña override 16%
      sellerType: "dealer",
      spanishRegion: "Cataluña",
    });
    expect(r.taxRateApplied).toBe(0.16);
    expect(eq(r.registrationTax, 80000 * 0.84 * 0.16)).toBe(true);
  });

  test("Scenario 8 — Canarias special territory: 0% IEDMT and 0% ITP", () => {
    const r = calculateImportCost({
      ...baseEU,
      carPrice: 20000,
      officialFiscalValue: 35000,
      carAge: "3_years",
      co2Emissions: 220, // would be top bracket
      sellerType: "private",
      itpRate: 0,
      spanishRegion: "Canarias",
    });
    expect(r.taxRateApplied).toBe(0);
    expect(r.registrationTax).toBe(0);
    expect(r.itpTax).toBe(0);
  });

  test("Scenario 9 — Andalucía EV private: 1% ITP", () => {
    const r = calculateImportCost({
      ...baseEU,
      carPrice: 30000,
      officialFiscalValue: 40000,
      carAge: "1_year", // 84%
      co2Emissions: 0,
      sellerType: "private",
      itpRate: 0.04,
      spanishRegion: "Andalucía",
    });
    expect(r.itpRateApplied).toBe(0.01);
    expect(eq(r.itpTax, 40000 * 0.84 * 0.01)).toBe(true);
    expect(r.itpExemptReason).toBe("and_zero_emissions");
  });

  test("Scenario 10 — Cataluña classic: 12y old, 25k€ original → exempt", () => {
    const r = calculateImportCost({
      ...baseEU,
      carPrice: 5000,
      officialFiscalValue: 25000,
      registrationDate: `${new Date().getFullYear() - 12}-01`,
      co2Emissions: 180,
      sellerType: "private",
      itpRate: 0.05,
      spanishRegion: "Cataluña",
    });
    expect(r.itpTax).toBe(0);
    expect(r.itpExemptReason).toBe("cat_old_low_value");
  });
});

// ─── FEES ───────────────────────────────────────────────────────────────────
test.describe("DGT and admin fees (2026)", () => {
  test("DGT Tasa 1.1 + 4.6 always applied", () => {
    const r = calculateImportCost(baseEU);
    expect(eq(r.dgtFee, 99.77 + 4.18)).toBe(true);
  });

  test("ITV inspection fee always present", () => {
    const r = calculateImportCost(baseEU);
    expect(r.itvFee).toBeGreaterThan(0);
  });

  test("Homologation only when needsHomologation=true", () => {
    expect(calculateImportCost(baseEU).homologationFee).toBe(0);
    expect(
      calculateImportCost({ ...baseEU, needsHomologation: true })
        .homologationFee,
    ).toBe(1500);
  });

  test("Plates fee 50€", () => {
    expect(calculateImportCost(baseEU).platesFee).toBe(50);
  });
});
