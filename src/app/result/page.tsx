"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CalculationInput } from "@/types";
import { calculateImportCost } from "@/utils/taxCalculator";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ArrowLeft, Printer, Car, CheckCircle } from "lucide-react";
import { Colors } from "@/constants/Colors";

function ResultContent() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const router = useRouter();
  const [result, setResult] = useState<any>(null);
  const [input, setInput] = useState<CalculationInput | null>(null);

  useEffect(() => {
    const originCountry = searchParams.get("originCountry") as any;
    const carPrice = parseFloat(searchParams.get("carPrice") || "0");
    const officialFiscalValue = parseFloat(
      searchParams.get("officialFiscalValue") || "0",
    );
    const carAge = searchParams.get("carAge") as any;
    const co2Emissions = parseFloat(searchParams.get("co2Emissions") || "0");
    const sellerType = searchParams.get("sellerType") as any;
    const brand = searchParams.get("brand");
    const model = searchParams.get("model");

    if (!originCountry || !officialFiscalValue) {
      // router.push("/"); // Redirect if missing params? Or just show empty state.
      return;
    }

    const calculatedInput: CalculationInput = {
      originCountry,
      carPrice,
      officialFiscalValue,
      carAge,
      co2Emissions,
      sellerType,
    };

    const res = calculateImportCost(calculatedInput);
    setResult(res);
    setInput(calculatedInput);
  }, [searchParams]);

  if (!result || !input) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const isElectric = input.co2Emissions === 0;

  return (
    <div className="max-w-4xl mx-auto p-4 md:py-10">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors print:hidden"
      >
        <ArrowLeft size={20} />
        {t("backToSearch")}
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Col: Main Result */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-3xl p-8 text-white shadow-xl print:bg-blue-600 print:text-white">
            <h2 className="text-blue-100 font-semibold tracking-wider text-sm uppercase mb-2">
              {t("estimatedTotal")}
            </h2>
            <div className="text-5xl font-bold mb-4">
              {result.totalCost.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
            </div>
            <p className="text-blue-100 text-sm opacity-90">{t("includes")}</p>

            {isElectric && (
              <div className="mt-6 inline-flex items-center gap-2 bg-green-500/20 border border-green-400/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle size={16} className="text-green-300" />
                <span className="text-green-50 font-medium text-sm">
                  {t("evDetected")}
                </span>
              </div>
            )}
          </div>

          {/* Vehicle Info Card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Car size={20} className="text-blue-600" />
              {t("vehicleSearch")}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {t("brand")}/{t("model")}
                </span>
                <span className="font-medium text-gray-900">
                  {searchParams.get("brand")} {searchParams.get("model")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{t("originCountry")}</span>
                <span className="font-medium text-gray-900">
                  {input.originCountry}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{t("co2")}</span>
                <span className="font-medium text-gray-900">
                  {input.co2Emissions} g/km
                </span>
              </div>
            </div>
          </div>

          <div className="text-center print:hidden">
            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5"
            >
              <Printer size={20} />
              Print Result / Guardar PDF
            </button>
          </div>
        </div>

        {/* Right Col: Breakdown */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-fit">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            💶 {t("breakdown")}
          </h3>

          <div className="space-y-4">
            <Row
              label={t("carPrice")}
              value={input.carPrice}
              color="text-gray-900"
            />
            <Row
              label="Transport"
              value={result.transportCost}
              color="text-gray-900"
            />

            <div className="h-px bg-gray-200 my-4" />

            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              {t("taxesFees")}
            </h4>

            <Row
              label={t("registrationTax")}
              value={result.registrationTax}
              color="text-blue-600"
              bold
            />

            {result.itpTax > 0 && (
              <Row
                label={t("itp")}
                value={result.itpTax}
                color="text-blue-600"
              />
            )}

            <Row label={t("dgt")} value={result.dgtFee} color="text-gray-600" />
            <Row label={t("itv")} value={result.itvFee} color="text-gray-600" />
            <Row
              label={t("plates")}
              value={result.platesFee}
              color="text-gray-600"
            />

            <div className="h-px bg-gray-200 my-6" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">
                {t("totalImportCost")}
              </span>
              <span className="text-xl font-bold text-blue-700">
                {(result.totalCost - input.carPrice).toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </span>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-xl p-4 text-xs text-gray-500 space-y-2">
            <div className="flex justify-between">
              <span>{t("depreciation")}</span>
              <span className="font-medium">
                {((1 - result.depreciationPercentage) * 100).toFixed(0)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span>{t("taxBase")}</span>
              <span className="font-medium">{result.taxBase.toFixed(0)}€</span>
            </div>
            <div className="flex justify-between">
              <span>{t("taxRate")}</span>
              <span className="font-medium">
                {(result.taxRateApplied * 100).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  color,
  bold,
}: {
  label: string;
  value: number;
  color: string;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className={`text-gray-600 ${bold ? "font-semibold" : ""}`}>
        {label}
      </span>
      <span className={`${color} ${bold ? "font-bold" : "font-medium"}`}>
        {value.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}
      </span>
    </div>
  );
}

export default function ResultPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <ResultContent />
      </Suspense>
    </main>
  );
}
