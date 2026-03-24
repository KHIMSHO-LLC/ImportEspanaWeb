import { Metadata } from "next";
import MetodologiaContent from "@/components/pages/MetodologiaContent";

export const metadata: Metadata = {
  title: "Metodología del Cálculo — ImportEspana",
  description:
    "Cómo calcula ImportEspana los impuestos de importación: fórmulas del IEDMT, ITP, IVA y aranceles. Fuentes oficiales BOE actualizadas a enero 2026.",
  keywords: [
    "metodología cálculo impuesto matriculación",
    "fórmula IEDMT",
    "tablas BOE 2026",
    "cómo se calcula el impuesto de matriculación",
  ],
  alternates: {
    canonical: "https://importespana.com/metodologia",
    languages: {
      "es-ES": "https://importespana.com/metodologia",
      "en-US": "https://importespana.com/metodologia",
      "x-default": "https://importespana.com/metodologia",
    },
  },
  openGraph: {
    title: "Metodología del Cálculo | ImportEspana",
    description:
      "Fórmulas, fuentes BOE y bases legales que usa la calculadora de ImportEspana.",
    url: "https://importespana.com/metodologia",
    type: "website",
  },
};

export default function MetodologiaPage() {
  return <MetodologiaContent />;
}
