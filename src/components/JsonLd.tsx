export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://importespana.com/#website",
        url: "https://importespana.com",
        name: "ImportEspana",
        description: "Calculadora Impuestos Matriculación España",
        publisher: {
          "@id": "https://importespana.com/#organization",
        },
        inLanguage: "es-ES",
      },
      {
        "@type": "Organization",
        "@id": "https://importespana.com/#organization",
        name: "ImportEspana",
        url: "https://importespana.com",
        logo: {
          "@type": "ImageObject",
          url: "https://importespana.com/icon.png",
          width: 512,
          height: 512,
        },
        sameAs: [
          "https://twitter.com/importespana",
          "https://facebook.com/importespana",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@importespana.com",
          contactType: "customer support",
          areaServed: "ES",
          availableLanguage: ["es", "en", "de", "fr", "ru"],
        },
      },
      {
        "@type": "WebApplication",
        "@id": "https://importespana.com/#calculator",
        name: "Calculadora de Impuestos de Importación de Coches a España",
        url: "https://importespana.com",
        applicationCategory: "FinanceApplication",
        operatingSystem: "All",
        inLanguage: ["es", "en", "de", "fr", "ru"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        description:
          "Calculadora gratuita del impuesto de matriculación (IEDMT), ITP, aranceles y demás costes de importar un coche a España desde la UE o terceros países. Usa datos oficiales del BOE.",
        featureList: [
          "Cálculo del Impuesto de Matriculación (IEDMT) con tramos CO2 oficiales",
          "ITP por comunidad autónoma (19 regiones)",
          "Aranceles aduaneros y IVA para importaciones extracomunitarias",
          "Valor fiscal BOE actualizado (Enero 2026)",
          "Cálculo de transporte, ITV, DGT y homologación",
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
