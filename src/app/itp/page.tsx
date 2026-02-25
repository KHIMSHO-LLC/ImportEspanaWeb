import { Metadata } from "next";
import ItpContent from "@/components/pages/ItpContent";

export const metadata: Metadata = {
  title: "ITP por Comunidad Autónoma — Impuesto de Transmisiones Patrimoniales",
  description:
    "Compara el ITP (Impuesto de Transmisiones Patrimoniales) en las 17 comunidades autónomas de España. Desde el 3% en Galicia hasta el 8% en Cantabria. Tabla actualizada 2025.",
  alternates: {
    canonical: "https://importespana.com/itp",
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
