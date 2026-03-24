import { Metadata } from "next";
import ItpContent from "@/components/pages/ItpContent";

export const metadata: Metadata = {
  title: "ITP por Comunidad Autónoma — Impuesto de Transmisiones Patrimoniales 2026",
  description:
    "Compara el ITP (Impuesto de Transmisiones Patrimoniales) en todas las comunidades autónomas de España. Desde el 4% en Madrid y Andalucía hasta el 8% en Asturias, Galicia y Cantabria. Tabla actualizada 2026.",
  alternates: {
    canonical: "https://importespana.com/itp",
    languages: {
      "es-ES": "https://importespana.com/itp",
      "en-US": "https://importespana.com/itp",
      "x-default": "https://importespana.com/itp",
    },
  },
  keywords: [
    "ITP España",
    "impuesto transmisiones patrimoniales",
    "ITP comunidades autónomas",
    "ITP Madrid",
    "ITP Cataluña",
    "ITP Andalucía",
    "ITP Valencia",
    "ITP vehículos",
    "impuesto coche segunda mano",
  ],
};

export default function ItpPage() {
  return <ItpContent />;
}
