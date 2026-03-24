// ITP (Impuesto de Transmisiones Patrimoniales) rates for used vehicles
// by Spanish Autonomous Community (Comunidad Autónoma)
// Source: Official regional tax agencies, 2026
//
// NOTES:
// - Canarias uses IGIC (not ITP) — effectively 0% ITP applies here
// - Ceuta and Melilla use IPSI (not ITP) — effectively 0% ITP applies here
// - These territories are shown with rate 0 to avoid incorrectly charging ITP

export interface SpanishRegion {
  name: string;
  rate: number; // e.g. 0.04 = 4%
  label: string; // Display label with rate
}

export const SPANISH_REGIONS: SpanishRegion[] = [
  { name: "Andalucía", rate: 0.04, label: "Andalucía (4%)" },
  { name: "Aragón", rate: 0.04, label: "Aragón (4%)" },
  { name: "Asturias", rate: 0.08, label: "Asturias (8%)" },
  { name: "Baleares", rate: 0.04, label: "Islas Baleares (4%)" },
  { name: "Canarias", rate: 0.0, label: "Canarias (IGIC — no ITP)" },
  { name: "Cantabria", rate: 0.08, label: "Cantabria (8%)" },
  { name: "Castilla y León", rate: 0.05, label: "Castilla y León (5%)" },
  { name: "Castilla-La Mancha", rate: 0.06, label: "Castilla-La Mancha (6%)" },
  { name: "Cataluña", rate: 0.06, label: "Cataluña (6%)" },
  { name: "Ceuta", rate: 0.0, label: "Ceuta (IPSI — no ITP)" },
  { name: "Comunidad Valenciana", rate: 0.06, label: "C. Valenciana (6%)" },
  { name: "Extremadura", rate: 0.06, label: "Extremadura (6%)" },
  { name: "Galicia", rate: 0.08, label: "Galicia (8%)" },
  { name: "Madrid", rate: 0.04, label: "Madrid (4%)" },
  { name: "Melilla", rate: 0.0, label: "Melilla (IPSI — no ITP)" },
  { name: "Murcia", rate: 0.04, label: "Murcia (4%)" },
  { name: "Navarra", rate: 0.04, label: "Navarra (4%)" },
  { name: "País Vasco", rate: 0.04, label: "País Vasco (4%)" },
  { name: "La Rioja", rate: 0.04, label: "La Rioja (4%)" },
];

export const DEFAULT_ITP_RATE = 0.04;
