import { Metadata } from "next";
import CityPageContent from "@/components/pages/CityPageContent";

export const metadata: Metadata = {
  title: "Importar Coche en Palma de Mallorca — ITP 4%, Guía 2026",
  description:
    "Guía completa para importar y matricular un coche en Palma. ITP del 4% en Islas Baleares, transporte marítimo y calculadora.",
  keywords: ["importar coche Palma Mallorca", "ITP Baleares", "matricular coche extranjero Mallorca", "transporte barco coche Mallorca"],
  alternates: { canonical: "https://importespana.com/importar-coche-palma" },
  openGraph: {
    title: "Importar Coche en Palma — ITP 4% | ImportEspana",
    description: "Importar y matricular coche en Palma de Mallorca. ITP 4%, transporte marítimo y calculadora.",
    url: "https://importespana.com/importar-coche-palma",
    type: "website",
  },
};

export default function PalmaPage() {
  return <CityPageContent citySlug="palma" />;
}
