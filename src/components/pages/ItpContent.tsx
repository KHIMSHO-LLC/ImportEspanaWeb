"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SPANISH_REGIONS } from "@/constants/ItpRates";
import { MapPin, Info, Calculator, ExternalLink } from "lucide-react";
import Link from "next/link";

const texts = {
  es: {
    title: "ITP por Comunidad Autónoma",
    subtitle:
      "El Impuesto de Transmisiones Patrimoniales varía según tu región. Compara los tipos impositivos de todas las comunidades autónomas.",
    tableRegion: "Comunidad Autónoma",
    tableRate: "Tipo ITP",
    tableExample: "ITP sobre €10,000",
    lowestLabel: "Más bajo",
    highestLabel: "Más alto",
    whatIsItp: "¿Qué es el ITP?",
    whatIsItpDesc:
      "El ITP (Impuesto de Transmisiones Patrimoniales) se aplica cuando compras un vehículo de segunda mano, ya sea a un particular en España o importado de otro país de la UE. El tipo impositivo depende de tu comunidad autónoma de residencia.",
    whenApplies: "¿Cuándo se aplica?",
    whenAppliesItems: [
      "Compra de vehículos usados a particulares",
      "Importación de vehículos de segunda mano desde la UE",
      "Transferencia de vehículos entre particulares",
    ],
    howCalc: "¿Cómo se calcula?",
    howCalcDesc:
      "El ITP se calcula sobre el valor fiscal del vehículo (según las tablas del BOE), no sobre el precio de compra. El valor fiscal se determina por la marca, modelo, año y tipo de combustible del vehículo.",
    ctaTitle: "Calcula el coste total de importar tu coche",
    ctaButton: "Usar calculadora gratis",
    source: "Fuente: Normativa de cada Comunidad Autónoma",
    boeLink: "Ver tablas de valoración del BOE",
  },
  en: {
    title: "ITP Tax by Spanish Region",
    subtitle:
      "The Transfer Tax (ITP) varies by region. Compare rates across all 17 Spanish autonomous communities.",
    tableRegion: "Region",
    tableRate: "ITP Rate",
    tableExample: "ITP on €10,000",
    lowestLabel: "Lowest",
    highestLabel: "Highest",
    whatIsItp: "What is ITP?",
    whatIsItpDesc:
      "ITP (Impuesto de Transmisiones Patrimoniales) is a transfer tax applied when you buy a second-hand vehicle, either from a private seller in Spain or imported from another EU country. The rate depends on your region of residence.",
    whenApplies: "When does it apply?",
    whenAppliesItems: [
      "Buying used vehicles from private sellers",
      "Importing second-hand vehicles from the EU",
      "Vehicle transfers between individuals",
    ],
    howCalc: "How is it calculated?",
    howCalcDesc:
      "ITP is calculated on the vehicle's fiscal value (from official BOE tables), not the purchase price. The fiscal value is determined by the vehicle's brand, model, year, and fuel type.",
    ctaTitle: "Calculate the total cost of importing your car",
    ctaButton: "Use free calculator",
    source: "Source: Regional autonomous community tax regulations",
    boeLink: "View BOE valuation tables",
  },
};

export default function ItpContent() {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const t = texts[lang];

  const sorted = [...SPANISH_REGIONS].sort((a, b) => a.rate - b.rate);
  const lowestRate = sorted[0].rate;
  const highestRate = sorted[sorted.length - 1].rate;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-xs font-medium px-3 py-1.5 rounded-full mb-3">
          <MapPin size={14} />
          {sorted.length} {lang === "es" ? "regiones" : "regions"}
        </div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)] mb-3">
          {t.title}
        </h1>
        <p className="text-[var(--text-tertiary)] max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      {/* ITP Table */}
      <div className="bg-[var(--surface-elevated)] rounded-2xl shadow-sm border border-[var(--surface-border)] overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--surface-dim)] border-b border-[var(--surface-border)]">
                <th className="text-left px-5 py-3 text-sm font-semibold text-[var(--text-secondary)]">
                  {t.tableRegion}
                </th>
                <th className="text-center px-5 py-3 text-sm font-semibold text-[var(--text-secondary)]">
                  {t.tableRate}
                </th>
                <th className="text-right px-5 py-3 text-sm font-semibold text-[var(--text-secondary)]">
                  {t.tableExample}
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((region, i) => {
                const isLowest = region.rate === lowestRate;
                const isHighest = region.rate === highestRate;
                return (
                  <tr
                    key={region.name}
                    className={`border-b border-gray-50 ${
                      isLowest
                        ? "bg-green-50"
                        : isHighest
                          ? "bg-red-50"
                          : i % 2 === 0
                            ? "bg-[var(--surface-elevated)]"
                            : "bg-[var(--surface-dim)]/50"
                    }`}
                  >
                    <td className="px-5 py-3 text-sm text-[var(--text-primary)] font-medium">
                      <div className="flex items-center gap-2">
                        {region.name}
                        {isLowest && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                            {t.lowestLabel}
                          </span>
                        )}
                        {isHighest && (
                          <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">
                            {t.highestLabel}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-3 text-sm text-center font-bold text-[var(--text-primary)]">
                      {(region.rate * 100).toFixed(1)}%
                    </td>
                    <td className="px-5 py-3 text-sm text-right text-[var(--text-secondary)]">
                      €{(10000 * region.rate).toLocaleString("es-ES")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-[var(--surface-border)] text-xs text-[var(--text-tertiary)] flex items-center justify-between">
          <span>{t.source}</span>
          <a
            href="https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26357"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-[var(--brand-blue)] flex items-center gap-1"
          >
            {t.boeLink} <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[var(--surface-elevated)] rounded-2xl shadow-sm border border-[var(--surface-border)] p-6">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
            <Info size={18} className="text-[var(--brand-blue)]" />
            {t.whatIsItp}
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {t.whatIsItpDesc}
          </p>
        </div>

        <div className="bg-[var(--surface-elevated)] rounded-2xl shadow-sm border border-[var(--surface-border)] p-6">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
            <Calculator size={18} className="text-[var(--brand-blue)]" />
            {t.howCalc}
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {t.howCalcDesc}
          </p>
        </div>
      </div>

      {/* When it applies */}
      <div className="bg-[var(--surface-elevated)] rounded-2xl shadow-sm border border-[var(--surface-border)] p-6 mb-8">
        <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">
          {t.whenApplies}
        </h2>
        <ul className="space-y-2">
          {t.whenAppliesItems.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
            >
              <svg
                className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">{t.ctaTitle}</h2>
        <p className="text-blue-100 text-sm mb-4">
          {lang === "es"
            ? "Incluye matriculación, ITP, transporte y todas las tasas"
            : "Includes registration tax, ITP, transport and all fees"}
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--surface-elevated)] text-[var(--brand-blue)] font-bold py-3 px-8 rounded-xl hover:bg-[var(--brand-blue)]/5 transition-colors shadow-lg"
        >
          {t.ctaButton} →
        </Link>
      </div>
    </div>
  );
}
