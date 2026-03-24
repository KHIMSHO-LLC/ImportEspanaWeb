import { CalculationInput, CalculationResult, Country } from "../types";
import { DEFAULT_ITP_RATE } from "../constants/ItpRates";

// Official Hacienda Depreciation Table (BOE)
// Represents the % of value RETAINED by the car.
export const DEPRECIATION_TABLE = {
  new: 1.0, // Less than 1 year: 100%
  "1_year": 0.84, // 1-2 years: 84%
  "2_years": 0.67, // 2-3 years: 67%
  "3_years": 0.56, // 3-4 years: 56%
  "4_years": 0.47, // 4-5 years: 47%
  "5_years": 0.39, // 5-6 years: 39%
  "6_years": 0.34, // 6-7 years: 34%
  "7_years": 0.28, // 7-8 years: 28%
  "8_years": 0.24, // 8-9 years: 24%
  "9_years": 0.19, // 9-10 years: 19%
  "10_years": 0.17, // 10-11 years: 17%
  "11_years": 0.13, // 11-12 years: 13%
  "12_plus_years": 0.1, // More than 12 years: 10%
};

const TRANSPORT_COSTS: Record<Country, number> = {
  Germany: 800,
  France: 600,
  Italy: 900,
  Belgium: 850,
  Netherlands: 850,
  USA: 1500,
  UAE: 1200,
  Japan: 2000,
  Korea: 2000,
};

// Regional IEDMT top-bracket (≥200 g/km) overrides
// Source: Agencia Tributaria, updated March 3, 2026
// Only the top bracket is confirmed from official sources; middle brackets default to national rates.
// Canarias/Ceuta/Melilla apply 0% to ALL brackets (IGIC/IPSI territories).
const IEDMT_TOP_BRACKET_BY_REGION: Record<string, number> = {
  Asturias: 0.16,        // +1.25% over national 14.75%
  Cataluña: 0.16,        // +1.25%
  "Comunidad Valenciana": 0.16, // +1.25%
  Murcia: 0.159,         // +1.15%
  Cantabria: 0.15,       // +0.25%
  Baleares: 0.16,        // +1.25%
  Canarias: 0.0,         // IGIC territory — all IEDMT brackets = 0%
  Ceuta: 0.0,            // IPSI territory — all IEDMT brackets = 0%
  Melilla: 0.0,          // IPSI territory — all IEDMT brackets = 0%
};

// Regions where ALL IEDMT brackets (not just the top) are 0%
const IEDMT_ALL_ZERO_REGIONS = new Set(["Canarias", "Ceuta", "Melilla"]);

const FEES = {
  DGT: 99.77,   // Tasa 1.1 DGT — permiso de circulación (BOE 2026)
  ITV: 150.0,   // ITV for imported vehicles (~150-250 depending on centre)
  PLATES: 50.0, // License plates (made by private suppliers, ~30-70€)
  HOMOLOGATION: 1500.0, // Avg cost for individual homologation (range 500-2500)
};

export function getDepreciationFactor(
  registrationDate?: string,
  carAge?: keyof typeof DEPRECIATION_TABLE,
): number {
  if (registrationDate) {
    const [yearStr, monthStr] = registrationDate.split("-");
    if (yearStr && monthStr) {
      const regYear = parseInt(yearStr, 10);
      const regMonth = parseInt(monthStr, 10);

      const today = new Date();
      const todayYear = today.getFullYear();
      const todayMonth = today.getMonth() + 1;

      let months = (todayYear - regYear) * 12 + (todayMonth - regMonth);
      if (months < 0) months = 0;

      if (months < 12) return 1.0;
      if (months < 24) return 0.84;
      if (months < 36) return 0.67;
      if (months < 48) return 0.56;
      if (months < 60) return 0.47;
      if (months < 72) return 0.39;
      if (months < 84) return 0.34;
      if (months < 96) return 0.28;
      if (months < 108) return 0.24;
      if (months < 120) return 0.19;
      if (months < 132) return 0.17;
      if (months < 144) return 0.13;
      return 0.1;
    }
  }
  return carAge && DEPRECIATION_TABLE[carAge as keyof typeof DEPRECIATION_TABLE]
    ? DEPRECIATION_TABLE[carAge as keyof typeof DEPRECIATION_TABLE]
    : 1.0;
}

export function calculateImportCost(
  input: CalculationInput,
): CalculationResult {
  // 1. Determine Tax Base (Base Imponible)
  // Logic: Official BOE Value * Depreciation Factor
  const depreciationFactor = getDepreciationFactor(
    input.registrationDate,
    input.carAge,
  );
  const taxBase = input.officialFiscalValue * depreciationFactor;

  // 2. Registration Tax (IEDMT — Impuesto Especial sobre Determinados Medios de Transporte)
  // National brackets: 0% / 4.75% / 9.75% / 14.75%
  // Regional overrides: some communities modify the top bracket; Canarias/Ceuta/Melilla = 0% always
  const region = input.spanishRegion;
  let taxRate = 0;
  if (region && IEDMT_ALL_ZERO_REGIONS.has(region)) {
    taxRate = 0;
  } else if (input.co2Emissions <= 120) {
    taxRate = 0;
  } else if (input.co2Emissions < 160) {
    taxRate = 0.0475;
  } else if (input.co2Emissions < 200) {
    taxRate = 0.0975;
  } else {
    // Top bracket: use regional override if confirmed, else national 14.75%
    taxRate =
      region && IEDMT_TOP_BRACKET_BY_REGION[region] !== undefined
        ? IEDMT_TOP_BRACKET_BY_REGION[region]
        : 0.1475;
  }

  const registrationTax = taxBase * taxRate;

  // 3. Non-EU Taxes (Duty + VAT)
  let duty = 0;
  let vat = 0;
  let itpTax = 0;

  if (input.importType === "NonEU") {
    // Duty = 10% of (CIF Value = Price + Transport)
    const cifValue = input.carPrice + (input.transportCost || 0);
    duty = cifValue * 0.1;

    // VAT = 21% of (CIF + Duty)
    const vatBase = cifValue + duty;
    vat = vatBase * 0.21;

    // No ITP for Non-EU imports (VAT applies instead)
    itpTax = 0;
  } else {
    // EU Logic: New vs Used, Private vs Dealer
    if (input.isNewCondition) {
      vat = input.carPrice * 0.21; // "New" cars always pay 21% Spanish IVA
      itpTax = 0;
    } else {
      if (input.sellerType === "dealer") {
        vat = 0;
        itpTax = 0;
      } else {
        // private seller
        vat = 0;
        // Use selected region rate; fall back to national average (4%) if none provided
        const rateITP = input.itpRate ?? DEFAULT_ITP_RATE;
        itpTax = taxBase * rateITP;
      }
    }
  }

  // 4. Logistics & Fees
  const transport = input.transportCost ?? TRANSPORT_COSTS[input.originCountry];
  const totalFees =
    FEES.DGT +
    FEES.ITV +
    FEES.PLATES +
    (input.customsAgentFee || 0) +
    (input.needsHomologation ? FEES.HOMOLOGATION : 0);

  // 5. Totals
  const totalImportTaxes = registrationTax + itpTax + duty + vat + totalFees;
  const totalCost = input.carPrice + totalImportTaxes + transport;

  return {
    purchasePrice: input.carPrice,
    taxBase,
    registrationTax,
    itpTax,
    duty,
    vat,
    customsAgentFee: input.customsAgentFee,
    homologationFee: input.needsHomologation ? FEES.HOMOLOGATION : 0,
    dgtFee: FEES.DGT,
    itvFee: FEES.ITV,
    platesFee: FEES.PLATES,
    transportCost: transport,
    totalImportTaxes,
    totalCost,
    taxRateApplied: taxRate,
    depreciationPercentage: depreciationFactor,
  };
}
