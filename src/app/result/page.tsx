"use client";

import { AdBanner } from "@/components/AdBanner";
import { SidebarAd } from "@/components/SidebarAd";
import { PrintLayout } from "@/components/PrintLayout";
import { Colors } from "@/constants/Colors";
import { useLanguage } from "@/context/LanguageContext";
import { CalculationInput } from "@/types";
import { calculateImportCost } from "@/utils/taxCalculator";
import { ArrowLeft, Car, CheckCircle, Printer } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

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
    const itpRateParam = searchParams.get("itpRate");

    if (!originCountry || !officialFiscalValue) {
      // router.push("/"); // Redirect if missing params? Or just show empty state.
      return;
    }

    const calculatedInput: CalculationInput = {
      importType: searchParams.get("importType") as any,
      originCountry,
      carPrice,
      officialFiscalValue,
      carAge,
      co2Emissions,
      sellerType,
      transportCost: parseFloat(searchParams.get("transportCost") || "0"),
      customsAgentFee: searchParams.get("importType") === "NonEU" ? 200 : 0, // Estimate
      needsHomologation: searchParams.get("needsHomologation") === "true",
      itpRate: itpRateParam ? parseFloat(itpRateParam) : undefined,
      brand: brand || undefined,
      model: model || undefined,
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
    <>
      <PrintLayout result={result} input={input} />
      <div className="w-full p-3 md:p-4 print:hidden">
        <AdBanner
          dataAdSlot="8470582888"
          dataAdFormat="horizontal"
          dataFullWidthResponsive={true}
          className="print:hidden"
        />

        <button
          onClick={() => router.push(`/?${searchParams.toString()}`)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-4 md:mb-6 transition-colors print:hidden"
        >
          <ArrowLeft size={20} />
          {t("backToSearch")}
        </button>

        {/* Force a 2-column grid for print with reduced gap */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 print:grid-cols-2 print:gap-4 print:items-start">
          {/* Left Col: Main Result */}
          <div className="space-y-6 print:space-y-3">
            <div className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl md:rounded-3xl p-5 md:p-8 text-white shadow-xl print:bg-blue-600 print:text-white print:p-4 print:shadow-none print:border print:border-blue-600 print:rounded-lg">
              <h2 className="text-blue-100 font-semibold tracking-wider text-sm uppercase mb-2 print:text-white print:mb-1 print:text-xs">
                {t("estimatedTotal")}
              </h2>
              <div className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 print:text-3xl print:mb-1">
                {result.totalCost.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </div>
              <p className="text-blue-100 text-sm opacity-90 print:text-white print:text-xs">
                {t("includes")}
              </p>

              {isElectric && (
                <div className="mt-6 inline-flex items-center gap-2 bg-green-500/20 border border-green-400/50 px-4 py-2 rounded-full backdrop-blur-sm print:mt-2 print:border-white print:text-white print:px-2 print:py-0.5">
                  <CheckCircle
                    size={16}
                    className="text-green-300 print:text-white print:w-3 print:h-3"
                  />
                  <span className="text-green-50 font-medium text-sm print:text-white print:text-xs">
                    {t("evDetected")}
                  </span>
                </div>
              )}
            </div>

            <AdBanner
              dataAdSlot="5939896116"
              dataAdFormat="horizontal"
              dataFullWidthResponsive={true}
              className="print:hidden"
            />

            {/* Vehicle Info Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm print:shadow-none print:border-gray-200 print:p-4 print:rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 print:mb-2 print:text-base">
                <Car
                  size={20}
                  className="text-blue-600 print:text-black print:w-5 print:h-5"
                />
                {t("vehicleSearch")}
              </h3>
              <div className="space-y-3 text-sm print:space-y-2 print:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 print:text-gray-900">
                    {t("brand")}/{t("model")}
                  </span>
                  <span className="font-medium text-gray-900">
                    {searchParams.get("brand")} {searchParams.get("model")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 print:text-gray-900">
                    {t("originCountry")}
                  </span>
                  <span className="font-medium text-gray-900">
                    {input.originCountry}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 print:text-gray-900">
                    {t("co2")}
                  </span>
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

          {/* Mobile In-Feed Ad */}
          <div className="md:hidden print:hidden">
            <AdBanner
              dataAdSlot="2048644761"
              dataAdFormat="rectangle"
              dataFullWidthResponsive={true}
            />
          </div>

          {/* Right Col: Breakdown */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg border border-gray-100 h-fit print:shadow-none print:border-gray-200 print:rounded-lg print:p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6 print:mb-2 print:text-base">
              💶 {t("breakdown")}
            </h3>

            <div className="space-y-4 print:space-y-2">
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

              <div className="h-px bg-gray-200 my-4 print:my-3" />

              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 print:mb-2 print:text-black">
                {t("taxesFees")}
              </h4>

              <Row
                label={t("registrationTax")}
                value={result.registrationTax}
                color="text-blue-600 print:text-black"
                bold
              />

              {result.duty > 0 && (
                <Row
                  label={t("duty")}
                  value={result.duty}
                  color="text-red-600 print:text-black"
                />
              )}

              {result.vat > 0 && (
                <Row
                  label={t("vat")}
                  value={result.vat}
                  color="text-red-600 print:text-black"
                />
              )}

              {result.customsAgentFee > 0 && (
                <Row
                  label={t("customsAgent")}
                  value={result.customsAgentFee}
                  color="text-gray-600 print:text-black"
                />
              )}

              {result.homologationFee > 0 && (
                <Row
                  label={t("homologation")}
                  value={result.homologationFee}
                  color="text-orange-600 print:text-black"
                />
              )}

              {result.itpTax > 0 && (
                <Row
                  label={t("itp")}
                  value={result.itpTax}
                  color="text-blue-600 print:text-black"
                />
              )}

              <Row
                label={t("dgt")}
                value={result.dgtFee}
                color="text-gray-600 print:text-black"
              />
              <Row
                label={t("itv")}
                value={result.itvFee}
                color="text-gray-600 print:text-black"
              />
              <Row
                label={t("plates")}
                value={result.platesFee}
                color="text-gray-600 print:text-black"
              />

              <div className="h-px bg-gray-200 my-6 print:my-4" />

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900 print:text-lg">
                  {t("totalImportCost")}
                </span>
                <span className="text-xl font-bold text-blue-700 print:text-black print:text-xl">
                  {(result.totalCost - input.carPrice).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </span>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-4 text-xs text-gray-500 space-y-2 print:mt-4 print:bg-gray-100 print:text-black print:p-4">
              <div className="flex justify-between">
                <span>{t("depreciation")}</span>
                <span className="font-medium">
                  {((1 - result.depreciationPercentage) * 100).toFixed(0)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>{t("taxBase")}</span>
                <span className="font-medium">
                  {result.taxBase.toFixed(0)}€
                </span>
              </div>
              <div className="flex justify-between">
                <span>{t("taxRate")}</span>
                <span className="font-medium">
                  {(result.taxRateApplied * 100).toFixed(2)}%
                </span>
              </div>
            </div>

            <AdBanner
              dataAdSlot="5089848873"
              dataAdFormat="rectangle"
              dataFullWidthResponsive={true}
              className="print:hidden"
            />
          </div>
        </div>
      </div>
    </>
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
    <main className="min-h-screen bg-gray-50 flex justify-center items-start gap-6 max-w-[1600px] mx-auto px-4 mt-6 print:block print:min-h-0 print:m-0 print:p-0 print:max-w-none">
      <SidebarAd side="left" />

      <div className="flex-1 w-full max-w-4xl print:max-w-none print:w-full">
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <ResultContent />
        </Suspense>
      </div>

      <SidebarAd side="right" />
    </main>
  );
}
