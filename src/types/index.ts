export type Country =
  | "Germany"
  | "France"
  | "Italy"
  | "Belgium"
  | "Netherlands"
  | "USA"
  | "UAE"
  | "Japan"
  | "Korea";

export type ImportType = "EU" | "NonEU";

export type CarAge =
  | "new"
  | "1_year"
  | "2_years"
  | "3_years"
  | "4_years"
  | "5_years"
  | "6_years"
  | "7_years"
  | "8_years"
  | "9_years"
  | "10_years"
  | "11_years"
  | "12_plus_years";

export interface CalculationInput {
  importType?: ImportType;
  originCountry: Country;
  carPrice: number;                 // Invoice/transaction price the buyer pays.
  officialFiscalValue: number;      // BOE "precios medios" — original new value per Orden HAC.
  carAge?: CarAge;
  registrationDate?: string;        // YYYY-MM (preferred; overrides carAge).
  isNewCondition?: boolean;         // True if ≤ 6 months OR ≤ 6,000 km (intracommunity new).
  co2Emissions: number;             // g/km. 0 ⇒ zero-emissions / electric.
  sellerType: "dealer" | "private";
  transportCost?: number;           // Freight (€).
  insuranceCost?: number;           // Marine cargo insurance (Non-EU CIF).
  itpRate?: number;                 // Default regional ITP rate (0.04 ÷ 0.08).
  spanishRegion?: string;           // For ITP and IEDMT regional overrides.
  customsAgentFee?: number;
  needsHomologation?: boolean;
  brand?: string;
  model?: string;
}

export type ItpExemptReasonCode =
  | "special_territory"
  | "cat_zero_emissions"
  | "cat_old_low_value"
  | "and_zero_emissions";

export interface CalculationResult {
  purchasePrice: number;
  taxBase: number;                  // Base Imponible (used for IEDMT and ITP).
  marketValue: number;              // BOE × depreciation — used for audit-risk check.
  registrationTax: number;          // IEDMT.
  itpTax: number;                   // ITP private second-hand.
  itpRateApplied: number;           // Effective ITP rate after exemptions/reductions.
  itpExemptReason?: ItpExemptReasonCode;
  duty?: number;                    // Arancel TARIC 8703 (Non-EU).
  vat?: number;                     // IVA (intracommunity new or Non-EU import).
  customsAgentFee?: number;
  homologationFee?: number;
  dgtFee: number;
  itvFee: number;
  platesFee: number;
  transportCost: number;
  totalImportTaxes: number;
  totalCost: number;
  taxRateApplied: number;           // Effective IEDMT rate.
  depreciationPercentage: number;   // % value retained (0..1).
  auditRisk: "low" | "medium" | "high";
  auditRiskRatio: number;           // declared / market — informational.
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  startYear: string;
  endYear: string | null;
  cc: string;
  cylinders: string;
  fuelType: string;
  kw: string;
  cvf: string;
  cv: number;
  value: number;
  co2?: number | null;
}
