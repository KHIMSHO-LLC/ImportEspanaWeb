import { REGIONS, getRegionBySlug } from "@/constants/Regions";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import RegionPageContent from "@/components/pages/RegionPageContent";

export function generateStaticParams() {
  return REGIONS.map((region) => ({
    region: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region: slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return {};

  return {
    title: `Importar Coche en ${region.nameEs} — Calculadora ITP ${region.itpRate}% | ImportEspana`,
    description: `Calcula el coste de importar y matricular un coche en ${region.nameEs}. ITP ${region.itpRate}%, oficina DGT en ${region.capital}, guía paso a paso. Datos oficiales BOE 2026.`,
    keywords: [
      `importar coche ${region.nameEs.toLowerCase()}`,
      `ITP ${region.nameEs.toLowerCase()}`,
      `matricular coche ${region.capital.toLowerCase()}`,
      `impuesto transmisiones ${region.nameEs.toLowerCase()}`,
      `DGT ${region.capital.toLowerCase()}`,
      `importar coche alemania ${region.nameEs.toLowerCase()}`,
      `coche segunda mano ${region.nameEs.toLowerCase()}`,
      `import car ${region.name.toLowerCase()} spain`,
      `ITP tax ${region.name.toLowerCase()}`,
      "importar coche españa",
      "calculadora impuestos coche",
    ],
    alternates: {
      canonical: `/importar-coche/${slug}`,
    },
    openGraph: {
      title: `Importar Coche en ${region.nameEs} — ITP ${region.itpRate}%`,
      description: `Guía completa para importar y matricular coches en ${region.nameEs}. ITP ${region.itpRate}%, DGT ${region.capital}.`,
      url: `https://importespana.com/importar-coche/${slug}`,
    },
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region: slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) notFound();

  return (
    <>
      <RegionPageContent slug={slug} />

      {/* JSON-LD Schema (server-rendered for SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `Importar Coche en ${region.nameEs}`,
            description: `Guía para importar y matricular coches en ${region.nameEs}. ITP ${region.itpRate}%.`,
            url: `https://importespana.com/importar-coche/${slug}`,
            inLanguage: ["es", "en"],
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
                  name: "ITP",
                  item: "https://importespana.com/itp",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: region.nameEs,
                  item: `https://importespana.com/importar-coche/${slug}`,
                },
              ],
            },
            mainEntity: {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: `¿Cuánto es el ITP en ${region.nameEs}?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `El ITP en ${region.nameEs} es del ${region.itpRate}% sobre el valor fiscal del vehículo según las tablas del BOE.`,
                  },
                },
                {
                  "@type": "Question",
                  name: `What is the ITP tax in ${region.name}?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The ITP tax in ${region.name} is ${region.itpRate}% on the vehicle's fiscal value according to the BOE tables.`,
                  },
                },
                {
                  "@type": "Question",
                  name: `¿Dónde está la DGT en ${region.capital}?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: region.dgtOffice,
                  },
                },
                {
                  "@type": "Question",
                  name: `¿Cuánto cuesta importar un coche en ${region.nameEs}?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `El coste depende del valor del coche, emisiones CO₂ y tipo de importación. El ITP en ${region.nameEs} es del ${region.itpRate}%. Usa nuestra calculadora gratuita para tu caso exacto.`,
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
