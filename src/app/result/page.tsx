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
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-[var(--brand-blue)] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-[var(--text-tertiary)]">Calculating...</span>
        </div>
      </div>
    );
  }

  const isElectric = input.co2Emissions === 0;

  return (
    <>
      <PrintLayout result={result} input={input} />
      <div className="w-full print:hidden space-y-6">
        <AdBanner
          dataAdSlot="8470582888"
          dataAdFormat="horizontal"
          dataFullWidthResponsive={true}
          className="print:hidden"
        />

        {/* Back button — minimal */}
        <button
          onClick={() => router.push(`/?${searchParams.toString()}`)}
          className="flex items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--brand-blue)] text-sm font-medium transition-colors duration-200 print:hidden"
        >
          <ArrowLeft size={16} />
          {t("backToSearch")}
        </button>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 print:grid-cols-2 print:gap-4 print:items-start">
          {/* Left Col: The Hero Number */}
          <div className="space-y-6 print:space-y-3">
            {/* Total Cost Card — the showstopper */}
            <div className="card-hero p-6 md:p-10 animate-fadeInUp">
              <div className="relative z-10">
                <div className="label-caps text-white/60 mb-3 print:text-white print:mb-1 print:text-xs">
                  {t("estimatedTotal")}
                </div>
                <div className="number-display text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 animate-countUp print:text-3xl print:mb-1">
                  {result.totalCost.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </div>
                <p className="text-white/50 text-sm print:text-white print:text-xs">
                  {t("includes")}
                </p>

                {isElectric && (
                  <div className="mt-6 inline-flex items-center gap-2 bg-emerald-400/15 border border-emerald-400/30 px-4 py-2 rounded-full print:mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-200 font-medium text-sm print:text-white print:text-xs">
                      {t("evDetected")}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <AdBanner
              dataAdSlot="5939896116"
              dataAdFormat="horizontal"
              dataFullWidthResponsive={true}
              className="print:hidden"
            />

            {/* Vehicle Info Card */}
            <div className="card p-5 md:p-6 animate-fadeInUp stagger-2 print:shadow-none print:border-gray-200 print:p-4 print:rounded-lg">
              <h3 className="label-caps mb-4 flex items-center gap-2 print:mb-2">
                <Car size={14} className="text-[var(--brand-blue)]" />
                {t("vehicleSearch")}
              </h3>
              <div className="space-y-3 text-sm print:space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-tertiary)]">
                    {t("brand")}/{t("model")}
                  </span>
                  <span className="font-semibold text-[var(--text-primary)]">
                    {searchParams.get("brand")} {searchParams.get("model")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-tertiary)]">
                    {t("originCountry")}
                  </span>
                  <span className="font-semibold text-[var(--text-primary)]">
                    {input.originCountry}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-tertiary)]">
                    {t("co2")}
                  </span>
                  <span className="number-display font-semibold text-[var(--text-primary)]">
                    {input.co2Emissions} g/km
                  </span>
                </div>
              </div>
            </div>

            {/* Print button */}
            <div className="print:hidden">
              <button
                onClick={() => window.print()}
                className="btn-secondary w-full sm:w-auto gap-2"
              >
                <Printer size={16} />
                {t("printResult")}
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
          <div className="card-elevated p-5 md:p-8 h-fit animate-fadeInUp stagger-3 print:shadow-none print:border-gray-200 print:rounded-lg print:p-4">
            <h3 className="heading-section text-lg text-[var(--text-primary)] mb-6 print:mb-2 print:text-base">
              {t("breakdown")}
            </h3>

            <div className="space-y-3 print:space-y-2">
              <Row label={t("carPrice")} value={input.carPrice} />
              <Row label={t("transport")} value={result.transportCost} />

              <div className="divider" />

              <div className="label-caps mb-3 print:mb-2">
                {t("taxesFees")}
              </div>

              <Row
                label={t("registrationTax")}
                value={result.registrationTax}
                accent
                bold
              />

              {result.duty > 0 && (
                <Row label={t("duty")} value={result.duty} accent />
              )}

              {result.vat > 0 && (
                <Row label={t("vat")} value={result.vat} accent />
              )}

              {result.customsAgentFee > 0 && (
                <Row label={t("customsAgent")} value={result.customsAgentFee} />
              )}

              {result.homologationFee > 0 && (
                <Row label={t("homologation")} value={result.homologationFee} />
              )}

              {result.itpTax > 0 && (
                <Row label={t("itp")} value={result.itpTax} accent />
              )}

              <Row label={t("dgt")} value={result.dgtFee} />
              <Row label={t("itv")} value={result.itvFee} />
              <Row label={t("plates")} value={result.platesFee} />

              <div className="h-px bg-[var(--surface-border)] my-6 print:my-4" />

              {/* Grand total row */}
              <div className="flex justify-between items-center">
                <span className="text-base font-bold text-[var(--text-primary)]">
                  {t("totalImportCost")}
                </span>
                <span className="number-display text-xl font-bold text-[var(--brand-blue)] print:text-black">
                  {(result.totalCost - input.carPrice).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </span>
              </div>
            </div>

            {/* Technical details */}
            <div className="mt-8 p-4 rounded-xl bg-[var(--surface-dim)] border border-[var(--surface-border)] space-y-2 print:mt-4 print:p-4">
              <div className="flex justify-between text-xs">
                <span className="text-[var(--text-tertiary)]">{t("residualValue")}</span>
                <span className="number-display font-medium text-[var(--text-secondary)]">
                  {(result.depreciationPercentage * 100).toFixed(0)}%
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[var(--text-tertiary)]">{t("taxBase")}</span>
                <span className="number-display font-medium text-[var(--text-secondary)]">
                  {result.taxBase.toFixed(0)}€
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[var(--text-tertiary)]">{t("taxRate")}</span>
                <span className="number-display font-medium text-[var(--text-secondary)]">
                  {(result.taxRateApplied * 100).toFixed(2)}%
                </span>
              </div>
            </div>

            <AdBanner
              dataAdSlot="5089848873"
              dataAdFormat="rectangle"
              dataFullWidthResponsive={true}
              className="print:hidden mt-6"
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
  bold,
  accent,
}: {
  label: string;
  value: number;
  bold?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex justify-between items-center text-sm py-0.5">
      <span className={`text-[var(--text-secondary)] ${bold ? "font-semibold text-[var(--text-primary)]" : ""}`}>
        {label}
      </span>
      <span className={`number-display ${accent ? "text-[var(--brand-blue)]" : "text-[var(--text-primary)]"} ${bold ? "font-bold" : "font-medium"}`}>
        {value.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}
      </span>
    </div>
  );
}

export default function ResultPage() {
  return (
    <main className="min-h-screen flex justify-center items-start gap-8 max-w-[1600px] mx-auto px-4 md:px-8 mt-6 pb-20 print:block print:min-h-0 print:m-0 print:p-0 print:max-w-none" style={{ background: 'var(--background)' }}>
      <SidebarAd side="left" />

      <div className="flex-1 w-full max-w-4xl print:max-w-none print:w-full">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-[var(--brand-blue)] border-t-transparent rounded-full animate-spin" />
                <span className="text-sm text-[var(--text-tertiary)]">Loading...</span>
              </div>
            </div>
          }
        >
          <ResultContent />
        </Suspense>
      </div>

      <SidebarAd side="right" />
    </main>
  );
}
