import { Metadata } from "next";
import CityPageContent from "@/components/pages/CityPageContent";

export const metadata: Metadata = {
  title: "Importar Coche en Valencia — ITP 6%, Guía Completa 2026",
  description:
    "Guía completa para importar y matricular un coche en Valencia. ITP del 6%, Puerto de Valencia, tablas BOE y calculadora.",
  keywords: ["importar coche Valencia", "ITP Comunidad Valenciana", "matricular coche extranjero Valencia", "puerto Valencia importación"],
  alternates: { canonical: "https://importespana.com/importar-coche-valencia" },
  openGraph: {
    title: "Importar Coche en Valencia — ITP 6% | ImportEspana",
    description: "Todo sobre importar y matricular tu coche en Valencia. ITP 6%, Puerto de Valencia y calculadora.",
    url: "https://importespana.com/importar-coche-valencia",
    type: "website",
  },
};

export default function ValenciaPage() {
  return <CityPageContent citySlug="valencia" />;
}
