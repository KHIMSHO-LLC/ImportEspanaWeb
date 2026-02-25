"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  ExternalLink,
  FileText,
  Building,
  Car,
  Scale,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const resources = {
  es: {
    title: "Recursos oficiales",
    subtitle:
      "Enlaces a todas las fuentes oficiales que necesitas para importar y matricular un coche en España.",
    sections: [
      {
        title: "Hacienda y Tasas",
        icon: Building,
        color: "blue",
        links: [
          {
            name: "BOE — Tablas de valoración de vehículos 2026",
            url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26357",
            desc: "Valores fiscales oficiales para calcular el ITP",
            highlight: true,
          },
          {
            name: "AEAT — Impuesto de matriculación",
            url: "https://sede.agenciatributaria.gob.es/Sede/impuestos-tasas/impuesto-matriculacion.html",
            desc: "Información sobre el impuesto especial de matriculación basado en CO₂",
            highlight: false,
          },
          {
            name: "AEAT — Modelo 576 (pago del impuesto)",
            url: "https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G502.shtml",
            desc: "Formulario para declarar y pagar el impuesto de matriculación",
            highlight: false,
          },
        ],
      },
      {
        title: "DGT — Tráfico",
        icon: Car,
        color: "green",
        links: [
          {
            name: "DGT — Matriculación de vehículos",
            url: "https://sede.dgt.gob.es/es/vehiculos/matriculaciones-de-vehiculos/",
            desc: "Trámites y tasas para matricular tu vehículo en España",
            highlight: true,
          },
          {
            name: "DGT — Cita previa",
            url: "https://sede.dgt.gob.es/es/otros-tramites/cita-previa/",
            desc: "Solicitar cita previa en la DGT para la matriculación",
            highlight: false,
          },
          {
            name: "DGT — Informe de vehículo",
            url: "https://sede.dgt.gob.es/es/vehiculos/informacion-de-vehiculos/informe-de-un-vehiculo/",
            desc: "Consultar datos e historial de un vehículo por matrícula",
            highlight: false,
          },
        ],
      },
      {
        title: "ITV — Inspección técnica",
        icon: Scale,
        color: "orange",
        links: [
          {
            name: "DGT — ITV Estaciones",
            url: "https://www.dgt.es/conoce-la-dgt/con-quien-trabajamos/itv/",
            desc: "Información oficial sobre inspección técnica de vehículos",
            highlight: false,
          },
          {
            name: "AECA-ITV — Estaciones ITV",
            url: "https://www.aeca-itv.com/donde-pasar-la-itv/",
            desc: "Encuentra tu estación ITV más cercana en toda España",
            highlight: true,
          },
        ],
      },
      {
        title: "Aduanas",
        icon: Globe,
        color: "purple",
        links: [
          {
            name: "AEAT — Aduanas e IIEE",
            url: "https://sede.agenciatributaria.gob.es/Sede/aduanas.html",
            desc: "Para importaciones de países fuera de la UE — aranceles y despacho de aduanas",
            highlight: false,
          },
        ],
      },
    ],
    ctaTitle: "Calcula el coste de importar tu coche",
    ctaButton: "Usar calculadora",
    itpTitle: "Compara el ITP por comunidad",
    itpButton: "Ver tabla ITP",
  },
  en: {
    title: "Official Resources",
    subtitle:
      "Links to all the official sources you need to import and register a car in Spain.",
    sections: [
      {
        title: "Tax Authorities",
        icon: Building,
        color: "blue",
        links: [
          {
            name: "BOE — Vehicle Valuation Tables 2026",
            url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26357",
            desc: "Official fiscal values for calculating ITP tax",
            highlight: true,
          },
          {
            name: "AEAT — Registration Tax (Impuesto de Matriculación)",
            url: "https://sede.agenciatributaria.gob.es/Sede/impuestos-tasas/impuesto-matriculacion.html",
            desc: "Registration tax information based on CO₂ emissions",
            highlight: false,
          },
          {
            name: "AEAT — Form 576 (Tax Payment)",
            url: "https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G502.shtml",
            desc: "Form to declare and pay the vehicle registration tax",
            highlight: false,
          },
        ],
      },
      {
        title: "DGT — Traffic Authority",
        icon: Car,
        color: "green",
        links: [
          {
            name: "DGT — Vehicle Registration",
            url: "https://sede.dgt.gob.es/es/vehiculos/matriculaciones-de-vehiculos/",
            desc: "Procedures and fees for registering a vehicle in Spain",
            highlight: true,
          },
          {
            name: "DGT — Book an Appointment",
            url: "https://sede.dgt.gob.es/es/otros-tramites/cita-previa/",
            desc: "Schedule an appointment at your local DGT office",
            highlight: false,
          },
          {
            name: "DGT — Vehicle Report",
            url: "https://sede.dgt.gob.es/es/vehiculos/informacion-de-vehiculos/informe-de-un-vehiculo/",
            desc: "Check vehicle history and status by license plate",
            highlight: false,
          },
        ],
      },
      {
        title: "ITV — Vehicle Inspection",
        icon: Scale,
        color: "orange",
        links: [
          {
            name: "DGT — ITV Stations",
            url: "https://www.dgt.es/conoce-la-dgt/con-quien-trabajamos/itv/",
            desc: "Official vehicle inspection regulations",
            highlight: false,
          },
          {
            name: "AECA-ITV — Find ITV Stations",
            url: "https://www.aeca-itv.com/donde-pasar-la-itv/",
            desc: "Find your nearest ITV inspection station across Spain",
            highlight: true,
          },
        ],
      },
      {
        title: "Customs",
        icon: Globe,
        color: "purple",
        links: [
          {
            name: "AEAT — Customs & Excise",
            url: "https://sede.agenciatributaria.gob.es/Sede/aduanas.html",
            desc: "For non-EU imports — customs duties and clearance",
            highlight: false,
          },
        ],
      },
    ],
    ctaTitle: "Calculate the cost of importing your car",
    ctaButton: "Use calculator",
    itpTitle: "Compare ITP tax by region",
    itpButton: "View ITP table",
  },
};

const colorMap: Record<
  string,
  {
    bg: string;
    border: string;
    icon: string;
    highlightBg: string;
    highlightBorder: string;
  }
> = {
  blue: {
    bg: "bg-blue-50/50",
    border: "border-blue-100",
    icon: "text-blue-600",
    highlightBg: "bg-blue-50",
    highlightBorder: "border-blue-300",
  },
  green: {
    bg: "bg-green-50/50",
    border: "border-green-100",
    icon: "text-green-600",
    highlightBg: "bg-green-50",
    highlightBorder: "border-green-300",
  },
  orange: {
    bg: "bg-orange-50/50",
    border: "border-orange-100",
    icon: "text-orange-600",
    highlightBg: "bg-orange-50",
    highlightBorder: "border-orange-300",
  },
  purple: {
    bg: "bg-purple-50/50",
    border: "border-purple-100",
    icon: "text-purple-600",
    highlightBg: "bg-purple-50",
    highlightBorder: "border-purple-300",
  },
};

export default function ResourcesContent() {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const t = resources[lang];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-3">
          <FileText size={14} />
          {lang === "es" ? "Enlaces verificados 2026" : "Verified links 2026"}
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          {t.title}
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Resource Sections */}
      <div className="space-y-6 mb-8">
        {t.sections.map((section, i) => {
          const colors = colorMap[section.color] || colorMap.blue;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Section Header */}
              <div
                className={`px-6 py-4 ${colors.bg} border-b ${colors.border}`}
              >
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <section.icon size={20} className={colors.icon} />
                  {section.title}
                </h2>
              </div>

              {/* Links */}
              <div className="p-4 space-y-2">
                {section.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all group cursor-pointer ${
                      link.highlight
                        ? `${colors.highlightBg} ${colors.highlightBorder} hover:shadow-md`
                        : "border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex-1 mr-3">
                      <span
                        className={`text-sm font-bold ${link.highlight ? "text-gray-900" : "text-blue-700"} group-hover:text-blue-800`}
                      >
                        {link.name}
                      </span>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {link.desc}
                      </p>
                    </div>
                    <div
                      className={`flex items-center gap-1 shrink-0 ${link.highlight ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"}`}
                    >
                      <span className="text-xs font-medium hidden sm:inline">
                        {lang === "es" ? "Abrir" : "Open"}
                      </span>
                      <ArrowRight size={16} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTAs */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link
          href="/"
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-center hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
        >
          <h3 className="text-lg font-bold text-white mb-1">{t.ctaTitle}</h3>
          <span className="text-blue-100 text-sm">{t.ctaButton} →</span>
        </Link>
        <Link
          href="/itp"
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-center hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg"
        >
          <h3 className="text-lg font-bold text-white mb-1">{t.itpTitle}</h3>
          <span className="text-green-100 text-sm">{t.itpButton} →</span>
        </Link>
      </div>
    </div>
  );
}
