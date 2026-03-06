"use client";

import { COUNTRIES, getCountryBySlug } from "@/constants/Countries";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import {
  Globe,
  Truck,
  Calculator,
  FileCheck,
  Lightbulb,
  ArrowRight,
  AlertTriangle,
  ChevronRight,
  Car,
} from "lucide-react";
import { Suspense } from "react";
import { HomeContent } from "@/app/page";

const texts = {
  es: {
    guideComplete: "Guía completa 2026",
    euStatus: "UE — Sin aduanas",
    nonEuStatus: "⚠️ No UE — Aduanas",
    status: "Estatus",
    transport: "Transporte",
    mostImported: "Más importada",
    vat: "IVA",
    nonEuWarningTemplate:
      "{country} no es miembro de la UE. Se aplican aranceles de importación (6.5%) y el IVA del 21% sobre el valor del vehículo. Necesitas gestionar la aduana con un DUA.",
    stepsTitle: "Pasos para importar desde",
    tipsTitle: "Consejos para importar de",
    brandsTitle: "Marcas populares desde",
    ctaQuestion: "¿Importando un coche de",
    ctaDesc:
      "Calcula todos los impuestos y costes en segundos con nuestra calculadora gratuita.",
    ctaButton: "Calcular impuestos desde",
    otherCountries: "Importar desde otros países",
    eu: "UE",
    nonEu: "No UE",
    importFrom: "Importar desde",
  },
  en: {
    guideComplete: "Complete guide 2026",
    euStatus: "EU — No customs",
    nonEuStatus: "⚠️ Non-EU — Customs",
    status: "Status",
    transport: "Transport",
    mostImported: "Top import",
    vat: "VAT",
    nonEuWarningTemplate:
      "{country} is not an EU member. Import tariffs (6.5%) and 21% VAT apply on the vehicle value. You need to process customs with a DUA.",
    stepsTitle: "Steps to import from",
    tipsTitle: "Tips for importing from",
    brandsTitle: "Popular brands from",
    ctaQuestion: "Importing a car from",
    ctaDesc:
      "Calculate all taxes and costs in seconds with our free calculator.",
    ctaButton: "Calculate taxes from",
    otherCountries: "Import from other countries",
    eu: "EU",
    nonEu: "Non-EU",
    importFrom: "Import from",
  },
};

export default function CountryPageContent({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const t = texts[lang];

  const country = getCountryBySlug(slug);
  if (!country) return null;

  const otherCountries = COUNTRIES.filter((c) => c.slug !== slug);
  const countryName = lang === "es" ? country.nameEs : country.name;
  const description =
    lang === "es" ? country.descriptionEs : country.descriptionEn;
  const steps = lang === "es" ? country.stepsEs : country.stepsEn;
  const tips = lang === "es" ? country.tipsEs : country.tipsEn;

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
          <span className="text-[var(--text-secondary)]">
            {t.importFrom} {countryName}
          </span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-8">
        <div className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6 md:p-8">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-4xl">{country.flag}</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                {lang === "es"
                  ? `Importar Coche de ${countryName}`
                  : `Import a Car from ${countryName}`}
              </h1>
              <p className="text-[var(--text-tertiary)] mt-1">
                {t.guideComplete} • {country.isEU ? t.euStatus : t.nonEuStatus}
              </p>
            </div>
          </div>

          {!country.isEU && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-start gap-2">
              <AlertTriangle
                size={18}
                className="text-amber-600 flex-shrink-0 mt-0.5"
              />
              <p className="text-sm text-amber-800">
                <strong>
                  {t.nonEuWarningTemplate
                    .split(".")[0]
                    .replace("{country}", countryName)}
                  .
                </strong>{" "}
                {t.nonEuWarningTemplate
                  .split(". ")
                  .slice(1)
                  .join(". ")
                  .replace("{country}", countryName)}
              </p>
            </div>
          )}

          <p className="text-[var(--text-secondary)] leading-relaxed">{description}</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <div className="bg-[var(--brand-blue)]/5 rounded-xl p-3 text-center">
              <Globe size={18} className="text-[var(--brand-blue)] mx-auto mb-1" />
              <div className="text-sm font-bold text-[var(--text-primary)]">
                {country.isEU ? t.eu : t.nonEu}
              </div>
              <div className="text-xs text-[var(--text-tertiary)]">{t.status}</div>
            </div>
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <Truck size={18} className="text-green-600 mx-auto mb-1" />
              <div className="text-sm font-bold text-[var(--text-primary)]">
                {country.avgTransportCost}
              </div>
              <div className="text-xs text-[var(--text-tertiary)]">{t.transport}</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 text-center">
              <Car size={18} className="text-purple-600 mx-auto mb-1" />
              <div className="text-sm font-bold text-[var(--text-primary)]">
                {country.popularBrands[0]}
              </div>
              <div className="text-xs text-[var(--text-tertiary)]">{t.mostImported}</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-3 text-center">
              <Calculator size={18} className="text-amber-600 mx-auto mb-1" />
              <div className="text-sm font-bold text-[var(--text-primary)]">
                {country.vatRate}%
              </div>
              <div className="text-xs text-[var(--text-tertiary)]">
                {t.vat} {countryName}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 space-y-6 pb-20">
        {/* Steps */}
        <section className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6">
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
            <FileCheck size={20} className="text-[var(--brand-blue)]" />
            {t.stepsTitle} {countryName}
          </h2>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-7 h-7 bg-blue-100 text-[var(--brand-blue)] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] text-sm">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-tertiary)] mt-0.5">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Tips */}
        <section className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6">
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
            <Lightbulb size={20} className="text-amber-500" />
            {t.tipsTitle} {countryName}
          </h2>
          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
              >
                <span className="mt-0.5 w-5 h-5 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Popular Brands */}
        <section className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            {t.brandsTitle} {countryName}
          </h2>
          <div className="flex flex-wrap gap-2">
            {country.popularBrands.map((brand) => (
              <span
                key={brand}
                className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-[var(--text-secondary)]"
              >
                {brand}
              </span>
            ))}
          </div>
        </section>

        {/* Live Interactive Calculator for this Country */}
        <section className="bg-[var(--surface-elevated)] rounded-2xl shadow-sm p-4 md:p-6 mb-8 border border-blue-100">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-6 border-b pb-4">
            <Calculator size={24} className="text-[var(--brand-blue)]" />
            Calculadora de Impuestos para coches de {countryName}
          </h2>
          <Suspense
            fallback={
              <div className="p-10 text-center text-[var(--text-tertiary)]">
                Cargando calculadora...
              </div>
            }
          >
            <HomeContent
              prefilledCountry={country.name as import("@/types").Country}
              prefilledImportType={country.isEU ? "EU" : "NonEU"}
            />
          </Suspense>
        </section>

        {/* Other Countries */}
        <section>
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">
            {t.otherCountries}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {otherCountries.map((c) => (
              <Link
                key={c.slug}
                href={`/importar-desde/${c.slug}`}
                className="bg-[var(--surface-elevated)] rounded-xl border border-[var(--surface-border)] p-3 hover:border-blue-300 hover:shadow-sm transition-all flex items-center gap-2"
              >
                <span className="text-xl">{c.flag}</span>
                <div>
                  <div className="font-medium text-sm text-[var(--text-primary)]">
                    {lang === "es" ? c.nameEs : c.name}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)]">
                    {c.isEU ? t.eu : t.nonEu} • {c.avgTransportCost}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
