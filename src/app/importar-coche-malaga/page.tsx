import { Metadata } from "next";
import CityPageContent from "@/components/pages/CityPageContent";

export const metadata: Metadata = {
  title: "Importar Coche en Málaga — ITP 4%, Guía Completa 2026",
  description:
    "Guía completa para importar y matricular un coche en Málaga. ITP del 4% en Andalucía, expatriados, Costa del Sol y calculadora.",
  keywords: ["importar coche Málaga", "ITP Andalucía", "expatriados coche Málaga", "Costa del Sol coche importado"],
  alternates: { canonical: "https://importespana.com/importar-coche-malaga" },
  openGraph: {
    title: "Importar Coche en Málaga — ITP 4% | ImportEspana",
    description: "Todo sobre importar y matricular tu coche en Málaga. ITP 4%, guía para expatriados y calculadora.",
    url: "https://importespana.com/importar-coche-malaga",
    type: "website",
  },
};

export default function MalagaPage() {
  return <CityPageContent citySlug="malaga" />;
}
