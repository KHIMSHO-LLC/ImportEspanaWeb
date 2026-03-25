"use client";

import { useLanguage } from "@/context/LanguageContext";
import { VehicleAutocomplete } from "@/components/VehicleAutocomplete";
import { useState } from "react";
import {
  Calculator,
  Euro,
  Calendar as CalendarIcon,
  Info,
  HelpCircle,
} from "lucide-react";
import { MonthYearPicker } from "@/components/MonthYearPicker";
import { getDepreciationFactor } from "@/utils/taxCalculator";

export function BoeValuationTool() {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";

  const [vehicleData, setVehicleData] = useState<{
    value: number;
    brand?: string;
    model?: string;
    fuelType?: string;
    isManual: boolean;
    year?: number;
    co2?: number | null;
  } | null>(null);

  const [registrationDate, setRegistrationDate] = useState("");

  const originalValue = vehicleData?.value || 0;

  // Calculate specific depreciation based on the input month/year
  const percentageRetained = getDepreciationFactor(registrationDate, "new");
  const depreciatedValue = originalValue * Math.max(0, percentageRetained);

  return (
    <div className="bg-[var(--surface-elevated)] rounded-2xl shadow-lg border border-[var(--surface-border)]">
      <div className="bg-blue-600 p-6 md:p-8 text-white rounded-t-2xl">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-3">
          <Calculator size={28} />
          {lang === "es"
            ? "Calculadora Valor Venal BOE"
            : "BOE Fiscal Value Calculator"}
        </h2>
        <p className="text-blue-100 text-sm md:text-base leading-relaxed">
          {lang === "es"
            ? "El 'Valor Venal' es el precio mínimo oficial que Hacienda (la Agencia Tributaria de España) asigna a tu vehículo. Si compras o vendes un coche por debajo de este valor, Hacienda te reclamará la diferencia en impuestos. Usa esta herramienta para calcular el valor exacto de tu coche hoy."
            : "The 'Tax Base Value' (Valor Venal) is the official minimum price the Spanish Tax Agency assigns to your vehicle. If you buy or sell a car below this value, the government will claim the difference in taxes. Use this tool to calculate your car's exact legal value today."}
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Step 1: Vehicle Selection */}
        <div className="bg-[var(--surface-dim)] p-6 rounded-xl border border-[var(--surface-border)]">
          <div className="flex items-center gap-3 text-lg font-bold text-[var(--text-primary)] mb-2">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
              1
            </span>
            {lang === "es"
              ? "Selecciona el Vehículo Exacto"
              : "Select the Exact Vehicle"}
          </div>
          <p className="text-sm text-[var(--text-tertiary)] mb-6 ml-11">
            {lang === "es"
              ? "Busca la marca, modelo y motorización en la base de datos oficial del BOE. Este valor representa el precio del coche cuando era completamente nuevo antes de impuestos."
              : "Search for the make, model, and engine in the official BOE database. This value represents the car's price when it was brand new before any taxes were applied."}
          </p>
          <div className="ml-11">
            <VehicleAutocomplete
              onVehicleSelected={setVehicleData}
              initialData={null}
            />
          </div>
        </div>

        {/* Step 2: Registration Date */}
        {vehicleData && (
          <div className="bg-[var(--surface-dim)] p-6 rounded-xl border border-[var(--surface-border)] animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 text-lg font-bold text-[var(--text-primary)] mb-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                2
              </span>
              {lang === "es"
                ? "Fecha de Primera Matriculación"
                : "Date of First Registration"}
            </div>
            <p className="text-sm text-[var(--text-tertiary)] mb-6 ml-11">
              {lang === "es"
                ? "Hacienda descuenta valor a tu coche cada año que pasa. Introduce la fecha exacta (mes y año) en la que el coche se matriculó por primera vez (no importa en qué país) para calcular la depreciación oficial mensual."
                : "The Spanish Treasury discounts your car's value every passing year. Enter the exact date (month and year) the car was first registered anywhere in the world to calculate the official monthly depreciation."}
            </p>

            <div className="ml-11">
              <label className="flex items-center text-sm font-semibold text-[var(--text-secondary)] mb-2">
                <CalendarIcon size={16} className="text-blue-600 mr-2" />
                {lang === "es"
                  ? "Mes y Año de Matriculación"
                  : "Registration Month and Year"}
              </label>
              <MonthYearPicker
                value={registrationDate}
                onChange={(val) => setRegistrationDate(val)}
              />
              <div className="mt-4 p-3 bg-blue-50 text-blue-800 text-xs md:text-sm rounded-lg border border-blue-100 flex gap-2 items-start">
                <HelpCircle size={16} className="shrink-0 mt-0.5" />
                <p>
                  {lang === "es"
                    ? "Nota: Si tu coche tiene más de 12 años, Hacienda le aplica por defecto un valor residual retentivo del 10% de su valor inicial en todos los casos."
                    : "Note: If your car is more than 12 years old, the Spanish Treasury automatically applies a flat 10% residual value to it in all cases."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {vehicleData && registrationDate && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-8 pt-8 border-t border-[var(--surface-border)]">
            <div className="text-center mb-8">
              <h3 className="heading-section text-2xl text-[var(--text-primary)]">
                {lang === "es"
                  ? "Resultado: Tu Valor BOE en 2026"
                  : "Result: Your BOE Tax Base Value in 2026"}
              </h3>
              <p className="text-[var(--text-tertiary)] text-sm mt-2 max-w-2xl mx-auto">
                {lang === "es"
                  ? "A continuación puedes ver el desglose matemático de cómo la Agencia Tributaria Española calcula lo que vale tu coche hoy. Este es el valor que debes declarar obligatoriamente en tus impuestos."
                  : "Below is the mathematical breakdown of how the Spanish Tax Agency calculates what your car is worth today. This is the minimum value you must declare on your taxes to avoid fines."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Original BOE Value */}
              <div className="bg-[var(--surface-elevated)] rounded-xl p-6 text-center border-2 border-[var(--surface-border)] shadow-sm flex flex-col justify-center">
                <div className="w-12 h-12 bg-[var(--surface-dim)] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Euro size={20} className="text-[var(--text-secondary)]" />
                </div>
                <div className="text-sm font-semibold text-[var(--text-tertiary)] mb-1">
                  {lang === "es"
                    ? "Paso 1: Valor BOE (Nuevo)"
                    : "Step 1: BOE Value (New)"}
                </div>
                <div className="heading-section text-2xl text-[var(--text-primary)]">
                  €{originalValue.toLocaleString("de-DE")}
                </div>
                <div className="text-xs text-[var(--text-tertiary)] mt-2">
                  {lang === "es"
                    ? "Precio oficial base antes de impuestos"
                    : "Official base price before any taxes"}
                </div>
              </div>

              {/* Depreciation Percentage */}
              <div className="bg-[var(--surface-elevated)] rounded-xl p-6 text-center border-2 border-amber-200/50 shadow-sm flex flex-col justify-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calculator size={20} className="text-amber-600" />
                </div>
                <div className="text-sm font-semibold text-amber-700 mb-1">
                  {lang === "es"
                    ? "Paso 2: Depreciación por Edad"
                    : "Step 2: Age Depreciation Muliplier"}
                </div>
                <div className="text-3xl font-black text-amber-600">
                  × {Math.round(percentageRetained * 100)}%
                </div>
                <div className="text-xs text-amber-600/70 font-medium mt-2">
                  {lang === "es"
                    ? "Porcentaje de valor que el coche retiene hoy"
                    : "Percentage of value the car retains today"}
                </div>
              </div>

              {/* Final Fiscal Value */}
              <div className="bg-white rounded-xl p-6 text-center border-2 border-blue-500 shadow-lg flex flex-col justify-center ring-4 ring-blue-500/10 transform scale-105">
                <div className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-2">
                  {lang === "es"
                    ? "Valor Venal Definitivo"
                    : "Final Tax Base Value"}
                </div>
                <div className="text-4xl font-black text-blue-700">
                  €{depreciatedValue.toLocaleString("de-DE")}
                </div>
                <div className="text-xs font-semibold bg-blue-100 text-blue-800 py-1.5 px-3 rounded-full inline-block mx-auto mt-4">
                  {lang === "es"
                    ? "¡Este es tu resultado final!"
                    : "This is your final result!"}
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 className="font-bold text-green-900 mb-2 text-sm md:text-base">
                {lang === "es"
                  ? "¿Qué hago con este número?"
                  : "What do I do with this number?"}
              </h4>
              <ul className="text-green-800 text-sm space-y-2 list-disc list-inside">
                <li>
                  {lang === "es"
                    ? "Si vas a pagar el ITP (coche de segunda mano nacional), multiplicarás el porcentaje de tu comunidad autónoma (ej. 8% en Madrid) por este Valor Venal Definitivo."
                    : "If you are paying Transfer Tax (ITP), multiply your region's percentage (e.g. 8% in Alicante) by this Final Tax Base Value."}
                </li>
                <li>
                  {lang === "es"
                    ? "Si estás importando un coche, este número es la Base Imponible legal sobre la cual calcularás el Impuesto de Matriculación (IEDMT)."
                    : "If you are importing a car, this number is the legal Tax Base on which you will calculate the Registration Tax (IEDMT)."}
                </li>
                <li>
                  {lang === "es"
                    ? "Nunca pongas en un contrato de compra-venta un valor inferior a este. Hacienda lo rechazará automáticamente."
                    : "Never write a value lower than this on a purchase contract. The tax office will automatically reject it and fine you."}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
