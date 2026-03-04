import { Metadata } from "next";
import { BoeValuationPageContent } from "@/components/pages/BoeValuationPageContent";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Calculadora de Valoración BOE de Coches (Hacienda 2026)",
  description:
    "Calcula el valor venal oficial de cualquier coche según las Tablas BOE de Hacienda 2026. Descuento automático por antigüedad y depreciación exacta.",
  keywords: [
    "tabla boe coches",
    "valor venal coche",
    "valoracion hacienda coches",
    "calcular valor boe",
    "depreciacion boe",
  ],
  alternates: {
    canonical: "/valoracion-boe",
  },
  openGraph: {
    title: "Calculadora de Valor Venal y Tablas BOE (2026)",
    description:
      "Encuentra el valor exacto de tu coche para el pago del ITP o IEDMT en España.",
    url: "https://importespana.com/valoracion-boe",
  },
};

export default function BoeValuationPage() {
  return (
    <>
      <BoeValuationPageContent />

      {/* JSON-LD Schema (server-rendered for SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Calculadora de Valoración BOE de Hacienda Español",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            description:
              "Free online tool to search official car prices in the Spanish BOE and calculate the exact Treasury depreciation for Transfer (ITP) and Registration (IEDMT) taxes in Spain.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
          }),
        }}
      />
    </>
  );
}
