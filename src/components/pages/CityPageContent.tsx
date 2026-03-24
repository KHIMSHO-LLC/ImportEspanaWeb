"use client";

import Link from "next/link";
import { MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { CITIES, CityData } from "@/data/cities";
import SeoSchema from "@/components/SeoSchema";

interface Props {
  citySlug: string;
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
  const city = CITIES.find((c) => c.slug === citySlug);

  if (!city) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-[var(--text-secondary)]">Ciudad no encontrada.</p>
      </main>
    );
  }

  const relatedCities = city.relatedCities
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is CityData => !!c);

  const breadcrumbs = [
    { name: "Inicio", url: "https://importespana.com" },
    { name: "Importar coche", url: "https://importespana.com/" },
    {
      name: city.name,
      url: `https://importespana.com/importar-coche-${city.slug}`,
    },
  ];

  return (
    <>
      <SeoSchema
        breadcrumbs={breadcrumbs}
        faqItems={city.faq}
        showHomeSchemas={false}
      />

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--text-tertiary)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">
            Inicio
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
            Importar Coche en {city.name} — Guía Completa 2026
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">
            Calcula el coste exacto de importar y matricular tu coche en {city.name} ({city.regionName}).{" "}
            ITP: <strong>{city.itpRate}%</strong>. Población: {city.population}.
          </p>
        </div>

        {/* ITP highlight */}
        <div className="card p-5 mb-8 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-[var(--brand-blue)]/10 flex items-center justify-center shrink-0">
            <span className="text-2xl font-bold text-[var(--brand-blue)]">{city.itpRate}%</span>
          </div>
          <div>
            <div className="font-semibold text-[var(--text-primary)]">
              ITP en {city.regionName}
            </div>
            <div className="text-sm text-[var(--text-secondary)]">
              Impuesto de Transmisiones Patrimoniales — se aplica al comprar a particular.
              Para un coche de 20.000 € de valor fiscal: <strong>{(20000 * city.itpRate / 100).toLocaleString("es-ES")} €</strong>.
            </div>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="card-hero p-6 mb-8 text-center space-y-3">
          <h2 className="text-xl font-bold text-white">
            Calcula tu importación a {city.name}
          </h2>
          <p className="text-white/70 text-sm">
            Usa nuestra calculadora con el ITP de {city.regionName} preconfigurado.
          </p>
          <Link
            href={`/?region=${city.regionName}`}
            className="inline-block bg-white text-[var(--brand-blue)] font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
          >
            Abrir Calculadora →
          </Link>
        </div>

        {/* Unique paragraph */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            Importar un coche en {city.name}
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {city.uniqueParagraph}
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-5">
            Preguntas frecuentes — {city.name}
          </h2>
          <div className="space-y-3">
            {city.faq.map((item, i) => (
              <FaqItem key={i} q={item.question} a={item.answer} />
            ))}
          </div>
        </div>

        {/* Related cities */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            También te puede interesar
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
            ¿Buscas información sobre toda la comunidad?{" "}
            <Link
              href={`/importar-coche/${city.regionSlug}`}
              className="text-[var(--brand-blue)] hover:underline font-medium"
            >
              Ver guía completa de {city.regionName} →
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
