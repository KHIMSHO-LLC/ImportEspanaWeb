"use client";

import { FAQ_DATA } from "@/constants/FaqData";

export default function SeoSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "ImportEspana",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web, iOS, Android",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        description:
          "Calculate the registration tax (Impuesto de Matriculación) for importing cars to Spain. Accurate calculator using official BOE tables.",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "150",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_DATA.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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
