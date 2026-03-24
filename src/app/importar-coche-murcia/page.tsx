import { Metadata } from "next";
import CityPageContent from "@/components/pages/CityPageContent";

export const metadata: Metadata = {
  title: "Importar Coche en Murcia — ITP 4%, Guía Completa 2026",
  description:
    "Guía completa para importar y matricular un coche en Murcia. ITP del 4% en la Región de Murcia, Puerto de Cartagena y calculadora.",
  keywords: ["importar coche Murcia", "ITP Región de Murcia", "matricular coche extranjero Murcia", "Puerto Cartagena importación"],
  alternates: { canonical: "https://importespana.com/importar-coche-murcia" },
  openGraph: {
    title: "Importar Coche en Murcia — ITP 4% | ImportEspana",
    description: "Todo sobre importar y matricular tu coche en Murcia. ITP 4%, Puerto de Cartagena y calculadora.",
    url: "https://importespana.com/importar-coche-murcia",
    type: "website",
  },
};

export default function MurciaPage() {
  return <CityPageContent citySlug="murcia" />;
}
