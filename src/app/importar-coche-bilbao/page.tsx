import { Metadata } from "next";
import CityPageContent from "@/components/pages/CityPageContent";

export const metadata: Metadata = {
  title: "Importar Coche en Bilbao — ITP 4%, Guía Completa 2026",
  description:
    "Guía completa para importar y matricular un coche en Bilbao. ITP del 4% en País Vasco, Diputación Foral, Puerto de Bilbao y calculadora.",
  keywords: ["importar coche Bilbao", "ITP País Vasco", "Diputación Foral Bizkaia ITP", "matricular coche extranjero Bilbao"],
  alternates: { canonical: "https://importespana.com/importar-coche-bilbao" },
  openGraph: {
    title: "Importar Coche en Bilbao — ITP 4% | ImportEspana",
    description: "Todo sobre importar y matricular tu coche en Bilbao. ITP 4% foral, Puerto de Bilbao y calculadora.",
    url: "https://importespana.com/importar-coche-bilbao",
    type: "website",
  },
};

export default function BilbaoPage() {
  return <CityPageContent citySlug="bilbao" />;
}
