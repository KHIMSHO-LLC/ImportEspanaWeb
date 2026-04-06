import { Metadata } from "next";
import DubaiCalculatorContent from "@/components/pages/DubaiCalculatorContent";

export const metadata: Metadata = {
  title: "Importar Coche desde Dubái a España — Calculadora 2026",
  description:
    "Calculadora para importar coches desde Dubái (EAU) a España. Calcula aranceles (6,5%), IVA (21%), homologación y transporte marítimo. Guía completa del proceso.",
  keywords: [
    "importar coche Dubai España",
    "arancel importación coche EAU",
    "homologación coche Dubai",
    "transporte coche Dubai España",
    "calculadora importación Dubai",
  ],
  alternates: {
    canonical: "https://importespana.com/importar-coche-dubai",
  },
  openGraph: {
    title: "Calculadora Importación Coche Dubái → España | ImportEspana",
    description:
      "Calcula el coste exacto de importar tu coche desde Dubái. Aranceles, IVA, homologación y transporte incluidos.",
    url: "https://importespana.com/importar-coche-dubai",
    type: "website",
  },
};

export default function DubaiPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-3xl mx-auto px-4 md:px-8 pt-4 pb-20">
        <DubaiCalculatorContent />
      </div>
    </div>
  );
}
