"use client";

import { FAQ_DATA } from "@/constants/FaqData";

export default function SeoSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
        "@type": "FAQPage",
        mainEntity: FAQ_DATA.es.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://importespana.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Valoración BOE",
            item: "https://importespana.com/valoracion-boe",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Impuesto ITP",
            item: "https://importespana.com/itp",
          },
        ],
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
