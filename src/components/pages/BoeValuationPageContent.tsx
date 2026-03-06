"use client";

import { BoeValuationTool } from "@/components/BoeValuationTool";
import Link from "next/link";
import {
  ChevronRight,
  FileSearch,
  Calculator,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function BoeValuationPageContent() {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";

  return (
    <div className="bg-[var(--surface-dim)] min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <nav
          className="flex items-center gap-1 text-xs text-[var(--text-tertiary)]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">
            ImportEspana
          </Link>
          <ChevronRight size={12} />
          <span className="text-[var(--text-secondary)]">
            {lang === "es"
              ? "Valoración BOE Hacienda"
              : "Spanish Treasury BOE Valuation"}
          </span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-8 pb-16 space-y-8">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-2">
            <FileSearch size={32} className="text-[var(--brand-blue)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            {lang === "es"
              ? "Valoración BOE Coches"
              : "Official BOE Car Valuation"}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-medium">
            {lang === "es"
              ? "Busca cualquier coche en la base de datos oficial del Ministerio de Hacienda (2026)."
              : "Search for any car in the official 2026 database of the Spanish Ministry of Treasury."}
          </p>
          <p className="text-sm md:text-base text-[var(--text-tertiary)] max-w-2xl mx-auto">
            {lang === "es"
              ? "Descubre su Valor Oficial Nuevo y calcula instantáneamente el Valor Venal (Depreciado) para el cálculo del ITP y Matriculación según la edad."
              : "Discover its Official New Value and instantly calculate the Tax Base (Depreciated Value) used to calculate the ITP Transfer Tax and Registration Tax based on its exact age."}
          </p>
        </div>

        {/* Core Tool */}
        <BoeValuationTool />

        {/* Feature Explainers */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-[var(--surface-elevated)] p-6 md:p-8 rounded-xl border border-[var(--surface-border)] shadow-sm hover:shadow-md transition-shadow">
            <Calculator size={28} className="text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              {lang === "es"
                ? "¿Para qué sirve el Valor BOE?"
                : "What is the BOE Value used for?"}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {lang === "es"
                ? "Hacienda rechaza los contratos de compra-venta si declaras un precio menor a este valor de tabla. Usan este número para cobrarte el "
                : "The Spanish Treasury rejects buy/sell contracts if you declare a price lower than this table value. The government uses this number to charge you the "}
              <Link
                href="/itp"
                className="text-[var(--brand-blue)] font-semibold hover:underline mx-1"
              >
                {lang === "es"
                  ? "Impuesto de Transmisiones Patrimoniales (ITP)"
                  : "Transfer Tax (ITP)"}
              </Link>
              {lang === "es"
                ? " en ventas entre particulares y el Impuesto de Matriculación para coches extranjeros."
                : " on sales between private individuals, and the Registration Tax (IEDMT) for imported foreign cars."}
            </p>
          </div>

          <div className="bg-[var(--surface-elevated)] p-6 md:p-8 rounded-xl border border-[var(--surface-border)] shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck size={28} className="text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              {lang === "es"
                ? "Tablas Oficiales 2026 Actualizadas"
                : "Updated Official 2026 Tax Tables"}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {lang === "es"
                ? "Contenemos la base de datos completa y exacta (+40,000 vehículos) del Boletín Oficial del Estado (BOE). No pierdas tiempo buscando tu coche en los gigantescos archivos PDF de la Agencia Tributaria."
                : "We house the complete and exact database (+40,000 vehicles) from the Official State Gazette (BOE). Stop wasting time searching for your car in the gigantic, confusing PDF files of the Spanish Tax Agency."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
