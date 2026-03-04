"use client";

import { useLanguage } from "@/context/LanguageContext";
import React, { useState, useRef, useEffect } from "react";
import { searchBrands, searchModels } from "@/actions/vehicleSearch";
import { Vehicle } from "@/types";
import { InfoTooltip } from "@/components/InfoTooltip";
import { Search, Zap, Check, Edit3 } from "lucide-react";

interface VehicleAutocompleteProps {
  initialData?: {
    brand?: string;
    model?: string;
    value: number;
    fuelType?: string;
    isManual: boolean;
  } | null;
  onVehicleSelected: (data: {
    value: number;
    brand?: string;
    model?: string;
    fuelType?: string;
    isManual: boolean;
    year?: number;
    co2?: number | null;
  }) => void;
}

export function VehicleAutocomplete({
  initialData,
  onVehicleSelected,
}: VehicleAutocompleteProps) {
  const { t } = useLanguage();
  const [brandQuery, setBrandQuery] = useState(initialData?.brand || "");
  const [modelQuery, setModelQuery] = useState(initialData?.model || "");
  const [yearFilter, setYearFilter] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    initialData?.brand || null,
  );

  const [selectedVehicle, setSelectedVehicle] = useState<any | null>(
    initialData && !initialData.isManual && initialData.brand
      ? {
          brand: initialData.brand,
          model: initialData.model,
          value: initialData.value,
          fuelType: initialData.fuelType,
        }
      : null,
  );

  const [filteredBrands, setFilteredBrands] = useState<string[]>([]);
  const [filteredModels, setFilteredModels] = useState<Vehicle[]>([]);

  const [showBrandSuggestions, setShowBrandSuggestions] = useState(false);
  const [showModelSuggestions, setShowModelSuggestions] = useState(false);
  const [isManualMode, setIsManualMode] = useState(
    initialData?.isManual || false,
  );
  const [manualValue, setManualValue] = useState(
    initialData?.isManual ? initialData.value.toString() : "",
  );

  const brandInputRef = useRef<HTMLDivElement>(null);
  const modelInputRef = useRef<HTMLDivElement>(null);

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

  // Fetch brands
  useEffect(() => {
    const fetchBrands = async () => {
      if (brandQuery.trim().length < 1) {
        setFilteredBrands([]);
        return;
      }
      const results = await searchBrands(brandQuery);
      setFilteredBrands(results);
    };
    const timeoutId = setTimeout(fetchBrands, 300);
    return () => clearTimeout(timeoutId);
  }, [brandQuery]);

  // Fetch models
  useEffect(() => {
    const fetchModels = async () => {
      if (!selectedBrand || modelQuery.trim().length < 1) {
        setFilteredModels([]);
        return;
      }
      const year = yearFilter ? parseInt(yearFilter) : undefined;
      const results = await searchModels(selectedBrand, modelQuery, year);
      setFilteredModels(results);
    };
    const timeoutId = setTimeout(fetchModels, 300);
    return () => clearTimeout(timeoutId);
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

    const yearInput = yearFilter ? parseInt(yearFilter) : undefined;

    onVehicleSelected({
      value: vehicle.value,
      brand: vehicle.brand,
      model: vehicle.model,
      fuelType: vehicle.fuelType,
      isManual: false,
      year: yearInput,
      co2: vehicle.co2,
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
      <div className="space-y-4">
        <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded p-5">
          <label className="text-micro text-[#8b8b9a] mb-2 block">
            💰 {t("manualEntryLabel")}
          </label>
          <p className="text-xs text-[#6b6b7a] mb-4">{t("manualEntryHelp")}</p>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mono text-[#6b6b7a]">€</span>
            <input
              type="number"
              className="input-midnight pl-10 text-mono"
              placeholder="Ej: 45000"
              value={manualValue}
              onChange={(e) => setManualValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
            />
          </div>

          {manualValue && parseFloat(manualValue) > 0 && (
            <button
              onClick={handleManualSubmit}
              className="mt-4 w-full btn-primary"
            >
              {t("confirmValue")}
            </button>
          )}
        </div>

        <button
          onClick={toggleManualMode}
          className="text-sm text-[#00d4aa] hover:text-[#00e4ba] flex items-center gap-2 mx-auto transition-colors"
        >
          <Search size={14} />
          {t("backToSearch")}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Brand Search */}
      <div className="relative" ref={brandInputRef}>
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b7a]" />
          <input
            type="text"
            className="input-midnight pl-11"
            placeholder="Busca marca (ej: BMW, Mercedes)"
            value={brandQuery}
            onChange={(e) => {
              setBrandQuery(e.target.value);
              setShowBrandSuggestions(true);
              setSelectedBrand(null);
            }}
            onFocus={() => setShowBrandSuggestions(true)}
            aria-label={t("brand")}
          />
        </div>

        {showBrandSuggestions && filteredBrands.length > 0 && (
          <div className="absolute z-20 w-full mt-2 bg-[#13131a] border border-[#2a2a3a] rounded shadow-2xl max-h-60 overflow-y-auto">
            {filteredBrands.map((item) => (
              <div
                key={item}
                className="p-3 hover:bg-[#1a1a24] cursor-pointer border-b border-[#2a2a3a] last:border-0 transition-colors"
                onClick={() => handleBrandSelect(item)}
              >
                <div className="font-medium text-[#f5f5f7]">{item}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Year Filter (optional) */}
      {selectedBrand && (
        <div>
          <label className="text-micro text-[#8b8b9a] mb-2 block flex items-center gap-2">
            📅 {t("yearOptional")}
            <InfoTooltip text={t("yearInfo")} />
          </label>
          <input
            type="number"
            className="input-midnight text-mono"
            placeholder="2020"
            maxLength={4}
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            aria-label={t("yearOptional")}
          />
        </div>
      )}

      {/* Model Search */}
      {selectedBrand && (
        <div className="relative" ref={modelInputRef}>
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b7a]" />
            <input
              type="text"
              className="input-midnight pl-11"
              placeholder={`Busca modelo ${selectedBrand}...`}
              value={modelQuery}
              onChange={(e) => {
                setModelQuery(e.target.value);
                setShowModelSuggestions(true);
              }}
              onFocus={() => setShowModelSuggestions(true)}
              aria-label={t("model")}
            />
          </div>

          {showModelSuggestions && filteredModels.length > 0 && (
            <div className="absolute z-20 w-full mt-2 bg-[#13131a] border border-[#2a2a3a] rounded shadow-2xl max-h-60 overflow-y-auto">
              {filteredModels.map((item) => (
                <div
                  key={item.id}
                  className="p-3 hover:bg-[#1a1a24] cursor-pointer border-b border-[#2a2a3a] last:border-0 transition-colors"
                  onClick={() => handleModelSelect(item)}
                >
                  <div className="font-medium text-[#f5f5f7]">{item.model}</div>
                  <div className="text-xs text-[#6b6b7a] mt-1 font-mono">
                    {item.cv}cv • {item.startYear}
                    {item.endYear ? `-${item.endYear}` : "+"} • €
                    {item.value.toLocaleString("de-DE")}
                    {item.co2 ? ` • ${item.co2}g CO₂` : ""}
                    {item.fuelType === "Elc" && (
                      <span className="ml-2 text-[#00d4aa]">⚡ Eléctrico</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Selected Vehicle Info */}
      {selectedVehicle && (
        <div className="bg-[#00d4aa]/5 border border-[#00d4aa]/20 rounded p-5">
          <div className="flex items-center gap-2 text-[#00d4aa] mb-3">
            <Check size={16} />
            <span className="text-micro">VEHÍCULO SELECCIONADO</span>
          </div>
          <div className="text-title text-[#f5f5f7] mb-1">
            {selectedVehicle.brand} {selectedVehicle.model}
          </div>
          <div className="text-mono-lg text-[#00d4aa]">
            €{selectedVehicle.value.toLocaleString("de-DE")}
          </div>
          {selectedVehicle.fuelType === "Elc" && (
            <div className="mt-3 inline-flex items-center gap-1.5 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded px-3 py-1">
              <Zap size={12} className="text-[#00d4aa]" />
              <span className="text-xs text-[#00d4aa] font-medium">{t("evDetected")}</span>
            </div>
          )}
        </div>
      )}

      {/* Manual Entry Link */}
      <button
        onClick={toggleManualMode}
        className="text-sm text-[#6b6b7a] hover:text-[#8b8b9a] flex items-center gap-2 mx-auto transition-colors"
      >
        <Edit3 size={14} />
        {t("manualEntryLink")}
      </button>
    </div>
  );
}
