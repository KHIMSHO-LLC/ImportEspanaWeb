import { COUNTRIES, getCountryBySlug } from "@/constants/Countries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CountryPageContent from "@/components/pages/CountryPageContent";

export function generateStaticParams() {
  return COUNTRIES.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};

  return {
    title: `Importar Coche de ${country.nameEs} a España — Guía Completa 2026 | ImportEspana`,
    description: `Guía paso a paso para importar un coche de ${country.nameEs} a España. Marcas populares: ${country.popularBrands.slice(0, 3).join(", ")}. Transporte: ${country.avgTransportCost}. Calculadora de impuestos gratis.`,
    keywords: [
      `importar coche de ${country.nameEs.toLowerCase()}`,
      `importar coche ${country.nameEs.toLowerCase()} españa`,
      `traer coche de ${country.nameEs.toLowerCase()}`,
      `comprar coche en ${country.nameEs.toLowerCase()}`,
      `import car from ${country.name.toLowerCase()} to spain`,
      `bring car from ${country.name.toLowerCase()}`,
      `${country.name.toLowerCase()} car import spain`,
      "importar coche españa",
      "calculadora impuestos importación",
      "matricular coche extranjero",
    ],
    alternates: {
      canonical: `/importar-desde/${slug}`,
    },
    openGraph: {
      title: `Importar Coche de ${country.nameEs} a España`,
      description: `Guía completa: transporte, impuestos, tips. ${country.popularBrands.slice(0, 3).join(", ")} desde ${country.nameEs}.`,
      url: `https://importespana.com/importar-desde/${slug}`,
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  return (
    <>
      <CountryPageContent slug={slug} />

      {/* JSON-LD Schema (server-rendered for SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `Cómo importar un coche de ${country.nameEs} a España`,
            description: `Guía paso a paso para importar un coche de ${country.nameEs} a España. Transporte: ${country.avgTransportCost}.`,
            inLanguage: ["es", "en"],
            totalTime: "P14D",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "EUR",
              value: country.avgTransportCost,
            },
            step: country.stepsEs.map((step, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: step.title,
              text: step.desc,
            })),
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "ImportEspana",
                  item: "https://importespana.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: `Importar desde ${country.nameEs}`,
                  item: `https://importespana.com/importar-desde/${slug}`,
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
