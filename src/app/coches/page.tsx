import { Metadata } from "next";
import Link from "next/link";
import { TOP_SEO_MODELS, slugify } from "@/utils/seo/topCars";
import { Car, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Coches para Importar a España — Guías por Marca y Modelo",
  description:
    "Descubre cuánto cuesta importar los coches más populares a España. Guías de ITP, matriculación y valor fiscal BOE para Volkswagen, BMW, Mercedes, Audi, Ford y más.",
  alternates: {
    canonical: "https://importespana.com/coches",
    languages: {
      "es-ES": "https://importespana.com/coches",
      "en-US": "https://importespana.com/coches",
      "x-default": "https://importespana.com/coches",
    },
  },
};

// Group models by brand for the index page
const modelsByBrand = TOP_SEO_MODELS.reduce<
  Record<string, { modelQuery: string; slug: string }[]>
>((acc, car) => {
  if (!acc[car.brand]) acc[car.brand] = [];
  acc[car.brand].push({
    modelQuery: car.modelQuery,
    slug: slugify(`${car.brand}-${car.modelQuery}`),
  });
  return acc;
}, {});

export default function CochesPage() {
  const brands = Object.keys(modelsByBrand).sort();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-[var(--text-tertiary)] mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">
          Inicio
        </Link>
        <ChevronRight size={14} />
        <span className="text-[var(--text-primary)]">Coches</span>
      </nav>

      <div className="flex items-center gap-3 mb-2">
        <Car size={28} className="text-[var(--brand-blue)]" />
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
          Guías de Importación por Modelo
        </h1>
      </div>
      <p className="text-[var(--text-secondary)] mb-10 text-lg">
        Valor fiscal BOE, ITP estimado e impuesto de matriculación para los modelos más importados a España.
      </p>

      <div className="space-y-8">
        {brands.map((brand) => (
          <section key={brand}>
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3 border-b border-[var(--surface-border)] pb-2">
              {brand}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {modelsByBrand[brand].map(({ modelQuery, slug }) => (
                <Link
                  key={slug}
                  href={`/coche/${slug}`}
                  className="flex items-center justify-between gap-2 text-sm bg-[var(--surface-elevated)] border border-[var(--surface-border)] hover:border-[var(--brand-blue-light)] px-3 py-2.5 rounded-xl transition-all group"
                >
                  <span className="font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-blue)]">
                    {modelQuery}
                  </span>
                  <ChevronRight
                    size={14}
                    className="text-[var(--text-tertiary)] shrink-0"
                  />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">
          ¿No encuentras tu modelo?
        </h2>
        <p className="text-blue-100 text-sm mb-4">
          Usa la calculadora con cualquier marca, modelo y año
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-[var(--brand-blue)] font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
        >
          Ir a la calculadora →
        </Link>
      </div>
    </div>
  );
}
