import { Metadata } from "next";
import CityPageContent from "@/components/pages/CityPageContent";

export const metadata: Metadata = {
  title: "Importar Coche en Zaragoza — ITP 4%, Guía Completa 2026",
  description:
    "Guía completa para importar y matricular un coche en Zaragoza. ITP del 4% en Aragón, hub logístico PLAZA, tablas BOE y calculadora.",
  keywords: ["importar coche Zaragoza", "ITP Aragón", "matricular coche extranjero Zaragoza", "PLAZA Zaragoza importación"],
  alternates: { canonical: "https://importespana.com/importar-coche-zaragoza" },
  openGraph: {
    title: "Importar Coche en Zaragoza — ITP 4% | ImportEspana",
    description: "Todo sobre importar y matricular tu coche en Zaragoza. ITP 4%, hub logístico y calculadora.",
    url: "https://importespana.com/importar-coche-zaragoza",
    type: "website",
  },
};

export default function ZaragozaPage() {
  return <CityPageContent citySlug="zaragoza" />;
}
