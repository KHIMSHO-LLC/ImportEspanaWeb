import { Metadata } from "next";
import CityPageContent from "@/components/pages/CityPageContent";

export const metadata: Metadata = {
  title: "Importar Coche en Alicante — ITP 6%, Guía Completa 2026",
  description:
    "Guía completa para importar y matricular un coche en Alicante. ITP del 6% en Comunidad Valenciana, cambio de residencia, jubilados y calculadora.",
  keywords: ["importar coche Alicante", "ITP Comunidad Valenciana Alicante", "jubilados extranjeros coche Alicante", "cambio residencia coche"],
  alternates: { canonical: "https://importespana.com/importar-coche-alicante" },
  openGraph: {
    title: "Importar Coche en Alicante — ITP 6% | ImportEspana",
    description: "Importar y matricular coche en Alicante. ITP 6%, guía para jubilados expatriados y calculadora.",
    url: "https://importespana.com/importar-coche-alicante",
    type: "website",
  },
};

export default function AlicantePage() {
  return <CityPageContent citySlug="alicante" />;
}
