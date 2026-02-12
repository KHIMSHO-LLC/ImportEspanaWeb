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
          "https://facebook.com/importespana", // Placeholders, update if real ones exist
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@importespana.com",
          contactType: "customer support",
          areaServed: "ES",
          availableLanguage: ["es", "en", "de", "fr", "ru"],
        },
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
