"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Vehicle } from "@/types";
import Link from "next/link";
import { Suspense } from "react";
import {
  Car,
  Calculator,
  Info,
  Euro,
  Gauge,
  Calendar,
  ChevronRight,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { HomeContent } from "@/app/page";
import { DEPRECIATION_TABLE } from "@/utils/taxCalculator";

export default function CarPageContent({
  heroCar,
  queryModel,
}: {
  heroCar: Vehicle;
  queryModel: string;
}) {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";

  const displayName = `${heroCar.brand} ${queryModel}`;

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
          <Link
            href="/coches"
            className="hover:text-[var(--brand-blue)] transition-colors"
          >
            {lang === "es" ? "Coches" : "Cars"}
          </Link>
          <ChevronRight size={12} />
          <span className="text-[var(--text-secondary)] truncate max-w-[200px]">
            {displayName}
          </span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-8">
        <div className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-[var(--brand-blue)]/5 rounded-xl hidden sm:block">
              <Car className="text-[var(--brand-blue)]" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] leading-tight">
                {lang === "es"
                  ? `Impuestos para Importar un ${displayName} a España`
                  : `Taxes to Import a ${displayName} to Spain`}
              </h1>
              <p className="text-[var(--text-tertiary)] mt-2 text-sm md:text-base">
                {lang === "es"
                  ? `Calculadora de ITP, Aduanas y Matriculación basada en el valor oficial del BOE 2026 para el ${heroCar.brand} ${heroCar.model}.`
                  : `ITP, Customs and Registration Tax calculator based on the official 2026 BOE value for the ${heroCar.brand} ${heroCar.model}.`}
              </p>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--brand-blue)]/5 rounded-xl p-4 text-center border border-blue-100">
              <Euro size={20} className="text-[var(--brand-blue)] mx-auto mb-2" />
              <div className="text-lg font-bold text-[var(--text-primary)]">
                €{heroCar.value.toLocaleString("de-DE")}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] font-medium">
                {lang === "es" ? "Valor BOE (Nuevo)" : "BOE Value (New)"}
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
              <Gauge size={20} className="text-green-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-[var(--text-primary)]">
                {heroCar.cv} cv
              </div>
              <div className="text-xs text-[var(--text-tertiary)] font-medium">Potencia</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100">
              <TrendingDown size={20} className="text-amber-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-[var(--text-primary)]">
                {heroCar.co2 ? `${heroCar.co2}g` : "--"}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] font-medium">
                Emisiones CO₂
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center border border-purple-100">
              <Calendar size={20} className="text-purple-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-[var(--text-primary)]">
                {heroCar.startYear} - {heroCar.endYear || "Hoy"}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] font-medium">
                {lang === "es" ? "Fabricación" : "Years"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 space-y-8 pb-20">
        {/* Live Interactive Calculator for this specific Car */}
        <section className="bg-[var(--surface-elevated)] rounded-2xl shadow-sm p-4 md:p-6 border border-blue-100">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-2 border-b pb-4">
            <Calculator size={24} className="text-[var(--brand-blue)]" />
            {lang === "es"
              ? `Calculadora Exacta para ${displayName}`
              : `Exact Calculator for ${displayName}`}
          </h2>
          <p className="text-sm text-[var(--text-tertiary)] mb-6 font-medium">
            {lang === "es"
              ? "Introduce los meses que tiene el coche y el precio de compra para calcular los impuestos de matriculación al céntimo."
              : "Enter the months the car has been registered and purchase price to calculate import taxes to the cent."}
          </p>

          <Suspense
            fallback={
              <div className="p-10 text-center text-[var(--text-tertiary)]">
                Cargando calculadora...
              </div>
            }
          >
            {/* 
              TODO: HomeContent does not natively accept a 'prefilledVehicle' prop yet, 
              but it picks up from URL or local storage if we adjust it. For now, it defaults.
            */}
            <HomeContent />
          </Suspense>
        </section>

        {/* Depreciation Table Explanation */}
        <section className="bg-[var(--surface-elevated)] rounded-2xl border border-[var(--surface-border)] shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
            <TrendingDown size={22} className="text-amber-600" />
            {lang === "es"
              ? `Proyección de Depreciación BOE: ${displayName}`
              : `BOE Depreciation Table: ${displayName}`}
          </h2>
          <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
            {lang === "es"
              ? `Hacienda (la Agencia Tributaria) no usa el precio al que compraste el coche en Alemania para calcular los impuestos. En su lugar, toman el "Valor Oficial" de €${heroCar.value.toLocaleString()} y lo multiplican por un porcentaje de depreciación basado en la edad exacta del vehículo.`
              : `The Spanish Tax Agency does not use your actual purchase price in Germany to calculate taxes. Instead, they take the "Official BOE Value" of €${heroCar.value.toLocaleString()} and multiply it by a depreciation percentage based on the exact age of the vehicle.`}
          </p>

          <div className="overflow-x-auto rounded-xl border border-[var(--surface-border)]">
            <table className="w-full text-sm text-left">
              <thead className="bg-[var(--surface-dim)] text-[var(--text-secondary)] uppercase font-semibold text-xs border-b border-[var(--surface-border)]">
                <tr>
                  <th className="px-4 py-3 text-center">
                    {lang === "es" ? "Meses" : "Months"}
                  </th>
                  <th className="px-4 py-3 text-center">
                    {lang === "es" ? "% BOE" : "BOE %"}
                  </th>
                  <th className="px-4 py-3 text-right">
                    {lang === "es" ? "Valor Venal (Base)" : "Tax Base"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: "< 12 meses", pct: 100 },
                  { label: "12 a 23 meses", pct: 84 },
                  { label: "2 a 3 años", pct: 67 },
                  { label: "3 a 4 años", pct: 56 },
                  { label: "4 a 5 años", pct: 47 },
                  { label: "8 a 9 años", pct: 24 },
                  { label: "12+ años (Antiguos)", pct: 10 },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[var(--surface-dim)] transition-colors">
                    <td className="px-4 py-3 text-center font-medium text-[var(--text-primary)]">
                      {row.label}
                    </td>
                    <td className="px-4 py-3 text-center text-amber-600 font-bold">
                      {row.pct}%
                    </td>
                    <td className="px-4 py-3 text-right font-medium">
                      €
                      {Math.round(
                        heroCar.value * (row.pct / 100),
                      ).toLocaleString("de-DE")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
