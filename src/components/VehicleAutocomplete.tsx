"use client";

import { useLanguage } from "@/context/LanguageContext";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { searchBrands, searchModels } from "@/actions/vehicleSearch";
import { Vehicle } from "@/types";
import { InfoTooltip } from "@/components/InfoTooltip";

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
    const timeoutId = setTimeout(fetchBrands, 300); // 300ms debounce
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
    const timeoutId = setTimeout(fetchModels, 300); // 300ms debounce
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

    // Determine the year to pass.
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
        <div className="p-5 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]">
          <label className="label-caps block mb-1">
            {t("manualEntryLabel")}
          </label>
          <p className="text-xs text-[var(--text-tertiary)] mb-4">{t("manualEntryHelp")}</p>
          <input
            type="number"
            className="input-field"
            placeholder="Ej: 45000"
            value={manualValue}
            onChange={(e) => setManualValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
          />

          {manualValue && parseFloat(manualValue) > 0 && (
            <button
              onClick={handleManualSubmit}
              className="btn-primary w-full mt-4"
            >
              {t("confirmValue")}
            </button>
          )}
        </div>

        <button
          onClick={toggleManualMode}
          className="text-sm text-[var(--brand-blue)] hover:text-[var(--brand-blue-deep)] font-medium w-full text-center transition-colors duration-200"
        >
          {t("backToSearch")}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Brand Search */}
      <div className="relative z-30" ref={brandInputRef}>
        <label className="label-caps flex items-center gap-2 mb-2">
          {t("brand")}
          <InfoTooltip text={t("vehicleSearchInfo")} />
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="Mercedes, BMW, Audi..."
          value={brandQuery}
          onChange={(e) => {
            setBrandQuery(e.target.value);
            setShowBrandSuggestions(true);
            setSelectedBrand(null);
          }}
          onFocus={() => setShowBrandSuggestions(true)}
          aria-label={t("brand")}
        />

        {showBrandSuggestions && filteredBrands.length > 0 && (
          <div className="absolute z-50 w-full mt-2 bg-[var(--surface-popover)] border border-[var(--surface-border)] rounded-xl shadow-lg max-h-60 overflow-y-auto animate-slideDown">
            {filteredBrands.map((item) => (
              <div
                key={item}
                className="px-4 py-3 hover:bg-white/10 cursor-pointer transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl"
                onClick={() => handleBrandSelect(item)}
              >
                <div className="font-medium text-[var(--text-primary)]">{item}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Year Filter (optional) */}
      {selectedBrand && (
        <div className="animate-fadeInUp">
          <label className="label-caps flex items-center gap-2 mb-2">
            {t("yearOptional")}
            <InfoTooltip text={t("yearInfo")} />
          </label>
          <input
            type="number"
            className="input-field"
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
        <div className="relative z-30 animate-fadeInUp" ref={modelInputRef}>
          <label className="label-caps flex items-center gap-2 mb-2">
            {t("model")}
            <InfoTooltip text={t("vehicleSearchInfo")} />
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="X5, Clase C, Golf..."
            value={modelQuery}
            onChange={(e) => {
              setModelQuery(e.target.value);
              setShowModelSuggestions(true);
            }}
            onFocus={() => setShowModelSuggestions(true)}
            aria-label={t("model")}
          />

          {showModelSuggestions && filteredModels.length > 0 && (
            <div className="absolute z-50 w-full mt-2 bg-[var(--surface-popover)] border border-[var(--surface-border)] rounded-xl shadow-lg max-h-72 overflow-y-auto animate-slideDown">
              {filteredModels.map((item) => (
                <div
                  key={item.id}
                  className="px-4 py-3 hover:bg-white/10 cursor-pointer transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl border-b border-[var(--surface-border)] last:border-0"
                  onClick={() => handleModelSelect(item)}
                >
                  <div className="font-medium text-[var(--text-primary)]">{item.model}</div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] mt-1">
                    <span>{item.cv}cv</span>
                    <span className="opacity-30">·</span>
                    <span>{item.startYear}{item.endYear ? `–${item.endYear}` : "+"}</span>
                    <span className="opacity-30">·</span>
                    <span className="number-display font-semibold text-[var(--text-secondary)]">€{item.value.toLocaleString("de-DE")}</span>
                    {item.co2 ? (
                      <>
                        <span className="opacity-30">·</span>
                        <span>{item.co2}g CO₂</span>
                      </>
                    ) : null}
                    {item.fuelType === "Elc" && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 text-[10px] font-bold">EV</span>
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
        <div className="p-5 rounded-xl border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/[0.03] animate-fadeInUp">
          <div className="label-caps text-[var(--brand-blue)] mb-2">
            {t("vehicleSearch")}
          </div>
          <div className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
            {selectedVehicle.brand} {selectedVehicle.model}
          </div>
          <div className="number-display text-2xl text-[var(--brand-blue)] mt-1">
            €{selectedVehicle.value.toLocaleString("de-DE")}
          </div>
          {selectedVehicle.fuelType === "Elc" && (
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {t("evDetected")}
            </div>
          )}
        </div>
      )}

      {/* Manual Entry Link */}
      <button
        onClick={toggleManualMode}
        className="text-sm text-[var(--text-tertiary)] hover:text-[var(--brand-blue)] font-medium w-full text-center transition-colors duration-200"
      >
        {t("manualEntryLink")}
      </button>
    </div>
  );
}
