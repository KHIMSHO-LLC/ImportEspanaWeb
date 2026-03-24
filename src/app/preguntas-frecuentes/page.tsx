import { Metadata } from "next";
import FaqPageContent from "@/components/pages/FaqPageContent";
import { FAQ_DATA } from "@/constants/FaqData";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Importar Coches a España 2026",
  description:
    "Respuestas completas sobre impuestos, trámites, costes y procesos para importar un coche a España desde Alemania, Dubái y otros países. Datos actualizados 2026.",
  keywords: [
    "preguntas frecuentes importar coche España",
    "FAQ impuesto matriculación",
    "dudas importación vehículo",
    "cuánto cuesta importar coche",
    "trámites matriculación coche extranjero",
  ],
  alternates: {
    canonical: "https://importespana.com/preguntas-frecuentes",
    languages: {
      "es-ES": "https://importespana.com/preguntas-frecuentes",
      "en-US": "https://importespana.com/preguntas-frecuentes",
      "x-default": "https://importespana.com/preguntas-frecuentes",
    },
  },
  openGraph: {
    title: "Preguntas Frecuentes — Importar Coches a España",
    description:
      "Todo lo que necesitas saber sobre importar un coche a España. 30+ preguntas sobre costes, ITP, trámites, Dubái y más.",
    url: "https://importespana.com/preguntas-frecuentes",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.es.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqPageContent />
    </>
  );
}
