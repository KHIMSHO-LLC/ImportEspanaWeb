"use client";

import { useLanguage } from "@/context/LanguageContext";
import React, { useMemo, useState, useRef, useEffect } from "react";
import boePrices from "@/data/boe_prices.json";
import { Vehicle } from "@/types";

interface VehicleAutocompleteProps {
  onVehicleSelected: (data: {
    value: number;
    brand?: string;
    model?: string;
    fuelType?: string;
    isManual: boolean;
  }) => void;
}

export function VehicleAutocomplete({
  onVehicleSelected,
}: VehicleAutocompleteProps) {
  const { t } = useLanguage();
  const [brandQuery, setBrandQuery] = useState("");
  const [modelQuery, setModelQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showBrandSuggestions, setShowBrandSuggestions] = useState(false);
  const [showModelSuggestions, setShowModelSuggestions] = useState(false);
  const [isManualMode, setIsManualMode] = useState(false);
  const [manualValue, setManualValue] = useState("");

  const brandInputRef = useRef<HTMLInputElement>(null);
  const modelInputRef = useRef<HTMLInputElement>(null);

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        brandInputRef.current &&
        !brandInputRef.current.contains(event.target as Node)
      ) {
        setShowBrandSuggestions(false);
      }
      if (
        modelInputRef.current &&
        !modelInputRef.current.contains(event.target as Node)
      ) {
        setShowModelSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get unique brands
  const allBrands = useMemo(() => {
    const brandSet = new Set<string>();
    (boePrices as unknown as Vehicle[]).forEach((vehicle) =>
      brandSet.add(vehicle.brand),
    );
    return Array.from(brandSet).sort();
  }, []);

  // Filter brands based on query
  const filteredBrands = useMemo(() => {
    if (!brandQuery.trim()) return [];

    const query = brandQuery.toLowerCase();
    return allBrands
      .filter((brand) => brand.toLowerCase().includes(query))
      .slice(0, 10);
  }, [brandQuery, allBrands]);

  // Filter models based on selected brand, model query, and year
  const filteredModels = useMemo(() => {
    if (!selectedBrand || !modelQuery.trim()) return [];

    const query = modelQuery.toLowerCase();
    const year = yearFilter ? parseInt(yearFilter) : null;

    return (boePrices as unknown as Vehicle[])
      .filter((vehicle) => {
        // Brand match
        if (vehicle.brand !== selectedBrand) return false;

        // Model match
        if (!vehicle.model.toLowerCase().includes(query)) return false;

        // Year filter (if provided)
        if (year) {
          const startYear = parseInt(vehicle.startYear);
          const endYear = vehicle.endYear ? parseInt(vehicle.endYear) : 2026;
          if (year < startYear || year > endYear) return false;
        }

        return true;
      })
      .slice(0, 15);
  }, [selectedBrand, modelQuery, yearFilter]);

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setBrandQuery(brand);
    setShowBrandSuggestions(false);
    setModelQuery("");
    setSelectedVehicle(null);
  };

  const handleModelSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setModelQuery(vehicle.model);
    setShowModelSuggestions(false);
    onVehicleSelected({
      value: vehicle.value,
      brand: vehicle.brand,
      model: vehicle.model,
      fuelType: vehicle.fuelType,
      isManual: false,
    });
  };

  const handleManualSubmit = () => {
    const value = parseFloat(manualValue);
    if (!isNaN(value) && value > 0) {
      onVehicleSelected({
        value: value,
        isManual: true,
      });
    }
  };

  const toggleManualMode = () => {
    setIsManualMode(!isManualMode);
    setSelectedVehicle(null);
    setSelectedBrand(null);
    setBrandQuery("");
    setModelQuery("");
    setManualValue("");
  };

  // Manual entry mode
  if (isManualMode) {
    return (
      <div className="mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            💰 {t("manualEntryLabel")}
          </label>
          <p className="text-xs text-gray-500 mb-3">{t("manualEntryHelp")}</p>
          <div className="flex gap-2">
            <input
              type="number"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400 bg-white"
              placeholder="Ej: 45000"
              value={manualValue}
              onChange={(e) => setManualValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
            />
          </div>

          {manualValue && parseFloat(manualValue) > 0 && (
            <button
              onClick={handleManualSubmit}
              className="mt-3 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {t("confirmValue")}
            </button>
          )}
        </div>

        <button
          onClick={toggleManualMode}
          className="mt-2 text-sm text-blue-600 hover:underline w-full text-center"
        >
          {t("backToSearch")}
        </button>
      </div>
    );
  }

  return (
    <div className="mb-6">
      {/* Brand Search */}
      <div className="mb-4 relative" ref={brandInputRef}>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          🚗 {t("brand")}
        </label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400 bg-white shadow-sm"
          placeholder="Escribe la marca (ej: Mercedes, BMW)"
          value={brandQuery}
          onChange={(e) => {
            setBrandQuery(e.target.value);
            setShowBrandSuggestions(true);
            setSelectedBrand(null);
          }}
          onFocus={() => setShowBrandSuggestions(true)}
        />

        {showBrandSuggestions && filteredBrands.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {filteredBrands.map((item) => (
              <div
                key={item}
                className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-0"
                onClick={() => handleBrandSelect(item)}
              >
                <div className="font-medium text-gray-900">{item}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Year Filter (optional) */}
      {selectedBrand && (
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            📅 {t("yearOptional")}
          </label>
          <input
            type="number"
            className="w-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400 bg-white shadow-sm"
            placeholder="Ej: 2020"
            maxLength={4}
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
          />
        </div>
      )}

      {/* Model Search */}
      {selectedBrand && (
        <div className="mb-4 relative" ref={modelInputRef}>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            🔧 {t("model")}
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400 bg-white shadow-sm"
            placeholder="Escribe el modelo (ej: X5, Clase C)"
            value={modelQuery}
            onChange={(e) => {
              setModelQuery(e.target.value);
              setShowModelSuggestions(true);
            }}
            onFocus={() => setShowModelSuggestions(true)}
          />

          {showModelSuggestions && filteredModels.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredModels.map((item) => (
                <div
                  key={item.id}
                  className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-0"
                  onClick={() => handleModelSelect(item)}
                >
                  <div className="font-medium text-gray-900">{item.model}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {item.cv}cv • {item.startYear}
                    {item.endYear ? `-${item.endYear}` : "+"} • €
                    {item.value.toLocaleString("de-DE")}
                    {item.fuelType === "Elc" && " ⚡"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Selected Vehicle Info */}
      {selectedVehicle && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-2">
          <div className="text-sm font-semibold text-blue-700 mb-1">
            ✅ {t("vehicleSearch")}
          </div>
          <div className="text-lg font-bold text-gray-900">
            {selectedVehicle.brand} {selectedVehicle.model}
          </div>
          <div className="text-xl font-bold text-blue-800 mt-1">
            €{selectedVehicle.value.toLocaleString("de-DE")}
          </div>
          {selectedVehicle.fuelType === "Elc" && (
            <div className="mt-2 inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {t("evDetected")}
            </div>
          )}
        </div>
      )}

      {/* Manual Entry Link */}
      <button
        onClick={toggleManualMode}
        className="mt-2 text-sm text-blue-600 hover:underline w-full text-center"
      >
        {t("manualEntryLink")}
      </button>
    </div>
  );
}
