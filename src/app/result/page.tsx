"use client";

import { AdBanner } from "@/components/AdBanner";
import { SidebarAd } from "@/components/SidebarAd";
import { PrintLayout } from "@/components/PrintLayout";
import { useLanguage } from "@/context/LanguageContext";
import { CalculationInput } from "@/types";
import { calculateImportCost } from "@/utils/taxCalculator";
import { 
  ArrowLeft, 
  Car, 
  CheckCircle, 
  Printer, 
  FileText,
  Download,
  Share2,
  Calculator,
  TrendingUp,
  Info,
  Zap
} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function ResultContent() {
  const searchParams = useSearchParams();
  const { t, language } = useLanguage();
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
      transportCost: searchParams.get("transportCost")
        ? parseFloat(searchParams.get("transportCost")!)
        : undefined,
      customsAgentFee: searchParams.get("importType") === "NonEU" ? 200 : 0,
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-2 border-[#00d4aa] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#6b6b7a] text-sm">Calculando tu importación...</p>
      </div>
    );
  }

  const isElectric = input.co2Emissions === 0;
  const totalImportFees = result.totalCost - input.carPrice;

  return (
    <>
      <PrintLayout result={result} input={input} />
      
      <div className="w-full print:hidden">
        {/* Top Ad */}
        <AdBanner
          dataAdSlot="8470582888"
          dataAdFormat="horizontal"
          dataFullWidthResponsive={true}
          variant="inline"
        />

        {/* Back Button */}
        <button
          onClick={() => router.push(`/?${searchParams.toString()}`)}
          className="flex items-center gap-2 text-[#6b6b7a] hover:text-[#f5f5f7] mb-6 transition-colors group"
        >
          <div className="w-8 h-8 bg-[#13131a] border border-[#2a2a3a] rounded flex items-center justify-center group-hover:border-[#3a3a4a] transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium">{t("backToSearch")}</span>
        </button>

        {/* Build Sheet Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded flex items-center justify-center">
              <FileText size={24} className="text-[#00d4aa]" />
            </div>
            <div>
              <h1 className="text-headline text-[#f5f5f7]">
                {language === "es" ? "Hoja de importación" : "Import Build Sheet"}
              </h1>
              <p className="text-small text-[#6b6b7a]">
                {language === "es" 
                  ? `Generado el ${new Date().toLocaleDateString("es-ES")}` 
                  : `Generated ${new Date().toLocaleDateString("en-US")}`}
              </p>
            </div>
          </div>
        </div>

        {/* Main Result Card */}
        <div className="bg-[#00d4aa]/5 border border-[#00d4aa]/20 rounded-lg p-6 md:p-8 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4aa]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-micro text-[#00d4aa]">
                {language === "es" ? "COSTE TOTAL ESTIMADO" : "ESTIMATED TOTAL COST"}
              </span>
              {isElectric && <Zap size={14} className="text-[#00d4aa]" />}
            </div>
            
            <div className="text-mega text-[#f5f5f7] mb-2">
              {result.totalCost.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
            </div>
            
            <p className="text-small text-[#6b6b7a] mb-4">
              {language === "es" 
                ? `Incluye coche (${input.carPrice.toLocaleString("de-DE")}€) + impuestos y tasas` 
                : `Includes car (${input.carPrice.toLocaleString("de-DE")}€) + taxes & fees`}
            </p>

            {isElectric && (
              <div className="inline-flex items-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded px-3 py-1.5">
                <CheckCircle size={14} className="text-[#00d4aa]" />
                <span className="text-xs text-[#00d4aa] font-medium">
                  {t("evDetected")} — Exento de impuesto de matriculación
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => window.print()}
            className="btn-secondary flex items-center gap-2"
          >
            <Printer size={16} />
            {language === "es" ? "Imprimir" : "Print"}
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'ImportEspana - Calculadora',
                  text: `Coste total de importación: ${result.totalCost.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}`,
                  url: window.location.href,
                });
              }
            }}
            className="btn-secondary flex items-center gap-2"
          >
            <Share2 size={16} />
            {language === "es" ? "Compartir" : "Share"}
          </button>
        </div>

        {/* Vehicle Info Card */}
        <div className="bg-[#13131a] border border-[#2a2a3a] rounded-lg p-6 mb-6">
          <h3 className="text-title text-[#f5f5f7] mb-4 flex items-center gap-2">
            <Car size={18} className="text-[#00d4aa]" />
            {t("vehicleSearch")}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-[#1a1a24] rounded border border-[#2a2a3a]">
              <span className="text-micro text-[#6b6b7a] block mb-1">{t("brand")}/{t("model")}</span>
              <span className="text-body text-[#f5f5f7]">
                {searchParams.get("brand") || "—"} {searchParams.get("model") || ""}
              </span>
            </div>
            <div className="p-3 bg-[#1a1a24] rounded border border-[#2a2a3a]">
              <span className="text-micro text-[#6b6b7a] block mb-1">{t("originCountry")}</span>
              <span className="text-body text-[#f5f5f7]">{input.originCountry}</span>
            </div>
            <div className="p-3 bg-[#1a1a24] rounded border border-[#2a2a3a]">
              <span className="text-micro text-[#6b6b7a] block mb-1">{t("co2")}</span>
              <span className="text-mono text-[#f5f5f7]">{input.co2Emissions} g/km</span>
            </div>
            <div className="p-3 bg-[#1a1a24] rounded border border-[#2a2a3a]">
              <span className="text-micro text-[#6b6b7a] block mb-1">{t("carPrice")}</span>
              <span className="text-mono text-[#f5f5f7]">
                {input.carPrice.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}
              </span>
            </div>
          </div>
        </div>

        {/* Inline Ad */}
        <AdBanner
          dataAdSlot="5939896116"
          dataAdFormat="horizontal"
          dataFullWidthResponsive={true}
          variant="inline"
        />

        {/* Cost Breakdown */}
        <div className="bg-[#13131a] border border-[#2a2a3a] rounded-lg overflow-hidden mb-6">
          {/* Header */}
          <div className="bg-[#1a1a24] px-6 py-4 border-b border-[#2a2a3a]">
            <h3 className="text-title text-[#f5f5f7] flex items-center gap-2">
              <Calculator size={18} className="text-[#00d4aa]" />
              {t("breakdown")}
            </h3>
          </div>

          <div className="p-6">
            {/* Base Costs */}
            <div className="space-y-3 mb-6">
              <Row label={t("carPrice")} value={input.carPrice} type="base" />
              <Row label={t("transport")} value={result.transportCost} type="base" />
            </div>

            <div className="h-px bg-[#2a2a3a] mb-6"></div>

            {/* Taxes & Fees */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-micro text-[#6b6b7a]">{t("taxesFees")}</span>
              </div>

              <Row
                label={t("registrationTax")}
                value={result.registrationTax}
                type="tax"
                highlight={!isElectric}
              />

              {result.duty > 0 && (
                <Row label={t("duty")} value={result.duty} type="tax" />
              )}

              {result.vat > 0 && (
                <Row label={t("vat")} value={result.vat} type="tax" />
              )}

              {result.customsAgentFee > 0 && (
                <Row label={t("customsAgent")} value={result.customsAgentFee} type="fee" />
              )}

              {result.homologationFee > 0 && (
                <Row label={t("homologation")} value={result.homologationFee} type="fee" />
              )}

              {result.itpTax > 0 && (
                <Row label={t("itp")} value={result.itpTax} type="tax" highlight />
              )}

              <Row label={t("dgt")} value={result.dgtFee} type="fee" />
              <Row label={t("itv")} value={result.itvFee} type="fee" />
              <Row label={t("plates")} value={result.platesFee} type="fee" />
            </div>

            <div className="h-px bg-[#2a2a3a] mb-6"></div>

            {/* Total Fees */}
            <div className="flex justify-between items-center p-4 bg-[#1a1a24] rounded border border-[#2a2a3a]">
              <span className="text-body text-[#8b8b9a]">{t("totalImportCost")}</span>
              <span className="text-mono-lg text-[#00d4aa]">
                {totalImportFees.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Calculation Details */}
        <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Info size={16} className="text-[#6b6b7a]" />
            <span className="text-micro text-[#6b6b7a]">
              {language === "es" ? "DETALLES DEL CÁLCULO" : "CALCULATION DETAILS"}
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <span className="text-mono text-[#f5f5f7] block mb-1">
                {(result.depreciationPercentage * 100).toFixed(0)}%
              </span>
              <span className="text-[10px] text-[#6b6b7a] uppercase tracking-wider">
                {t("residualValue")}
              </span>
            </div>
            <div className="text-center">
              <span className="text-mono text-[#f5f5f7] block mb-1">
                {result.taxBase.toFixed(0)}€
              </span>
              <span className="text-[10px] text-[#6b6b7a] uppercase tracking-wider">
                {t("taxBase")}
              </span>
            </div>
            <div className="text-center">
              <span className="text-mono text-[#f5f5f7] block mb-1">
                {(result.taxRateApplied * 100).toFixed(2)}%
              </span>
              <span className="text-[10px] text-[#6b6b7a] uppercase tracking-wider">
                {t("taxRate")}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Ad */}
        <AdBanner
          dataAdSlot="5089848873"
          dataAdFormat="rectangle"
          dataFullWidthResponsive={true}
          variant="inline"
        />
      </div>
    </>
  );
}

function Row({
  label,
  value,
  type = "base",
  highlight = false,
}: {
  label: string;
  value: number;
  type?: "base" | "tax" | "fee";
  highlight?: boolean;
}) {
  const typeStyles = {
    base: "text-[#8b8b9a]",
    tax: highlight ? "text-[#ffd700]" : "text-[#ff4d4d]",
    fee: "text-[#8b8b9a]",
  };

  return (
    <div className="flex justify-between items-center py-2">
      <span className={`text-sm ${typeStyles[type]}`}>{label}</span>
      <span className={`text-mono text-[#f5f5f7] ${highlight ? "font-semibold" : ""}`}>
        {value.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}
      </span>
    </div>
  );
}

export default function ResultPage() {
  return (
    <main className="min-h-screen flex justify-center items-start gap-6 max-w-7xl mx-auto px-4 pt-6 print:block print:min-h-0 print:m-0 print:p-0 print:max-w-none">
      <SidebarAd side="left" />

      <div className="flex-1 w-full max-w-2xl print:max-w-none print:w-full">
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#00d4aa] border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <ResultContent />
        </Suspense>
      </div>

      <SidebarAd side="right" />
    </main>
  );
}
