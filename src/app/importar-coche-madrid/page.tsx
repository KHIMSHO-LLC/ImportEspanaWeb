import { Metadata } from "next";
import CityPageContent from "@/components/pages/CityPageContent";

export const metadata: Metadata = {
  title: "Importar Coche en Madrid — ITP 4%, Guía Completa 2026",
  description:
    "Guía completa para importar y matricular un coche en Madrid. ITP del 4%, tablas BOE, plazos y costes detallados. Calculadora incluida.",
  keywords: ["importar coche Madrid", "ITP Madrid", "matricular coche extranjero Madrid", "coche alemán Madrid"],
  alternates: { canonical: "https://importespana.com/importar-coche-madrid" },
  openGraph: {
    title: "Importar Coche en Madrid — ITP 4% | ImportEspana",
    description: "Todo sobre importar y matricular tu coche en Madrid. ITP 4%, guía de trámites y calculadora.",
    url: "https://importespana.com/importar-coche-madrid",
    type: "website",
  },
};

export default function MadridPage() {
  return <CityPageContent citySlug="madrid" />;
}
