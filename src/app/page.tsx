"use client";

import { AdBanner } from "@/components/AdBanner";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SidebarAd } from "@/components/SidebarAd";
import { StickyAdFooter } from "@/components/StickyAdFooter";

import { VehicleAutocomplete } from "@/components/VehicleAutocomplete";
import { FaqSection } from "@/components/FaqSection";
import { HeroStats } from "@/components/HeroStats";
import { OfficialSources } from "@/components/OfficialSources";
import { MonthYearPicker } from "@/components/MonthYearPicker";
import dynamic from "next/dynamic";

const LiveMarketData = dynamic(
  () => import("@/components/LiveMarketData").then((mod) => mod.LiveMarketData),
  {
    loading: () => (
      <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-5 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-32 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-gray-100 rounded-xl" />
          ))}
        </div>
      </div>
    ),
    ssr: false,
  },
);
import { SeoContent } from "@/components/SeoContent";
import SeoSchema from "@/components/SeoSchema";
import Link from "next/link";
import { REGIONS } from "@/constants/Regions";
import { COUNTRIES } from "@/constants/Countries";
import { useLanguage } from "@/context/LanguageContext";
import { SPANISH_REGIONS, DEFAULT_ITP_RATE } from "@/constants/ItpRates";
import { DEPRECIATION_TABLE } from "@/utils/taxCalculator";
import { Country, ImportType } from "@/types";
import {
  AlertTriangle,
  Anchor,
  Calendar,
  CheckCircle,
  Euro,
  FileCheck,
  Gauge,
  Globe,
  MapPin,
  RotateCcw,
  Truck,
  User,
  TrendingDown,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export function HomeContent({
  prefilledRegion,
  prefilledCountry,
  prefilledImportType,
}: {
  prefilledRegion?: string;
  prefilledCountry?: Country;
  prefilledImportType?: ImportType;
}) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [importType, setImportType] = useState<ImportType>(
    prefilledImportType || "EU",
  );
  const [originCountry, setOriginCountry] = useState<Country>(
    prefilledCountry || "Germany",
  );
  const [carAge, setCarAge] = useState("new");
  const [registrationDate, setRegistrationDate] = useState("");
  const [isNewCondition, setIsNewCondition] = useState(false);
  const [co2Emissions, setCo2Emissions] = useState("");
  const [sellerType, setSellerType] = useState<"dealer" | "private">("dealer");
  const [price, setPrice] = useState("");
  const [fiscalValue, setFiscalValue] = useState("");
  const [isElectric, setIsElectric] = useState(false);
  const [transportCost, setTransportCost] = useState("");
  const [needsHomologation, setNeedsHomologation] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(
    prefilledRegion || "Madrid",
  );

  // Derived Values for Fiscal Depreciation UI
  const baseFiscalValueStr = fiscalValue || "0";
  const baseFiscalValue =
    parseFloat(baseFiscalValueStr.replace(/\./g, "").replace(/,/g, ".")) || 0;

  // Use the new getDepreciationFactor from taxCalculator
  const { getDepreciationFactor } = require("@/utils/taxCalculator");
  const percentageRetained = getDepreciationFactor(registrationDate, carAge);
  const calculatedFiscalValue =
    baseFiscalValue * Math.max(0, percentageRetained);
  const [vehicleData, setVehicleData] = useState<{
    value: number;
    brand?: string;
    model?: string;
    fuelType?: string;
    isManual: boolean;
    year?: number;
  } | null>(null);

  // Validation state
  const [touched, setTouched] = useState({
    price: false,
    co2: false,
    fiscalValue: false,
  });

  // Validation helpers
  const validatePrice = (value: string): string | null => {
    const num = parseFloat(value);
    if (!value || isNaN(num)) return t("priceError");
    if (num <= 0) return t("priceError");
    if (num > 10000000) return "Price too high";
    return null;
  };

  const validateCO2 = (value: string): string | null => {
    const num = parseFloat(value);
    if (!value || isNaN(num)) return t("co2Error");
    if (num < 0) return t("co2Error");
    if (num > 500) return "Max 500 g/km";
    return null;
  };

  const validateFiscalValue = (value: string): string | null => {
    const num = parseFloat(value);
    if (!value || isNaN(num)) return t("fiscalError");
    if (num <= 0) return t("fiscalError");
    return null;
  };

  const errors = {
    price: touched.price ? validatePrice(price) : null,
    co2: touched.co2 ? validateCO2(co2Emissions) : null,
    fiscalValue: touched.fiscalValue ? validateFiscalValue(fiscalValue) : null,
  };

  const isValid =
    !validatePrice(price) &&
    !validateCO2(co2Emissions) &&
    !validateFiscalValue(fiscalValue);

  // Initialize from URL params
  useEffect(() => {
    if (searchParams.size > 0) {
      const pImportType = searchParams.get("importType") as ImportType;
      if (pImportType) setImportType(pImportType);

      const pOrigin = searchParams.get("originCountry") as Country;
      if (pOrigin) setOriginCountry(pOrigin);

      const pPrice = searchParams.get("carPrice");
      if (pPrice) setPrice(pPrice);

      const pTransport = searchParams.get("transportCost");
      if (pTransport) setTransportCost(pTransport);

      const pHomologation = searchParams.get("needsHomologation");
      if (pHomologation === "true") setNeedsHomologation(true);

      const pAge = searchParams.get("carAge");
      if (pAge) setCarAge(pAge);

      const pRegDate = searchParams.get("registrationDate");
      if (pRegDate) setRegistrationDate(pRegDate);

      const pIsNewCondition = searchParams.get("isNewCondition");
      if (pIsNewCondition === "true") setIsNewCondition(true);

      const pCo2 = searchParams.get("co2Emissions");
      if (pCo2) {
        setCo2Emissions(pCo2);
        if (pCo2 === "0") setIsElectric(true);
      }

      const pSeller = searchParams.get("sellerType") as "dealer" | "private";
      if (pSeller) setSellerType(pSeller);

      const pFiscal = searchParams.get("officialFiscalValue");
      const pBrand = searchParams.get("brand");
      const pModel = searchParams.get("model");

      if (pFiscal) {
        const val = parseFloat(pFiscal);
        setFiscalValue(pFiscal);
        setVehicleData({
          value: val,
          brand: pBrand || undefined,
          model: pModel || undefined,
          fuelType: undefined,
          isManual: !pBrand && !pModel,
          year: undefined,
        });
      }
    }
  }, [searchParams]);

  const calculate = () => {
    setTouched({ price: true, co2: true, fiscalValue: true });

    if (!vehicleData && !fiscalValue) {
      // Should be covered by isValid but double check
      return;
    }

    if (!isValid) return;

    // Track the calculation event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "calculate_tax", {
        origin_country: originCountry,
        brand: vehicleData?.brand,
        model: vehicleData?.model,
        year: vehicleData?.year,
        price: price,
        co2: co2Emissions,
      });
    }

    const params = new URLSearchParams({
      importType,
      originCountry,
      carPrice: price,
      officialFiscalValue: fiscalValue,
      carAge,
      registrationDate,
      isNewCondition: isNewCondition.toString(),
      co2Emissions: co2Emissions || "0",
      sellerType,
      transportCost: transportCost,
      needsHomologation: needsHomologation.toString(),
      itpRate:
        sellerType === "private" && importType === "EU"
          ? (
              SPANISH_REGIONS.find((r) => r.name === selectedRegion)?.rate ??
              DEFAULT_ITP_RATE
            ).toString()
          : "",
      brand: vehicleData?.brand || "",
      model: vehicleData?.model || "",
    });

    router.push(`/result?${params.toString()}`);
  };

  const resetSearch = () => {
    setImportType("EU");
    setOriginCountry("Germany");
    setCarAge("new");
    setRegistrationDate("");
    setIsNewCondition(false);
    setCo2Emissions("");
    setSellerType("dealer");
    setSelectedRegion("Madrid");
    setPrice("");
    setFiscalValue("");
    setIsElectric(false);
    setTransportCost("");
    setNeedsHomologation(false);
    setVehicleData(null);
    setTouched({ price: false, co2: false, fiscalValue: false });
    router.replace("/");
  };

  return (
    <div className="w-full space-y-8">
      <HeroStats />

      <LiveMarketData />

      <AdBanner
        dataAdSlot="1957145426"
        dataAdFormat="horizontal"
        dataFullWidthResponsive={true}
        className="hidden md:block"
      />

      {/* Calculator — the instrument */}
      <div className="space-y-8">
        {/* Import Type Toggle */}
        <div className="pill-group">
          <button
            onClick={() => {
              setImportType("EU");
              setOriginCountry("Germany");
            }}
            className={`pill-option ${importType === "EU" ? "active" : ""}`}
          >
            <Globe size={16} />
            {t("EU")}
          </button>
          <button
            onClick={() => {
              setImportType("NonEU");
              setOriginCountry("UAE");
              setNeedsHomologation(true);
            }}
            className={`pill-option ${importType === "NonEU" ? "active" : ""}`}
          >
            <Anchor size={16} />
            {t("NonEU")}
          </button>
        </div>

        {/* Origin Country */}
        <div className="space-y-3">
          <label className="label-caps flex items-center gap-2">
            <MapPin size={14} className="text-[var(--brand-blue)]" />
            {t("originCountry")}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {(importType === "EU"
              ? ["Germany", "France", "Italy", "Belgium", "Netherlands"]
              : ["UAE", "USA", "Japan", "Korea"]
            ).map((c) => (
              <button
                key={c}
                onClick={() => setOriginCountry(c as Country)}
                className={`chip ${originCountry === c ? "active" : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Vehicle Autocomplete */}
        <VehicleAutocomplete
          key={vehicleData ? "loaded" : "empty"}
          initialData={vehicleData}
          onVehicleSelected={(data) => {
            setVehicleData(data);
            setFiscalValue(data.value.toString());
            setTouched((prev) => ({ ...prev, fiscalValue: true }));

            if (data.co2 && data.co2 > 0) {
              setCo2Emissions(data.co2.toString());
              setTouched((prev) => ({ ...prev, co2: true }));
            }

            if (data.fuelType === "Elc") {
              setCo2Emissions("0");
              setIsElectric(true);
              setTouched((prev) => ({ ...prev, co2: true }));
            } else {
              setIsElectric(false);
            }

            if (data.year) {
              const currentYear = new Date().getFullYear();
              const diff = currentYear - data.year;
              let calculatedAge = "new";
              if (diff < 1) calculatedAge = "new";
              else if (diff >= 1 && diff < 2) calculatedAge = "1_year";
              else if (diff >= 2 && diff < 3) calculatedAge = "2_years";
              else if (diff >= 3 && diff < 4) calculatedAge = "3_years";
              else if (diff >= 4 && diff < 5) calculatedAge = "4_years";
              else if (diff >= 5 && diff < 6) calculatedAge = "5_years";
              else if (diff >= 6 && diff < 7) calculatedAge = "6_years";
              else if (diff >= 7 && diff < 8) calculatedAge = "7_years";
              else if (diff >= 8 && diff < 9) calculatedAge = "8_years";
              else if (diff >= 9 && diff < 10) calculatedAge = "9_years";
              else if (diff >= 10 && diff < 11) calculatedAge = "10_years";
              else if (diff >= 11 && diff < 12) calculatedAge = "11_years";
              else calculatedAge = "12_plus_years";
              setCarAge(calculatedAge);
            }
          }}
        />
        {errors.fiscalValue && (
          <div className="flex items-center gap-2 text-[var(--brand-red)] text-sm font-medium">
            <AlertTriangle size={14} />
            <span>{errors.fiscalValue}</span>
          </div>
        )}

        {/* Mobile In-Feed Ad */}
        <div className="md:hidden">
          <AdBanner
            dataAdSlot="6734103034"
            dataAdFormat="horizontal"
            dataFullWidthResponsive={true}
          />
        </div>

        {/* Car Price */}
        <div className="space-y-2">
          <label className="label-caps flex items-center gap-2">
            <Euro size={14} className="text-[var(--brand-blue)]" />
            {t("carPrice")}
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, price: true }))}
            placeholder="25,000"
            className={`input-field ${errors.price ? "error" : ""}`}
          />
          {errors.price && (
            <div className="flex items-center gap-2 text-[var(--brand-red)] text-sm font-medium">
              <AlertTriangle size={14} />
              <span>{errors.price}</span>
            </div>
          )}
        </div>

        {/* Registration Date & Condition */}
        <div className="space-y-4 p-5 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-dim)]">
          <div className="space-y-2">
            <label className="label-caps flex items-center gap-2">
              <Calendar size={14} className="text-[var(--brand-blue)]" />
              Date of First Registration (Month/Year)
            </label>
            <MonthYearPicker
              value={registrationDate}
              onChange={(val) => setRegistrationDate(val)}
            />
          </div>

          <label className="flex items-start gap-3 p-4 bg-[var(--surface)] border border-[var(--surface-border)] rounded-xl cursor-pointer hover:border-[var(--brand-blue-light)] transition-all duration-200">
            <input
              type="checkbox"
              checked={isNewCondition}
              onChange={(e) => setIsNewCondition(e.target.checked)}
              className="mt-1 w-4 h-4 text-[var(--brand-blue)] border-[var(--surface-border)] rounded focus:ring-[var(--brand-blue)]"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                Vehicle is {"<"} 6 months old OR has {"<"} 6,000 km
              </span>
              <span className="text-xs text-[var(--text-tertiary)] mt-0.5">
                Subject to 21% VAT (IVA) instead of Transfer Tax (ITP)
              </span>
            </div>
          </label>
        </div>

        {/* Fiscal Value Depreciation */}
        {baseFiscalValue > 0 && (
          <div className="p-5 rounded-xl border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/[0.04] animate-fadeInUp">
            <div className="flex items-center gap-2 text-[var(--brand-gold)] font-semibold mb-2">
              <TrendingDown size={18} />
              <span className="text-sm">{t("fiscalValueDepreciation")}</span>
            </div>
            <div className="text-sm text-[var(--text-secondary)] mb-1">
              {baseFiscalValue.toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 0,
              })}{" "}
              × {Math.round(percentageRetained * 100)}%
            </div>
            <div className="number-display text-3xl text-[var(--text-primary)]">
              {calculatedFiscalValue.toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 0,
              })}
            </div>
            <div className="text-xs text-[var(--text-tertiary)] mt-2 italic">
              {t("fiscalValueNote")}
            </div>
          </div>
        )}

        {/* CO2 */}
        <div className="space-y-2">
          <label className="label-caps flex items-center gap-2">
            <Gauge size={14} className="text-[var(--brand-blue)]" />
            {t("co2")}
          </label>
          {isElectric && (
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-700 text-sm font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              {t("evDetected")}
            </div>
          )}
          <input
            type="number"
            value={co2Emissions}
            onChange={(e) => {
              setCo2Emissions(e.target.value);
              if (e.target.value !== "0") setIsElectric(false);
            }}
            onBlur={() => setTouched((prev) => ({ ...prev, co2: true }))}
            placeholder="145"
            className={`input-field ${errors.co2 ? "error" : ""}`}
          />
          {errors.co2 && (
            <div className="flex items-center gap-2 text-[var(--brand-red)] text-sm font-medium">
              <AlertTriangle size={14} />
              <span>{errors.co2}</span>
            </div>
          )}
        </div>

        {/* Seller Type (Only for EU) */}
        {importType === "EU" && (
          <div className="space-y-3">
            <label className="label-caps flex items-center gap-2">
              <User size={14} className="text-[var(--brand-blue)]" />
              {t("sellerType")}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSellerType("dealer")}
                className={`chip text-center ${sellerType === "dealer" ? "active" : ""}`}
              >
                🏢 {t("dealer")}
              </button>
              <button
                onClick={() => setSellerType("private")}
                className={`chip text-center ${sellerType === "private" ? "active" : ""}`}
              >
                👤 {t("private")}
              </button>
            </div>
            {sellerType === "private" && (
              <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--brand-gold)]/[0.06] border border-[var(--brand-gold)]/20 text-sm text-[var(--warning)]">
                <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                {t("privateSaleWarning")}
              </div>
            )}
            {sellerType === "private" && (
              <div className="space-y-3 mt-2">
                <label className="label-caps flex items-center gap-2">
                  <MapPin size={14} className="text-[var(--brand-blue)]" />
                  {t("selectRegion")}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SPANISH_REGIONS.map((region) => (
                    <button
                      key={region.name}
                      onClick={() => setSelectedRegion(region.name)}
                      className={`chip text-xs ${selectedRegion === region.name ? "active" : ""}`}
                    >
                      {region.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Non-EU Fields */}
        {importType === "NonEU" && (
          <>
            <div className="space-y-2">
              <label className="label-caps flex items-center gap-2">
                <Truck size={14} className="text-[var(--brand-blue)]" />
                {t("transportCost")}
              </label>
              <input
                type="number"
                value={transportCost}
                onChange={(e) => setTransportCost(e.target.value)}
                placeholder="1500"
                className="input-field"
              />
            </div>

            <div
              className={`p-4 rounded-xl border-2 cursor-pointer flex items-center gap-3 transition-all duration-200 ${
                needsHomologation
                  ? "bg-[var(--brand-blue)]/[0.04] border-[var(--brand-blue)]"
                  : "bg-[var(--surface)] border-[var(--surface-border)] hover:border-[var(--text-tertiary)]"
              }`}
              onClick={() => setNeedsHomologation(!needsHomologation)}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  needsHomologation
                    ? "bg-[var(--brand-blue)] border-[var(--brand-blue)]"
                    : "border-[var(--surface-border)]"
                }`}
              >
                {needsHomologation && <CheckCircle size={14} color="white" />}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-semibold ${needsHomologation ? "text-[var(--brand-blue)]" : "text-[var(--text-primary)]"}`}>
                  {t("homologation")}
                </p>
                <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                  {t("homologationInfo")}
                </p>
              </div>
              <FileCheck size={20} className="text-[var(--text-tertiary)]" />
            </div>
          </>
        )}

        <div className="divider" />

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={calculate}
            disabled={!isValid && touched.price}
            className="btn-primary w-full py-4 text-base"
          >
            {t("calculate")}
          </button>

          <button
            onClick={resetSearch}
            className="btn-secondary w-full flex items-center justify-center gap-2"
          >
            <RotateCcw size={15} />
            {language === "es" ? "Reiniciar búsqueda" : "Reset Search"}
          </button>
        </div>

        <AdBanner
          dataAdSlot="2479889603"
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
        />
      </div>

      <SeoContent />
      <FaqSection />
      <OfficialSources />

      {/* Internal Links — SEO */}
      <div className="mt-12 space-y-8">
        <div>
          <h3 className="label-caps mb-3 flex items-center gap-1.5">
            <MapPin size={12} className="text-[var(--brand-blue)]" />
            {language === "es"
              ? "Importar coches por comunidad autónoma"
              : "Import cars by region"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <Link
                key={r.slug}
                href={`/importar-coche/${r.slug}`}
                className="text-xs text-[var(--text-tertiary)] hover:text-[var(--brand-blue)] bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--brand-blue-light)] px-3 py-1.5 rounded-full transition-all duration-200"
              >
                {language === "es" ? r.nameEs : r.name} ({r.itpRate}%)
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="label-caps mb-3 flex items-center gap-1.5">
            <Globe size={12} className="text-[var(--success)]" />
            {language === "es"
              ? "Importar desde otros países"
              : "Import from other countries"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <Link
                key={c.slug}
                href={`/importar-desde/${c.slug}`}
                className="text-xs text-[var(--text-tertiary)] hover:text-[var(--brand-blue)] bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--brand-blue-light)] px-3 py-1.5 rounded-full transition-all duration-200"
              >
                {c.flag} {language === "es" ? c.nameEs : c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <div className="flex justify-center items-start gap-8 max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-20">
        {/* Left Sidebar */}
        <SidebarAd side="left" />

        {/* Main Content */}
        <div className="flex-1 max-w-3xl w-full">
          <Suspense
            fallback={
              <div className="space-y-6 py-12">
                <div className="skeleton h-12 w-3/4" />
                <div className="skeleton h-6 w-1/2" />
                <div className="skeleton h-64 w-full" />
              </div>
            }
          >
            <HomeContent />
          </Suspense>
        </div>

        {/* Right Sidebar */}
        <SidebarAd side="right" />
      </div>

      <StickyAdFooter />
    </div>
  );
}
