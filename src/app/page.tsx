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
      <div className="bg-[#13131a] border border-[#2a2a3a] rounded p-5 animate-pulse">
        <div className="h-4 bg-[#2a2a3a] rounded w-32 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-[#1a1a24] rounded" />
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
  ArrowRight,
  Calculator,
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
    <div className="w-full max-w-2xl mx-auto">
      {/* Hero Stats */}
      <HeroStats />

      {/* Live Market Data */}
      <LiveMarketData />

      {/* Main Calculator Card */}
      <div className="bg-[#13131a] border border-[#2a2a3a] rounded-lg p-6 md:p-8 space-y-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#2a2a3a]">
          <div className="w-10 h-10 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded flex items-center justify-center">
            <Calculator size={20} className="text-[#00d4aa]" />
          </div>
          <div>
            <h2 className="text-headline text-[#f5f5f7]">Configura tu importación</h2>
            <p className="text-small text-[#6b6b7a]">Rellena los datos de tu vehículo</p>
          </div>
        </div>

        {/* Import Type Toggle */}
        <div className="space-y-3">
          <label className="text-micro text-[#8b8b9a] flex items-center gap-2">
            <Globe size={14} />
            TIPO DE IMPORTACIÓN
          </label>
          <div className="toggle-group">
            <button
              onClick={() => {
                setImportType("EU");
                setOriginCountry("Germany");
              }}
              className={`toggle-btn ${importType === "EU" ? "active" : ""}`}
            >
              <span className="flex items-center justify-center gap-2">
                <Globe size={14} />
                Unión Europea
              </span>
            </button>
            <button
              onClick={() => {
                setImportType("NonEU");
                setOriginCountry("UAE");
                setNeedsHomologation(true);
              }}
              className={`toggle-btn ${importType === "NonEU" ? "active" : ""}`}
            >
              <span className="flex items-center justify-center gap-2">
                <Anchor size={14} />
                Fuera de UE
              </span>
            </button>
          </div>
        </div>

        {/* Origin Country */}
        <div className="space-y-3">
          <label className="text-micro text-[#8b8b9a] flex items-center gap-2">
            <MapPin size={14} />
            PAÍS DE ORIGEN
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {(importType === "EU"
              ? ["Germany", "France", "Italy", "Belgium", "Netherlands", "Austria"]
              : ["UAE", "USA", "Japan", "Korea", "UK", "Switzerland"]
            ).map((c) => (
              <button
                key={c}
                onClick={() => setOriginCountry(c as Country)}
                className={`p-3 rounded border text-sm font-medium transition-all ${
                  originCountry === c
                    ? "bg-[#00d4aa]/10 border-[#00d4aa] text-[#00d4aa]"
                    : "bg-[#1a1a24] border-[#2a2a3a] text-[#8b8b9a] hover:border-[#3a3a4a] hover:text-[#f5f5f7]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Autocomplete */}
        <div className="space-y-3">
          <label className="text-micro text-[#8b8b9a]">VEHÍCULO</label>
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
            <div className="flex items-center gap-2 text-[#ff4d4d] text-sm">
              <AlertTriangle size={14} />
              <span>{errors.fiscalValue}</span>
            </div>
          )}
        </div>

        {/* Car Price */}
        <div className="space-y-3">
          <label className="text-micro text-[#8b8b9a] flex items-center gap-2">
            <Euro size={14} />
            PRECIO DEL VEHÍCULO
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mono text-[#6b6b7a]">€</span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, price: true }))}
              placeholder="25000"
              className={`input-midnight pl-10 text-mono ${
                errors.price
                  ? "border-[#ff4d4d] focus:border-[#ff4d4d] focus:shadow-[0_0_0_3px_rgba(255,77,77,0.2)]"
                  : ""
              }`}
            />
          </div>
          {errors.price && (
            <div className="flex items-center gap-2 text-[#ff4d4d] text-sm">
              <AlertTriangle size={14} />
              <span>{errors.price}</span>
            </div>
          )}
        </div>

        {/* Registration Date & Condition */}
        <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded p-5 space-y-5">
          <div className="space-y-3">
            <label className="text-micro text-[#8b8b9a] flex items-center gap-2">
              <Calendar size={14} />
              FECHA DE PRIMERA MATRICULACIÓN
            </label>
            <MonthYearPicker
              value={registrationDate}
              onChange={(val) => setRegistrationDate(val)}
            />
          </div>

          <label className="flex items-start gap-3 p-3 bg-[#13131a] border border-[#2a2a3a] rounded cursor-pointer hover:border-[#3a3a4a] transition-all">
            <input
              type="checkbox"
              checked={isNewCondition}
              onChange={(e) => setIsNewCondition(e.target.checked)}
              className="mt-1 w-4 h-4 accent-[#00d4aa] bg-[#1a1a24] border-[#2a2a3a] rounded"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[#f5f5f7]">
                Vehículo &lt; 6 meses o &lt; 6.000 km
              </span>
              <span className="text-xs text-[#6b6b7a]">
                Sujeto a 21% IVA en lugar de ITP
              </span>
            </div>
          </label>
        </div>

        {/* Fiscal Value Depreciation UI */}
        {baseFiscalValue > 0 && (
          <div className="bg-[#00d4aa]/5 border border-[#00d4aa]/20 rounded p-5">
            <div className="flex items-center gap-2 text-[#00d4aa] mb-3">
              <TrendingDown size={16} />
              <span className="text-micro">DEPRECIACIÓN FISCAL APLICADA</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-mono text-[#8b8b9a]">
                {baseFiscalValue.toLocaleString("es-ES", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                })}
              </span>
              <span className="text-[#6b6b7a]">×</span>
              <span className="text-mono text-[#00d4aa]">
                {Math.round(percentageRetained * 100)}%
              </span>
            </div>
            <div className="text-mono-lg text-[#f5f5f7]">
              {calculatedFiscalValue.toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 0,
              })}
            </div>
            <div className="text-xs text-[#6b6b7a] mt-2">
              Valor fiscal depreciado según antigüedad
            </div>
          </div>
        )}

        {/* CO2 */}
        <div className="space-y-3">
          <label className="text-micro text-[#8b8b9a] flex items-center gap-2">
            <Gauge size={14} />
            EMISIONES CO₂ (g/km)
          </label>
          {isElectric && (
            <div className="mb-3 flex items-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded px-3 py-2">
              <CheckCircle size={14} className="text-[#00d4aa]" />
              <span className="text-sm text-[#00d4aa]">Vehículo eléctrico detectado</span>
            </div>
          )}
          <div className="relative">
            <input
              type="number"
              value={co2Emissions}
              onChange={(e) => {
                setCo2Emissions(e.target.value);
                if (e.target.value !== "0") setIsElectric(false);
              }}
              onBlur={() => setTouched((prev) => ({ ...prev, co2: true }))}
              placeholder="145"
              className={`input-midnight text-mono ${
                errors.co2
                  ? "border-[#ff4d4d] focus:border-[#ff4d4d] focus:shadow-[0_0_0_3px_rgba(255,77,77,0.2)]"
                  : ""
              }`}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-micro text-[#6b6b7a]">
              g/km
            </span>
          </div>
          {errors.co2 && (
            <div className="flex items-center gap-2 text-[#ff4d4d] text-sm">
              <AlertTriangle size={14} />
              <span>{errors.co2}</span>
            </div>
          )}
        </div>

        {/* Seller Type (Only for EU) */}
        {importType === "EU" && (
          <div className="space-y-3">
            <label className="text-micro text-[#8b8b9a] flex items-center gap-2">
              <User size={14} />
              TIPO DE VENDEDOR
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSellerType("dealer")}
                className={`p-4 rounded border text-sm font-medium transition-all text-left ${
                  sellerType === "dealer"
                    ? "bg-[#00d4aa]/10 border-[#00d4aa] text-[#00d4aa]"
                    : "bg-[#1a1a24] border-[#2a2a3a] text-[#8b8b9a] hover:border-[#3a3a4a]"
                }`}
              >
                <div className="text-lg mb-1">🏢</div>
                Concesionario
              </button>
              <button
                onClick={() => setSellerType("private")}
                className={`p-4 rounded border text-sm font-medium transition-all text-left ${
                  sellerType === "private"
                    ? "bg-[#00d4aa]/10 border-[#00d4aa] text-[#00d4aa]"
                    : "bg-[#1a1a24] border-[#2a2a3a] text-[#8b8b9a] hover:border-[#3a3a4a]"
                }`}
              >
                <div className="text-lg mb-1">👤</div>
                Particular
              </button>
            </div>
            {sellerType === "private" && (
              <div className="mt-3 flex items-start gap-2 bg-[#ffd700]/5 border border-[#ffd700]/20 rounded px-3 py-2">
                <AlertTriangle size={14} className="text-[#ffd700] mt-0.5 shrink-0" />
                <span className="text-xs text-[#ffd700]">{t("privateSaleWarning")}</span>
              </div>
            )}
            {sellerType === "private" && (
              <div className="mt-4 space-y-3">
                <label className="text-micro text-[#8b8b9a]">COMUNIDAD AUTÓNOMA</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                  {SPANISH_REGIONS.map((region) => (
                    <button
                      key={region.name}
                      onClick={() => setSelectedRegion(region.name)}
                      className={`p-2 rounded border text-xs font-medium transition-all ${
                        selectedRegion === region.name
                          ? "bg-[#00d4aa]/10 border-[#00d4aa] text-[#00d4aa]"
                          : "bg-[#1a1a24] border-[#2a2a3a] text-[#8b8b9a] hover:border-[#3a3a4a]"
                      }`}
                    >
                      {region.label}
                      <span className="block text-[10px] opacity-60 mt-0.5">{region.rate}%</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Non-EU Fields: Transport & Homologation */}
        {importType === "NonEU" && (
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-micro text-[#8b8b9a] flex items-center gap-2">
                <Truck size={14} />
                COSTE DE TRANSPORTE
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mono text-[#6b6b7a]">€</span>
                <input
                  type="number"
                  value={transportCost}
                  onChange={(e) => setTransportCost(e.target.value)}
                  placeholder="1500"
                  className="input-midnight pl-10 text-mono"
                />
              </div>
            </div>

            <div
              className={`p-4 rounded border-2 transition-all cursor-pointer flex items-center gap-3 ${
                needsHomologation
                  ? "bg-[#00d4aa]/10 border-[#00d4aa]"
                  : "bg-[#1a1a24] border-[#2a2a3a] hover:border-[#3a3a4a]"
              }`}
              onClick={() => setNeedsHomologation(!needsHomologation)}
            >
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                  needsHomologation
                    ? "bg-[#00d4aa] border-[#00d4aa]"
                    : "border-[#4a4a5a]"
                }`}
              >
                {needsHomologation && <CheckCircle size={12} className="text-[#0a0a0f]" />}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium ${
                  needsHomologation ? "text-[#00d4aa]" : "text-[#f5f5f7]"
                }`}>
                  {t("homologation")}
                </p>
                <p className="text-xs text-[#6b6b7a] mt-0.5">
                  {t("homologationInfo")}
                </p>
              </div>
              <FileCheck size={18} className={needsHomologation ? "text-[#00d4aa]" : "text-[#4a4a5a]"} />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4 border-t border-[#2a2a3a]">
          {/* Calculate Button */}
          <button
            onClick={calculate}
            disabled={!isValid && touched.price}
            className={`btn-primary w-full flex items-center justify-center gap-2 ${
              !isValid && touched.price
                ? "opacity-40 cursor-not-allowed hover:shadow-none"
                : "animate-pulse-glow"
            }`}
          >
            <Calculator size={18} />
            {t("calculate")}
            <ArrowRight size={18} />
          </button>

          {/* Reset Button */}
          <button
            onClick={resetSearch}
            className="btn-secondary w-full flex items-center justify-center gap-2"
          >
            <RotateCcw size={16} />
            {language === "es" ? "Reiniciar" : "Reset"}
          </button>
        </div>
      </div>

      {/* Inline Ad Below Calculator */}
      <AdBanner
        dataAdSlot="2479889603"
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        variant="inline"
      />

      {/* SEO Content */}
      <SeoContent />
      <FaqSection />
      <OfficialSources />

      {/* Region & Country Links */}
      <div className="mt-12 space-y-8">
        {/* Region Links */}
        <div>
          <h3 className="text-micro text-[#8b8b9a] mb-4 flex items-center gap-2">
            <MapPin size={14} />
            {language === "es"
              ? "IMPORTAR POR COMUNIDAD AUTÓNOMA"
              : "IMPORT BY REGION"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <Link
                key={r.slug}
                href={`/importar-coche/${r.slug}`}
                className="text-xs text-[#6b6b7a] hover:text-[#00d4aa] bg-[#13131a] hover:bg-[#00d4aa]/10 border border-[#2a2a3a] hover:border-[#00d4aa]/30 px-3 py-1.5 rounded transition-all"
              >
                {language === "es" ? r.nameEs : r.name}
                <span className="text-[#4a4a5a] ml-1">({r.itpRate}%)</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Country Links */}
        <div>
          <h3 className="text-micro text-[#8b8b9a] mb-4 flex items-center gap-2">
            <Globe size={14} />
            {language === "es"
              ? "IMPORTAR DESDE"
              : "IMPORT FROM"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <Link
                key={c.slug}
                href={`/importar-desde/${c.slug}`}
                className="text-xs text-[#6b6b7a] hover:text-[#00d4aa] bg-[#13131a] hover:bg-[#00d4aa]/10 border border-[#2a2a3a] hover:border-[#00d4aa]/30 px-3 py-1.5 rounded transition-all"
              >
                {c.flag} {language === "es" ? c.nameEs : c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Ad */}
      <AdBanner
        dataAdSlot="1957145426"
        dataAdFormat="horizontal"
        dataFullWidthResponsive={true}
        variant="inline"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen pb-24">
      {/* Main Layout - Single Lane with Optional Sidebars */}
      <div className="flex justify-center items-start gap-6 max-w-7xl mx-auto px-4 pt-6">
        {/* Left Sidebar Ad - Desktop Only */}
        <SidebarAd side="left" />

        {/* Main Content - Single Lane */}
        <div className="flex-1 max-w-2xl w-full">
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-2 border-[#00d4aa] border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <HomeContent />
          </Suspense>
        </div>

        {/* Right Sidebar Ad - Desktop Only */}
        <SidebarAd side="right" />
      </div>

      {/* Mobile Sticky Ad */}
      <StickyAdFooter />
    </div>
  );
}
