import { Metadata } from "next";
import CityPageContent from "@/components/pages/CityPageContent";

export const metadata: Metadata = {
  title: "Importar Coche en Barcelona — ITP 5%, Guía Completa 2026",
  description:
    "Guía completa para importar y matricular un coche en Barcelona. ITP del 5% en Cataluña, tablas BOE, ZBE, plazos y costes detallados.",
  keywords: ["importar coche Barcelona", "ITP Cataluña", "matricular coche extranjero Barcelona", "ZBE Barcelona coche importado"],
  alternates: { canonical: "https://importespana.com/importar-coche-barcelona" },
  openGraph: {
    title: "Importar Coche en Barcelona — ITP 5% | ImportEspana",
    description: "Todo sobre importar y matricular tu coche en Barcelona. ITP 5%, ZBE, guía de trámites y calculadora.",
    url: "https://importespana.com/importar-coche-barcelona",
    type: "website",
  },
};

export default function BarcelonaPage() {
  return <CityPageContent citySlug="barcelona" />;
}
