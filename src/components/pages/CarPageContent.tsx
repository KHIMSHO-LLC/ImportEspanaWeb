"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Vehicle } from "@/types";
import Link from "next/link";
import { useState } from "react";
import {
  Car,
  Calculator,
  Euro,
  Gauge,
  Calendar,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  TrendingDown,
  Info,
  ArrowRight,
} from "lucide-react";
import { getCarContent } from "@/data/cars";
import { TOP_SEO_MODELS, slugify } from "@/utils/seo/topCars";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[var(--surface-border)] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left bg-[var(--surface)] hover:bg-[var(--surface-dim)] transition-colors"
      >
        <span className="font-semibold text-[var(--text-primary)] pr-4 text-sm">
          {q}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-[var(--brand-blue)] shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-[var(--text-tertiary)] shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-4 pt-2 bg-[var(--surface-dim)] text-sm text-[var(--text-secondary)] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function CarPageContent({
  heroCar,
  queryModel,
  displayBrand,
  slug,
}: {
  heroCar: Vehicle;
  queryModel: string;
  displayBrand: string;
  slug: string;
}) {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";

  const displayName = `${displayBrand} ${queryModel}`;
  const content = getCarContent(slug);

  // Resolve related cars (only if they're still in TOP_SEO_MODELS).
  const relatedCars =
    content?.relatedSlugs
      ?.map((relatedSlug) => {
        const match = TOP_SEO_MODELS.find(
          (c) => slugify(`${c.brand}-${c.modelQuery}`) === relatedSlug,
        );
        return match ? { slug: relatedSlug, ...match } : null;
      })
      .filter((c): c is { slug: string; brand: string; modelQuery: string } => !!c) ?? [];

  // Pre-fill the homepage calculator with this car via query params.
  const calculatorHref = `/?brand=${encodeURIComponent(displayBrand)}&model=${encodeURIComponent(queryModel)}`;

  return (
    <div className="bg-[var(--surface-dim)] min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <nav
          className="flex items-center gap-1 text-xs text-[var(--text-tertiary)]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">
            ImportEspana
          </Link>
          <ChevronRight size={12} />
          <Link
            href="/coches"
            className="hover:text-[var(--brand-blue)] transition-colors"
          >
            {lang === "es" ? "Coches" : "Cars"}
          </Link>
          <ChevronRight size={12} />
          <span className="text-[var(--text-secondary)] truncate max-w-[200px]">
            {displayName}
          </span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-8">
        <div className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-[var(--brand-blue)]/5 rounded-xl hidden sm:block">
              <Car className="text-[var(--brand-blue)]" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] leading-tight">
                {lang === "es"
                  ? `Impuestos para Importar un ${displayName} a España`
                  : `Taxes to Import a ${displayName} to Spain`}
              </h1>
              <p className="text-[var(--text-tertiary)] mt-2 text-sm md:text-base">
                {lang === "es"
                  ? `Calculadora de ITP, Aduanas y Matriculación basada en el valor oficial del BOE 2026 para el ${heroCar.brand} ${heroCar.model}.`
                  : `ITP, Customs and Registration Tax calculator based on the official 2026 BOE value for the ${heroCar.brand} ${heroCar.model}.`}
              </p>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--brand-blue)]/5 rounded-xl p-4 text-center border border-blue-100">
              <Euro size={20} className="text-[var(--brand-blue)] mx-auto mb-2" />
              <div className="text-lg font-bold text-[var(--text-primary)]">
                €{heroCar.value.toLocaleString("de-DE")}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] font-medium">
                {lang === "es" ? "Valor BOE (Nuevo)" : "BOE Value (New)"}
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
              <Gauge size={20} className="text-green-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-[var(--text-primary)]">
                {heroCar.cv} cv
              </div>
              <div className="text-xs text-[var(--text-tertiary)] font-medium">
                {lang === "es" ? "Potencia" : "Power"}
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100">
              <TrendingDown size={20} className="text-amber-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-[var(--text-primary)]">
                {heroCar.co2 ? `${heroCar.co2}g` : "--"}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] font-medium">
                {lang === "es" ? "Emisiones CO₂" : "CO₂ Emissions"}
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center border border-purple-100">
              <Calendar size={20} className="text-purple-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-[var(--text-primary)]">
                {heroCar.startYear} - {heroCar.endYear || (lang === "es" ? "Hoy" : "Today")}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] font-medium">
                {lang === "es" ? "Fabricación" : "Years"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 space-y-8 pb-20">
        {/* Compact Calculator CTA (replaces embedded homepage) */}
        <section className="bg-gradient-to-br from-[var(--brand-blue)] to-blue-700 rounded-2xl shadow-md p-6 md:p-8 text-center text-white">
          <Calculator size={32} className="mx-auto mb-3 opacity-90" />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            {lang === "es"
              ? `Calcula los impuestos exactos de tu ${displayName}`
              : `Calculate exact taxes for your ${displayName}`}
          </h2>
          <p className="text-white/80 text-sm mb-5 max-w-xl mx-auto">
            {lang === "es"
              ? "Abre la calculadora con la marca y modelo precargados. Introduce el precio de compra y la fecha de matriculación para obtener el coste total al céntimo."
              : "Open the calculator pre-filled with this brand and model. Enter the purchase price and registration date to get the total cost to the cent."}
          </p>
          <Link
            href={calculatorHref}
            className="inline-flex items-center gap-2 bg-white text-[var(--brand-blue)] font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
          >
            {lang === "es" ? "Abrir calculadora" : "Open calculator"}
            <ArrowRight size={18} />
          </Link>
        </section>

        {/* Unique model paragraph (only when content exists) */}
        {content?.uniqueParagraph && (
          <section className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
              <Info size={22} className="text-[var(--brand-blue)]" />
              {lang === "es"
                ? `Importar un ${displayName} desde ${content.commonOrigin}`
                : `Importing a ${displayName} from ${content.commonOrigin}`}
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {content.uniqueParagraph}
            </p>
          </section>
        )}

        {/* Depreciation Table Explanation */}
        <section className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
            <TrendingDown size={22} className="text-amber-600" />
            {lang === "es"
              ? `Proyección de Depreciación BOE: ${displayName}`
              : `BOE Depreciation Table: ${displayName}`}
          </h2>
          <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
            {lang === "es"
              ? `Hacienda (la Agencia Tributaria) no usa el precio al que compraste el coche en Alemania para calcular los impuestos. En su lugar, toman el "Valor Oficial" de €${heroCar.value.toLocaleString()} y lo multiplican por un porcentaje de depreciación basado en la edad exacta del vehículo.`
              : `The Spanish Tax Agency does not use your actual purchase price in Germany to calculate taxes. Instead, they take the "Official BOE Value" of €${heroCar.value.toLocaleString()} and multiply it by a depreciation percentage based on the exact age of the vehicle.`}
          </p>

          <div className="overflow-x-auto rounded-xl border border-[var(--surface-border)]">
            <table className="w-full text-sm text-left">
              <thead className="bg-[var(--surface-dim)] text-[var(--text-secondary)] uppercase font-semibold text-xs border-b border-[var(--surface-border)]">
                <tr>
                  <th className="px-4 py-3 text-center">
                    {lang === "es" ? "Meses" : "Months"}
                  </th>
                  <th className="px-4 py-3 text-center">
                    {lang === "es" ? "% BOE" : "BOE %"}
                  </th>
                  <th className="px-4 py-3 text-right">
                    {lang === "es" ? "Valor Venal (Base)" : "Tax Base"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: lang === "es" ? "< 12 meses" : "< 12 months", pct: 100 },
                  { label: lang === "es" ? "12 a 23 meses" : "12 to 23 months", pct: 84 },
                  { label: lang === "es" ? "2 a 3 años" : "2 to 3 years", pct: 67 },
                  { label: lang === "es" ? "3 a 4 años" : "3 to 4 years", pct: 56 },
                  { label: lang === "es" ? "4 a 5 años" : "4 to 5 years", pct: 47 },
                  { label: lang === "es" ? "8 a 9 años" : "8 to 9 years", pct: 24 },
                  { label: lang === "es" ? "12+ años (Antiguos)" : "12+ years (Old)", pct: 10 },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[var(--surface-dim)] transition-colors">
                    <td className="px-4 py-3 text-center font-medium text-[var(--text-primary)]">
                      {row.label}
                    </td>
                    <td className="px-4 py-3 text-center text-amber-600 font-bold">
                      {row.pct}%
                    </td>
                    <td className="px-4 py-3 text-right font-medium">
                      €
                      {Math.round(
                        heroCar.value * (row.pct / 100),
                      ).toLocaleString("de-DE")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ (only when content exists) */}
        {content && content.faq.length > 0 && (
          <section className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-5">
              {lang === "es"
                ? `Preguntas frecuentes sobre el ${displayName}`
                : `FAQ about the ${displayName}`}
            </h2>
            <div className="space-y-3">
              {content.faq.map((item, i) => (
                <FaqItem key={i} q={item.question} a={item.answer} />
              ))}
            </div>
          </section>
        )}

        {/* Related cars */}
        {relatedCars.length > 0 && (
          <section className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-5">
              {lang === "es" ? "Otros modelos relacionados" : "Related models"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedCars.map((c) => (
                <Link
                  key={c.slug}
                  href={`/coche/${c.slug}`}
                  className="border border-[var(--surface-border)] rounded-xl p-4 hover:border-[var(--brand-blue)] hover:bg-[var(--surface-dim)] transition-colors"
                >
                  <div className="font-semibold text-[var(--text-primary)]">
                    {c.brand} {c.modelQuery}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-1">
                    {lang === "es" ? "Ver impuestos" : "View taxes"}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
