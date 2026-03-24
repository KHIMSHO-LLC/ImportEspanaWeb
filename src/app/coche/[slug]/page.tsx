import {
  TOP_SEO_MODELS,
  slugify,
  getHeroCarForModel,
} from "@/utils/seo/topCars";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CarPageContent from "@/components/pages/CarPageContent";

export function generateStaticParams() {
  return TOP_SEO_MODELS.map((car) => ({
    slug: slugify(`${car.brand}-${car.modelQuery}`),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const carMatch = TOP_SEO_MODELS.find(
    (c) => slugify(`${c.brand}-${c.modelQuery}`) === slug,
  );

  if (!carMatch) return {};

  const heroCar = getHeroCarForModel(carMatch.brand, carMatch.modelQuery);
  const displayName = heroCar
    ? `${heroCar.brand} ${heroCar.model}`
    : `${carMatch.brand} ${carMatch.modelQuery}`;
  const displayPrice = heroCar
    ? ` (Valor Oficial BOE: €${heroCar.value.toLocaleString("de-DE")})`
    : "";

  return {
    title: `Cuánto cuesta importar un ${displayName} a España | Calculadora Impuestos BOE 2026`,
    description: `Descubre cuánto cuesta importar un ${displayName} desde Alemania a España. Averigua el valor venal BOE de Hacienda, ITP, matriculación e IVA${displayPrice}.`,
    keywords: [
      `importar ${carMatch.brand.toLowerCase()} ${carMatch.modelQuery.toLowerCase()}`,
      `cuanto cuesta traer un ${displayName.toLowerCase()} de alemania`,
      `valor boe ${displayName.toLowerCase()}`,
      `impuestos importar ${displayName.toLowerCase()}`,
      `itp ${displayName.toLowerCase()}`,
      `importar ${displayName.toLowerCase()} a españa`,
    ],
    alternates: {
      canonical: `/coche/${slug}`,
    },
    openGraph: {
      title: `Impuestos al importar un ${displayName}`,
      description: `Calculadora exacta de ITP, Aduanas y Matriculación para ${displayName}. Valor oficial BOE 2026.`,
      url: `https://importespana.com/coche/${slug}`,
    },
  };
}

export default async function CarModelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const carMatch = TOP_SEO_MODELS.find(
    (c) => slugify(`${c.brand}-${c.modelQuery}`) === slug,
  );

  if (!carMatch) notFound();

  const heroCar = getHeroCarForModel(carMatch.brand, carMatch.modelQuery);
  if (!heroCar) notFound();

  return (
    <>
      <CarPageContent
        heroCar={heroCar}
        queryModel={carMatch.modelQuery}
        displayBrand={carMatch.brand}
      />

      {/* JSON-LD Schema (server-rendered for SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${heroCar.brand} ${heroCar.model} (Importación)`,
            description: `Información de importación y valoración fiscal (BOE) para ${heroCar.brand} ${heroCar.model}.`,
            brand: {
              "@type": "Brand",
              name: heroCar.brand,
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: heroCar.value,
              description:
                "Valor oficial de Hacienda (BOE) nuevo sin depreciar.",
            },
          }),
        }}
      />
    </>
  );
}
