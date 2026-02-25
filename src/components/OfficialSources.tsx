"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react";

const sources = {
  es: {
    title: "Fuentes oficiales",
    items: [
      {
        name: "BOE — Tablas de valoración de vehículos",
        url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26357",
        desc: "Valores fiscales oficiales para el cálculo del ITP",
      },
      {
        name: "AEAT — Impuesto especial sobre determinados medios de transporte",
        url: "https://sede.agenciatributaria.gob.es/Sede/impuestos-tasas/impuesto-matriculacion.html",
        desc: "Impuesto de matriculación basado en emisiones CO₂",
      },
      {
        name: "DGT — Matriculación de vehículos",
        url: "https://sede.dgt.gob.es/es/vehiculos/matriculaciones-de-vehiculos/",
        desc: "Trámites de matriculación y tasas de la DGT",
      },
    ],
  },
  en: {
    title: "Official sources",
    items: [
      {
        name: "BOE — Vehicle valuation tables",
        url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26357",
        desc: "Official fiscal values for ITP calculation",
      },
      {
        name: "AEAT — Special tax on vehicles",
        url: "https://sede.agenciatributaria.gob.es/Sede/impuestos-tasas/impuesto-matriculacion.html",
        desc: "Registration tax based on CO₂ emissions",
      },
      {
        name: "DGT — Vehicle registration",
        url: "https://sede.dgt.gob.es/es/vehiculos/matriculaciones-de-vehiculos/",
        desc: "Registration procedures and DGT fees",
      },
    ],
  },
};

export const OfficialSources = () => {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const data = sources[lang];

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <ExternalLink size={18} className="text-blue-600" />
        {data.title}
      </h2>
      <div className="space-y-3">
        {data.items.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                {item.name}
              </span>
              <ExternalLink
                size={14}
                className="text-gray-400 group-hover:text-blue-500"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
