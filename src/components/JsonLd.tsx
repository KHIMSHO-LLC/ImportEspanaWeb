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
          "Calculadora gratuita del impuesto de matriculación (IEDMT), ITP, aranceles y demás costes de importar un coche a España desde la UE o terceros países. Usa datos oficiales del BOE (Orden HAC/1501/2025).",
        featureList: [
          "IEDMT con tramos oficiales por CO₂ (Ley 38/1992)",
          "ITP por comunidad autónoma con exenciones 2026 (Cataluña 0 emisiones, Andalucía 1%)",
          "Aranceles TARIC 8703 (10%) e IVA importación (21%) para terceros países",
          "Tabla de depreciación BOE Orden HAC/1501/2025",
          "Comparativa entre comunidades y coste real de propiedad (TCO) 1/5 años",
          "Indicador de riesgo de inspección Hacienda",
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://importespana.com/#howto-import",
        name: "Cómo importar un coche a España",
        description:
          "Pasos para importar y matricular un vehículo en España desde la UE o terceros países, con todos los impuestos y trámites.",
        totalTime: "P30D",
        estimatedCost: { "@type": "MonetaryAmount", currency: "EUR", value: "1500" },
        step: [
          {
            "@type": "HowToStep",
            name: "Comprueba el valor BOE oficial",
            text: "Consulta la Orden HAC/1501/2025 — precios medios de venta. Tu base imponible es ese valor multiplicado por el coeficiente de depreciación según la antigüedad.",
          },
          {
            "@type": "HowToStep",
            name: "Calcula el IEDMT (impuesto de matriculación)",
            text: "Aplica el tipo según las emisiones de CO₂: 0% (<120 g/km), 4,75% (120-160), 9,75% (160-200) o 14,75% (≥200). Algunas comunidades suben el tramo superior al 16%.",
          },
          {
            "@type": "HowToStep",
            name: "Determina ITP o IVA",
            text: "Comprado a particular UE: paga ITP (4-8% según comunidad). Coche nuevo (<6 meses o <6.000 km): IVA 21% en España. Tercer país: arancel 10% + IVA 21% sobre CIF.",
          },
          {
            "@type": "HowToStep",
            name: "Tramita la matriculación en la DGT",
            text: "ITV de inspección de origen extranjero, ficha técnica reducida si no hay COC, tasa DGT 1.1 (99,77€) y placas. Plazo: 30 días desde la entrada en España.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://importespana.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cuánto cuesta importar un coche a España en 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depende del origen, valor BOE, emisiones y comunidad. Para un coche europeo de 25.000€, ronda los 2.000-4.500€ adicionales (IEDMT + tasas). Para terceros países, suma arancel 10% + IVA 21% (≈30% extra sobre CIF) y homologación individual.",
            },
          },
          {
            "@type": "Question",
            name: "¿Quién paga el ITP al importar un coche a España?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Solo si lo compras a un particular en la UE. Si compras a un concesionario UE no pagas ITP (el IVA se asume en origen). Vehículos nuevos (<6 meses o <6.000 km) pagan 21% IVA en España, no ITP.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuáles son las exenciones del ITP para coches eléctricos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cataluña: exento desde el 27 de junio de 2025 para vehículos cero emisiones (Decreto-ley 5/2025). Andalucía: tipo reducido del 1% (Ley 5/2021). Resto de comunidades: tipo general (4-8%).",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué Hacienda revisa los coches importados a precio bajo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Si declaras un precio inferior al valor BOE (Orden HAC/1501/2025), Hacienda puede emitir una liquidación complementaria cobrando la diferencia. Conserva factura, justificantes de daños o kilometraje extremo si declaras por debajo del 80% del BOE.",
            },
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
