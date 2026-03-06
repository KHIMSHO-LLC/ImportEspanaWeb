"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

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
        name: "EEA — Base de datos oficial de emisiones de CO₂",
        url: "https://www.eea.europa.eu/data-and-maps/data/co2-cars-emission-19",
        desc: "Datos de emisiones homologadas (WLTP/NEDC) de vehículos en Europa",
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
        name: "EEA — Official CO₂ Emissions Database",
        url: "https://www.eea.europa.eu/data-and-maps/data/co2-cars-emission-19",
        desc: "Homologated emissions data (WLTP/NEDC) for European vehicles",
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
    <div className="mt-12">
      <h2 className="heading-section text-lg text-[var(--text-primary)] mb-6">
        {data.title}
      </h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {data.items.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 rounded-xl border border-[var(--surface-border)] hover:border-[var(--brand-blue)]/30 bg-[var(--surface-elevated)] hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors duration-200">
                {item.name}
              </span>
              <ArrowUpRight
                size={14}
                className="shrink-0 mt-0.5 text-[var(--text-tertiary)] group-hover:text-[var(--brand-blue)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
            <p className="text-xs text-[var(--text-tertiary)] mt-1.5 leading-relaxed">{item.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
