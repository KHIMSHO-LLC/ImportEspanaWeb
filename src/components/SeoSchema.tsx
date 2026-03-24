"use client";

import { FAQ_DATA, FAQItem } from "@/constants/FaqData";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ArticleData {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url?: string;
}

interface SeoSchemaProps {
  /** Custom breadcrumbs — if not provided, uses default homepage breadcrumbs */
  breadcrumbs?: BreadcrumbItem[];
  /** Custom FAQ items — if not provided and showHomeFaq is true, uses FAQ_DATA.es */
  faqItems?: FAQItem[];
  /** Pass article data to generate Article schema (for blog posts) */
  articleData?: ArticleData;
  /** Whether to include full home-page schemas (WebApplication, HowTo, etc.) */
  showHomeSchemas?: boolean;
}

export default function SeoSchema({
  breadcrumbs,
  faqItems,
  articleData,
  showHomeSchemas = true,
}: SeoSchemaProps = {}) {
  const schemaGraph: object[] = [];

  if (showHomeSchemas) {
    schemaGraph.push(
      {
        "@type": "WebApplication",
        name: "ImportEspana — Calculadora de Impuestos de Matriculación",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web, iOS, Android",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        description:
          "Calculadora gratuita de impuestos de matriculación para coches importados en España. Calcula ITP, impuesto especial, IVA y costes de transporte con datos oficiales del BOE 2026.",
        url: "https://importespana.com",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "150",
        },
        featureList: [
          "Calculadora de ITP por comunidad autónoma",
          "Impuesto de matriculación por emisiones CO₂",
          "Tablas de valoración BOE 2026",
          "Comparación de ITP por región",
          "Guía de importación por país de origen",
        ],
      },
      {
        "@type": "Organization",
        name: "ImportEspana",
        url: "https://importespana.com",
        logo: "https://importespana.com/logo-full.png",
        sameAs: ["https://apps.apple.com/ar/app/importespana/id6759112789"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["Spanish", "English"],
        },
      },
      {
        "@type": "WebSite",
        url: "https://importespana.com",
        name: "ImportEspana",
        description:
          "Calculadora gratuita de impuestos de matriculación para importar coches a España",
        inLanguage: ["es", "en"],
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://importespana.com/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "HowTo",
        name: "Cómo matricular un coche extranjero en España",
        description:
          "Guía paso a paso para importar y matricular tu coche de la UE en España.",
        step: [
          {
            "@type": "HowToStep",
            name: "Paso 1: ITV Especial",
            text: "Pasar la ITV de importación con la ficha técnica reducida.",
          },
          {
            "@type": "HowToStep",
            name: "Paso 2: Impuestos (Hacienda)",
            text: "Pagar el Impuesto de Matriculación y el ITP (o modelo 309 para IVA) en la Agencia Tributaria.",
          },
          {
            "@type": "HowToStep",
            name: "Paso 3: Ayuntamiento",
            text: "Pagar el IVTM (Sello del coche) en tu ayuntamiento.",
          },
          {
            "@type": "HowToStep",
            name: "Paso 4: DGT",
            text: "Presentar todos los justificantes de pago en la cita de Tráfico para obtener el permiso de circulación.",
          },
        ],
      },
    );
  }

  // Breadcrumbs
  const breadcrumbItems = breadcrumbs ?? [
    { name: "Inicio", url: "https://importespana.com" },
    { name: "Valoración BOE", url: "https://importespana.com/valoracion-boe" },
    { name: "Impuesto ITP", url: "https://importespana.com/itp" },
  ];
  schemaGraph.push({
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });

  // FAQ
  const faqData = faqItems ?? (showHomeSchemas ? FAQ_DATA.es : null);
  if (faqData && faqData.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  // Article (for blog posts or content pages)
  if (articleData) {
    schemaGraph.push({
      "@type": "Article",
      headline: articleData.title,
      description: articleData.description,
      datePublished: articleData.datePublished,
      dateModified: articleData.dateModified ?? articleData.datePublished,
      url: articleData.url,
      author: {
        "@type": "Organization",
        name: "ImportEspana",
        url: "https://importespana.com",
      },
      publisher: {
        "@type": "Organization",
        name: "ImportEspana",
        url: "https://importespana.com",
      },
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": schemaGraph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
