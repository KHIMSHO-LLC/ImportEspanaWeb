import { Metadata } from "next";
import CityPageContent from "@/components/pages/CityPageContent";

export const metadata: Metadata = {
  title: "Importar Coche en Sevilla — ITP 4%, Guía Completa 2026",
  description:
    "Guía completa para importar y matricular un coche en Sevilla. ITP del 4% en Andalucía, tablas BOE, plazos y costes detallados.",
  keywords: ["importar coche Sevilla", "ITP Andalucía", "matricular coche extranjero Sevilla", "coche alemán Sevilla"],
  alternates: { canonical: "https://importespana.com/importar-coche-sevilla" },
  openGraph: {
    title: "Importar Coche en Sevilla — ITP 4% | ImportEspana",
    description: "Todo sobre importar y matricular tu coche en Sevilla. ITP 4% en Andalucía, trámites y calculadora.",
    url: "https://importespana.com/importar-coche-sevilla",
    type: "website",
  },
};

export default function SevillaPage() {
  return <CityPageContent citySlug="sevilla" />;
}
