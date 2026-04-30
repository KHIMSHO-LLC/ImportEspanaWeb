"use client";

import { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { calculateImportCost } from "@/utils/taxCalculator";
import type { CalculationInput } from "@/types";
import { SPANISH_REGIONS } from "@/constants/ItpRates";
import { formatCurrency } from "@/utils/currency";
import { ArrowRight, Map } from "lucide-react";

interface Props {
  input: CalculationInput;
  current: number;
}

// Compares the same calculation across regions, surfacing the cheapest options.
// Useful for buyers who can register in different regions (e.g., EVs save in Cataluña).
export function RegionComparator({ input, current }: Props) {
  const { language } = useLanguage();

  const rows = useMemo(() => {
    return SPANISH_REGIONS.map((region) => {
      const result = calculateImportCost({
        ...input,
        spanishRegion: region.name,
        itpRate: input.sellerType === "private" ? region.rate : input.itpRate,
      });
      return {
        region: region.name,
        label: region.label,
        total: result.totalCost,
        registrationTax: result.registrationTax,
        itpTax: result.itpTax,
        diff: result.totalCost - current,
      };
    }).sort((a, b) => a.total - b.total);
  }, [input, current]);

  const cheapest = rows[0];
  const t = (es: string, en: string) => (language === "es" ? es : en);

  return (
    <div className="card p-5 md:p-6 space-y-4">
      <div className="flex items-start gap-2">
        <Map size={18} className="text-[var(--brand-blue)] mt-0.5 shrink-0" />
        <div>
          <h3 className="heading-section text-lg">
            {t("Comparativa por comunidad", "Compare across regions")}
          </h3>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">
            {t(
              "Mismo coche, distinta comunidad. Útil si puedes elegir dónde matricular.",
              "Same car, different regions. Useful if you have flexibility about where to register.",
            )}
          </p>
        </div>
      </div>

      {cheapest && (
        <div className="p-3 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/30 text-sm flex items-center gap-2">
          <ArrowRight size={14} className="text-emerald-500 shrink-0" />
          <span className="text-[var(--text-primary)]">
            {t("Más barata", "Cheapest")}:{" "}
            <strong>{cheapest.label}</strong> —{" "}
            {formatCurrency(cheapest.total)}
          </span>
        </div>
      )}

      <div className="overflow-x-auto -mx-2 px-2">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="text-left text-[var(--text-tertiary)] text-[10px] sm:text-xs uppercase tracking-wider">
              <th className="px-1.5 sm:px-2 py-2 font-medium">
                {t("Comunidad", "Region")}
              </th>
              <th className="px-1.5 sm:px-2 py-2 font-medium text-right">IEDMT</th>
              <th className="px-1.5 sm:px-2 py-2 font-medium text-right">ITP</th>
              <th className="px-1.5 sm:px-2 py-2 font-medium text-right">
                {t("Total", "Total")}
              </th>
              <th className="px-1.5 sm:px-2 py-2 font-medium text-right">Δ</th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 8).map((r, i) => (
              <tr
                key={r.region}
                className={`border-t border-[var(--surface-border)] ${
                  i === 0 ? "bg-emerald-500/[0.04]" : ""
                }`}
              >
                <td className="px-1.5 sm:px-2 py-2 font-medium text-[var(--text-primary)] whitespace-nowrap">
                  {i === 0 && <span className="mr-1">★</span>}
                  {r.region}
                </td>
                <td className="px-1.5 sm:px-2 py-2 text-right number-display whitespace-nowrap">
                  {formatCurrency(r.registrationTax)}
                </td>
                <td className="px-1.5 sm:px-2 py-2 text-right number-display whitespace-nowrap">
                  {formatCurrency(r.itpTax)}
                </td>
                <td className="px-1.5 sm:px-2 py-2 text-right number-display font-semibold whitespace-nowrap">
                  {formatCurrency(r.total)}
                </td>
                <td
                  className={`px-1.5 sm:px-2 py-2 text-right number-display whitespace-nowrap ${
                    r.diff < 0
                      ? "text-emerald-500"
                      : r.diff > 0
                      ? "text-red-500"
                      : "text-[var(--text-tertiary)]"
                  }`}
                >
                  {r.diff === 0
                    ? "—"
                    : `${r.diff > 0 ? "+" : ""}${formatCurrency(r.diff)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[10px] text-[var(--text-tertiary)] italic">
        {t(
          "El ITP se paga en la comunidad donde resides. Cambiar la matriculación implica cambiar el empadronamiento.",
          "ITP is paid in the region where you reside. Changing registration requires changing residence.",
        )}
      </p>
    </div>
  );
}
