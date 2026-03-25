"use client";

import { AdBanner } from "@/components/AdBanner";
import { SidebarAd } from "@/components/SidebarAd";
import { PrintLayout } from "@/components/PrintLayout";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useLanguage } from "@/context/LanguageContext";
import { CalculationInput } from "@/types";
import { calculateImportCost } from "@/utils/taxCalculator";
import { ArrowLeft, Car, CheckCircle, ChevronDown, ChevronUp, Copy, Printer, Info } from "lucide-react";
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

  const [showCalcDetails, setShowCalcDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  if (!result || !input) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-[var(--brand-blue)] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-[var(--text-tertiary)]">{t("calculating")}</span>
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

            {/* Action buttons */}
            <div className="print:hidden flex flex-wrap gap-2">
              <button
                onClick={() => window.print()}
                className="btn-secondary flex items-center gap-2"
              >
                <Printer size={16} />
                {t("printResult")}
              </button>
              <button
                onClick={handleShare}
                className="btn-secondary flex items-center gap-2"
              >
                <Copy size={16} />
                {copied ? t("copied") : t("shareResult")}
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

        {/* "How we calculated this" expandable */}
        <div className="card p-5 print:hidden animate-fadeInUp">
          <button
            onClick={() => setShowCalcDetails(!showCalcDetails)}
            className="w-full flex items-center justify-between text-left"
          >
            <span className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Info size={16} className="text-[var(--brand-blue)]" />
              {t("howWeCalculated")}
            </span>
            {showCalcDetails ? (
              <ChevronUp size={16} className="text-[var(--text-tertiary)]" />
            ) : (
              <ChevronDown size={16} className="text-[var(--text-tertiary)]" />
            )}
          </button>
          {showCalcDetails && (
            <div className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
              <p>
                <strong className="text-[var(--text-primary)]">
                  {language === "de" ? "Zulassungssteuer (IEDMT):" : language === "fr" ? "Taxe d'immatriculation (IEDMT) :" : language === "ru" ? "Налог на регистрацию (IEDMT):" : "Impuesto de Matriculación (IEDMT):"}
                </strong>{" "}
                {language === "de"
                  ? `Berechnet durch Anwendung des CO₂-Steuersatzes (${input.co2Emissions} g/km → ${(result.taxRateApplied * 100).toFixed(2)}%) auf den abgeschriebenen Steuerwert (${(result.depreciationPercentage * 100).toFixed(0)}% von ${result.taxBase > 0 ? (result.taxBase / result.depreciationPercentage).toFixed(0) : "—"} €).`
                  : language === "fr"
                  ? `Calculé en appliquant le taux CO₂ (${input.co2Emissions} g/km → ${(result.taxRateApplied * 100).toFixed(2)}%) sur la valeur fiscale dépréciée (${(result.depreciationPercentage * 100).toFixed(0)}% de ${result.taxBase > 0 ? (result.taxBase / result.depreciationPercentage).toFixed(0) : "—"} €).`
                  : language === "ru"
                  ? `Рассчитывается путём применения ставки CO₂ (${input.co2Emissions} г/км → ${(result.taxRateApplied * 100).toFixed(2)}%) к амортизированной стоимости (${(result.depreciationPercentage * 100).toFixed(0)}% от ${result.taxBase > 0 ? (result.taxBase / result.depreciationPercentage).toFixed(0) : "—"} €).`
                  : language === "en"
                  ? `Calculated by applying the CO₂ tax rate (${input.co2Emissions} g/km → ${(result.taxRateApplied * 100).toFixed(2)}%) to the depreciated BOE fiscal value (${(result.depreciationPercentage * 100).toFixed(0)}% of ${result.taxBase > 0 ? (result.taxBase / result.depreciationPercentage).toFixed(0) : "—"} €).`
                  : `Se calcula aplicando el tipo impositivo según las emisiones CO₂ (${input.co2Emissions} g/km → ${(result.taxRateApplied * 100).toFixed(2)}%) sobre el valor fiscal del BOE depreciado (${(result.depreciationPercentage * 100).toFixed(0)}% de ${result.taxBase > 0 ? (result.taxBase / result.depreciationPercentage).toFixed(0) : "—"} €).`}
              </p>
              {result.itpTax > 0 && (
                <p>
                  <strong className="text-[var(--text-primary)]">ITP:</strong>{" "}
                  {language === "de"
                    ? "Grunderwerbsteuer bei Kauf von Privatperson. Berechnet auf den BOE-Steuerwert nach dem Satz der autonomen Gemeinschaft."
                    : language === "fr"
                    ? "Taxe de transfert de propriété pour achat auprès d'un particulier. Calculée sur la valeur fiscale BOE selon le taux de la communauté autonome."
                    : language === "ru"
                    ? "Налог на передачу имущества при покупке у частного лица. Рассчитывается на основе фискальной стоимости BOE по ставке автономного сообщества."
                    : language === "en"
                    ? "Transfer tax applied when buying from a private seller. Calculated on the BOE fiscal value at your autonomous community's rate."
                    : "Impuesto de Transmisiones Patrimoniales aplicado por comprar a un particular. Se calcula sobre el valor fiscal BOE según el tipo de tu comunidad autónoma."}
                </p>
              )}
              {result.duty > 0 && (
                <p>
                  <strong className="text-[var(--text-primary)]">
                    {language === "de" ? "Zoll:" : language === "fr" ? "Droits de douane :" : language === "ru" ? "Таможенная пошлина:" : language === "en" ? "Customs duty:" : "Arancel aduanero:"}
                  </strong>{" "}
                  {language === "de"
                    ? "10% des CIF-Werts (Preis + Transport + Versicherung) für Fahrzeuge aus Drittländern (allgemeiner EU-Zolltarif, TARIC 8703)."
                    : language === "fr"
                    ? "10% de la valeur CIF (prix + transport + assurance) pour les véhicules hors UE (tarif douanier UE général, TARIC 8703)."
                    : language === "ru"
                    ? "10% от стоимости CIF (цена + доставка + страховка) для автомобилей из третьих стран (общий тариф ЕС, TARIC 8703)."
                    : language === "en"
                    ? "10% of CIF value (price + transport + insurance) for non-EU vehicles (general EU customs tariff, TARIC 8703)."
                    : "10% del valor CIF (precio + transporte + seguro) por ser un vehículo de origen no comunitario (arancel general UE, TARIC 8703)."}
                </p>
              )}
              {result.vat > 0 && (
                <p>
                  <strong className="text-[var(--text-primary)]">
                    {language === "de" ? "Einfuhr-MwSt.:" : language === "fr" ? "TVA d'importation :" : language === "ru" ? "НДС на импорт:" : language === "en" ? "Import VAT:" : "IVA de importación:"}
                  </strong>{" "}
                  {language === "de"
                    ? "21% auf den CIF-Wert plus Zoll. Gilt für Fahrzeuge außerhalb der EU."
                    : language === "fr"
                    ? "21% sur la valeur CIF plus les droits de douane. S'applique aux véhicules hors UE."
                    : language === "ru"
                    ? "21% от стоимости CIF плюс таможенная пошлина. Применяется к автомобилям из-за пределов ЕС."
                    : language === "en"
                    ? "21% on the CIF value plus customs duty. Applies to vehicles imported from outside the EU."
                    : "21% sobre el valor CIF más el arancel. Aplica para vehículos importados de fuera de la UE."}
                </p>
              )}
              <p className="text-xs text-[var(--text-tertiary)]">
                {t("calcSource")}{" "}
                <a href="/metodologia" className="text-[var(--brand-blue)] hover:underline">
                  {t("seeMethodology")}
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Lead capture form */}
        <div className="print:hidden">
          <LeadCaptureForm
            vehicleContext={{
              brand: searchParams.get("brand") ?? undefined,
              model: searchParams.get("model") ?? undefined,
              price: searchParams.get("carPrice") ?? undefined,
              totalCost: result ? result.totalCost.toFixed(0) : undefined,
              originCountry: searchParams.get("originCountry") ?? undefined,
            }}
          />
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
    <main className="min-h-screen flex justify-center items-start gap-8 max-w-[1600px] mx-auto px-4 md:px-8 mt-6 pb-20 print:block print:min-h-0 print:m-0 print:p-0 print:max-w-none">
      <SidebarAd side="left" />

      <div className="flex-1 w-full max-w-4xl print:max-w-none print:w-full">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-[var(--brand-blue)] border-t-transparent rounded-full animate-spin" />
                <span className="text-sm text-[var(--text-tertiary)]">…</span>
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
