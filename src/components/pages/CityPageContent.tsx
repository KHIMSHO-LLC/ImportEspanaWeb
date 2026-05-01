"use client";

import Link from "next/link";
import { MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { CITIES, CityData } from "@/data/cities";
import { CITIES_I18N } from "@/i18n/cities";
import SeoSchema from "@/components/SeoSchema";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  citySlug: string;
}

const NUMBER_LOCALES: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
  ru: "ru-RU",
  de: "de-DE",
  fr: "fr-FR",
};

function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[var(--surface-border)] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left bg-[var(--surface)] hover:bg-[var(--surface-dim)] transition-colors"
      >
        <span className="font-semibold text-[var(--text-primary)] pr-4 text-sm">{q}</span>
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

export default function CityPageContent({ citySlug }: Props) {
  const { language, t } = useLanguage();
  const city = CITIES.find((c) => c.slug === citySlug);

  if (!city) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-[var(--text-secondary)]">{t("cityNotFound")}</p>
      </main>
    );
  }

  const i18n = CITIES_I18N[language]?.[citySlug] ?? CITIES_I18N.en[citySlug] ?? CITIES_I18N.es[citySlug];

  const relatedCities = city.relatedCities
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is CityData => !!c);

  const breadcrumbs = [
    { name: t("home"), url: "https://importespana.com" },
    { name: t("cityImportCar"), url: "https://importespana.com/" },
    {
      name: city.name,
      url: `https://importespana.com/importar-coche-${city.slug}`,
    },
  ];

  const itpExample = (20000 * city.itpRate / 100).toLocaleString(NUMBER_LOCALES[language] ?? "es-ES");

  return (
    <>
      <SeoSchema
        breadcrumbs={breadcrumbs}
        faqItems={i18n.faq}
        showHomeSchemas={false}
      />

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--text-tertiary)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">
            {t("home")}
          </Link>
          <span>/</span>
          <Link
            href={`/importar-coche/${city.regionSlug}`}
            className="hover:text-[var(--brand-blue)] transition-colors"
          >
            {city.regionName}
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)]">{city.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[var(--brand-blue)] font-semibold text-sm mb-2">
            <MapPin size={14} />
            {city.regionName} — ITP {city.itpRate}%
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
            {fill(t("cityH1Pattern"), { city: city.name })}
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">
            {fill(t("cityHeroDesc"), {
              city: city.name,
              region: city.regionName,
              rate: city.itpRate,
              pop: i18n.population,
            })}
          </p>
        </div>

        {/* ITP highlight */}
        <div className="card p-5 mb-8 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-[var(--brand-blue)]/10 flex items-center justify-center shrink-0">
            <span className="text-2xl font-bold text-[var(--brand-blue)]">{city.itpRate}%</span>
          </div>
          <div>
            <div className="font-semibold text-[var(--text-primary)]">
              {fill(t("cityItpInRegion"), { region: city.regionName })}
            </div>
            <div className="text-sm text-[var(--text-secondary)]">
              {fill(t("cityItpExplain"), { example: itpExample })}
            </div>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="card-hero p-6 mb-8 text-center space-y-3">
          <h2 className="text-xl font-bold text-white">
            {fill(t("cityCalcCtaTitle"), { city: city.name })}
          </h2>
          <p className="text-white/70 text-sm">
            {fill(t("cityCalcCtaText"), { region: city.regionName })}
          </p>
          <Link
            href={`/?region=${city.regionName}`}
            className="inline-block bg-white text-[var(--brand-blue)] font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
          >
            {t("cityCalcCtaButton")}
          </Link>
        </div>

        {/* Unique paragraph */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            {fill(t("cityImportInTitle"), { city: city.name })}
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {i18n.uniqueParagraph}
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-5">
            {fill(t("cityFaqTitle"), { city: city.name })}
          </h2>
          <div className="space-y-3">
            {i18n.faq.map((item, i) => (
              <FaqItem key={i} q={item.question} a={item.answer} />
            ))}
          </div>
        </div>

        {/* Related cities */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            {t("cityRelatedTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedCities.map((c) => (
              <Link
                key={c.slug}
                href={`/importar-coche-${c.slug}`}
                className="card p-4 hover:border-[var(--brand-blue-light)] transition-colors"
              >
                <div className="font-semibold text-[var(--text-primary)]">{c.name}</div>
                <div className="text-xs text-[var(--text-tertiary)] mt-1">
                  {c.regionName} — ITP {c.itpRate}%
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Region link */}
        <div className="p-4 bg-[var(--surface-dim)] rounded-xl border border-[var(--surface-border)] text-sm">
          <p className="text-[var(--text-secondary)]">
            {t("cityRegionLinkPrompt")}{" "}
            <Link
              href={`/importar-coche/${city.regionSlug}`}
              className="text-[var(--brand-blue)] hover:underline font-medium"
            >
              {fill(t("cityRegionLinkLabel"), { region: city.regionName })}
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
