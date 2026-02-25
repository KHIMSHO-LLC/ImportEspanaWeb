import { Metadata } from "next";
import ResourcesContent from "@/components/pages/ResourcesContent";

export const metadata: Metadata = {
  title: "Recursos Oficiales — Enlaces BOE, DGT, AEAT para Importar Coches",
  description:
    "Todos los enlaces oficiales que necesitas para importar y matricular un coche en España. BOE, AEAT, DGT, ITV, y Aduanas. Fuentes verificadas y actualizadas.",
  alternates: {
    canonical: "https://importespana.com/resources",
  },
  keywords: [
    "recursos importar coche España",
    "BOE tablas vehículos",
    "DGT matriculación",
    "AEAT impuesto matriculación",
    "ITV importación",
    "aduanas vehículos",
  ],
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
