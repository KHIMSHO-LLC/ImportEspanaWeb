"use client";

import { useState } from "react";
import { Calendar, Coins, Fuel, Gauge, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { formatCurrency } from "@/utils/currency";

interface Props {
  totalImportCost: number;
  co2Emissions: number;
  carPrice: number;
}

// Spanish averages, 2026 — public sources (UNESPA, IDAE, Ayuntamientos):
// • Insurance fully comprehensive: ~600€/yr (older) → 1500€/yr (premium new). Average 800€.
// • IVTM (impuesto circulación, road tax): 50-200€/yr depending on city + fiscal-power.
//   We default to 90€/yr as a national midpoint.
// • ITV biennial (every 2 years for cars 4-10y, yearly after 10y): ~40€ avg → 20€/yr amortised.
// • Maintenance + tyres + fluids: ~600€/yr.
// • Fuel: 12.000 km/yr × 6 L/100 km × 1.50 €/L = 1080€/yr (petrol). EVs: 12.000 km × 0.18 kWh × 0.18 €/kWh ≈ 390€/yr.
const ANNUAL_DEFAULT = {
  insurance: 800,
  ivtm: 90,
  itv: 20,
  maintenance: 600,
};

function annualFuelEstimate(co2: number) {
  if (co2 === 0) return 390; // EV approximation
  // l/100km ≈ co2 / 23.2 for petrol, /26.5 for diesel — pick midpoint 25.
  const lp100 = co2 / 25;
  const kmYear = 12000;
  const pricePerLitre = 1.5;
  return Math.round((lp100 / 100) * kmYear * pricePerLitre);
}

export function TcoPanel({ totalImportCost, co2Emissions, carPrice }: Props) {
  const { language } = useLanguage();
  const [years, setYears] = useState<1 | 5>(1);

  const fuel = annualFuelEstimate(co2Emissions);
  const annualOps =
    ANNUAL_DEFAULT.insurance +
    ANNUAL_DEFAULT.ivtm +
    ANNUAL_DEFAULT.itv +
    ANNUAL_DEFAULT.maintenance +
    fuel;
  const total = totalImportCost + annualOps * years;

  const t = (es: string, en: string, de = en, fr = en, ru = en) =>
    language === "es"
      ? es
      : language === "de"
      ? de
      : language === "fr"
      ? fr
      : language === "ru"
      ? ru
      : en;

  return (
    <div className="card p-5 md:p-6 space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h3 className="heading-section text-lg flex items-center gap-2">
            <Coins size={18} className="text-[var(--brand-blue)]" />
            {t(
              "Coste real de propiedad",
              "Total cost of ownership",
              "Echte Eigentumskosten",
              "Coût total de possession",
              "Полная стоимость владения",
            )}
          </h3>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">
            {t(
              "Importación + gastos anuales (seguro, IVTM, ITV, mantenimiento, combustible).",
              "Import + annual running costs (insurance, IVTM, ITV, maintenance, fuel).",
            )}
          </p>
        </div>
        <div className="pill-group">
          <button
            className={`pill-option ${years === 1 ? "active" : ""}`}
            onClick={() => setYears(1)}
          >
            1 {t("año", "year")}
          </button>
          <button
            className={`pill-option ${years === 5 ? "active" : ""}`}
            onClick={() => setYears(5)}
          >
            5 {t("años", "years")}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
        <Stat
          icon={<Gauge size={14} className="text-[var(--brand-blue)]" />}
          label={t("Seguro", "Insurance")}
          value={ANNUAL_DEFAULT.insurance * years}
        />
        <Stat
          icon={<Calendar size={14} className="text-purple-500" />}
          label="IVTM"
          value={ANNUAL_DEFAULT.ivtm * years}
        />
        <Stat
          icon={<Wrench size={14} className="text-amber-500" />}
          label={t("Mantenim.", "Maintenance")}
          value={ANNUAL_DEFAULT.maintenance * years}
        />
        <Stat
          icon={<Fuel size={14} className="text-emerald-500" />}
          label={t("Combustible", "Fuel")}
          value={fuel * years}
        />
        <Stat
          icon={<Calendar size={14} className="text-[var(--text-tertiary)]" />}
          label="ITV"
          value={ANNUAL_DEFAULT.itv * years}
        />
      </div>

      <div className="flex justify-between items-baseline pt-3 border-t border-[var(--surface-border)]">
        <span className="text-sm font-semibold">
          {t("Coste total estimado", "Total estimated cost")} ({years}{" "}
          {years === 1 ? t("año", "yr") : t("años", "yrs")})
        </span>
        <span className="number-display text-2xl font-bold text-[var(--brand-blue)]">
          {formatCurrency(total)}
        </span>
      </div>

      <p className="text-[10px] text-[var(--text-tertiary)] italic">
        {t(
          "Estimaciones basadas en medias nacionales 2026 (UNESPA, IDAE). Ajusta en /resources si tu uso difiere.",
          "Estimates based on 2026 national averages (UNESPA, IDAE). Adjust at /resources if your usage differs.",
        )}
      </p>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface-dim)] p-2.5 sm:p-3 min-w-0">
      <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[var(--text-tertiary)] mb-1 truncate">
        {icon}
        <span className="truncate">{label}</span>
      </div>
      <div className="number-display text-[13px] sm:text-sm font-semibold text-[var(--text-primary)] truncate">
        {formatCurrency(value)}
      </div>
    </div>
  );
}
