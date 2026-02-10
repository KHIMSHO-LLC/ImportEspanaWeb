"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { VehicleAutocomplete } from "@/components/VehicleAutocomplete";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  MapPin,
  Euro,
  Calendar,
  Gauge,
  User,
  AlertTriangle,
} from "lucide-react";
import { Country } from "@/types";

export default function Home() {
  const { t } = useLanguage();
  const router = useRouter();

  const [originCountry, setOriginCountry] = useState<Country>("Germany");
  const [carAge, setCarAge] = useState("new");
  const [co2Emissions, setCo2Emissions] = useState("");
  const [sellerType, setSellerType] = useState<"dealer" | "private">("dealer");
  const [vehicleData, setVehicleData] = useState<{
    value: number;
    brand?: string;
    model?: string;
    fuelType?: string;
    isManual: boolean;
  } | null>(null);

  const calculate = () => {
    if (!vehicleData) {
      alert(t("fiscalError"));
      return;
    }

    const params = new URLSearchParams({
      originCountry,
      carPrice: "0", // Not used in calculation logic but required by type? Wait, logic uses carPrice for total.
      // We need carPrice input!
      // Mobile app had carPrice input.
      officialFiscalValue: vehicleData.value.toString(),
      carAge,
      co2Emissions: co2Emissions || "0",
      sellerType,
      // Add brand/model for display
      brand: vehicleData.brand || "",
      model: vehicleData.model || "",
    });

    // We need to ask for Purchase Price too!
    // Adding Input for Price below.
    params.set("carPrice", price.toString());

    router.push(`/result?${params.toString()}`);
  };

  const [price, setPrice] = useState("");

  return (
    <main className="min-h-screen pb-20">
      <LanguageSwitcher />

      <div className="max-w-md mx-auto p-4 md:pt-10">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          ImportEspana 🇪🇸
        </h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
          {/* Origin Country */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <MapPin size={16} className="text-blue-600" />
              {t("originCountry")}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  "Germany",
                  "France",
                  "Italy",
                  "Belgium",
                  "Netherlands",
                ] as Country[]
              ).map((c) => (
                <button
                  key={c}
                  onClick={() => setOriginCountry(c)}
                  className={`p-2 rounded-lg text-sm transition-colors border ${
                    originCountry === c
                      ? "bg-blue-50 border-blue-500 text-blue-700 font-medium"
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Autocomplete */}
          <VehicleAutocomplete
            onVehicleSelected={(data) => {
              setVehicleData(data);
              // Auto-fill CO2 if electric
              if (data.fuelType === "Elc") {
                setCo2Emissions("0");
              }
            }}
          />

          {/* Car Price */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Euro size={16} className="text-blue-600" />
              {t("carPrice")}
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="25000"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400 bg-white shadow-sm"
            />
          </div>

          {/* Car Age */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Calendar size={16} className="text-blue-600" />
              {t("age")}
            </label>
            <select
              value={carAge}
              onChange={(e) => setCarAge(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white text-gray-900 shadow-sm"
            >
              <option value="new">New / Menos de 1 año</option>
              <option value="1_year">1-2 años</option>
              <option value="2_years">2-3 años</option>
              <option value="3_years">3-4 años</option>
              <option value="4_years">4-5 años</option>
              <option value="5_years">5-6 años</option>
              <option value="6_years">6-7 años</option>
              <option value="7_years">7-8 años</option>
              <option value="8_years">8-9 años</option>
              <option value="9_years">9-10 años</option>
              <option value="10_years">10-11 años</option>
              <option value="11_years">11-12 años</option>
              <option value="12_plus_years">+12 años</option>
            </select>
          </div>

          {/* CO2 */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Gauge size={16} className="text-blue-600" />
              {t("co2")}
            </label>
            <input
              type="number"
              value={co2Emissions}
              onChange={(e) => setCo2Emissions(e.target.value)}
              placeholder="120"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400 bg-white shadow-sm"
            />
          </div>

          {/* Seller Type */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <User size={16} className="text-blue-600" />
              {t("sellerType")}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSellerType("dealer")}
                className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                  sellerType === "dealer"
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                🏢 {t("dealer")}
              </button>
              <button
                onClick={() => setSellerType("private")}
                className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                  sellerType === "private"
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                👤 {t("private")}
              </button>
            </div>
            {sellerType === "private" && (
              <div className="mt-2 text-xs text-yellow-700 bg-yellow-50 p-2 rounded flex items-start gap-2">
                <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                {t("privateSaleWarning")}
              </div>
            )}
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform active:scale-95"
          >
            {t("calculate")}
          </button>
        </div>
      </div>
    </main>
  );
}
