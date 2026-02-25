"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TrendingUp, Fuel, Car } from "lucide-react";
import { useEffect, useState } from "react";

interface LiveStats {
  exchangeRates: {
    base: string;
    rates: Record<string, number>;
    lastUpdated: string;
  };
  fuelPrices: {
    diesel: number;
    gasolina95: number;
    lastUpdated: string;
  };
  importStats: {
    monthlyImports: number;
    month: string;
    year: number;
    yearlyTotal2025: number;
  };
}

const currencyFlags: Record<string, string> = {
  GBP: "🇬🇧",
  PLN: "🇵🇱",
  CZK: "🇨🇿",
  CHF: "🇨🇭",
};

const DISPLAY_CURRENCIES = ["GBP", "PLN", "CZK", "CHF"];

export function LiveMarketData() {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const [stats, setStats] = useState<LiveStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/live-stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const t = {
    es: {
      title: "Datos del mercado",
      subtitle: "Actualizados hoy",
      exchangeTitle: "Tipos de cambio",
      fuelTitle: "Combustible en España",
      diesel: "Diésel",
      gasoline: "Gasolina 95",
      perLiter: "/litro",
      importsTitle: "Importaciones",
      carsMonth: "coches/mes",
      totalPrevYear: "total 2025",
      liveData: "Datos en directo",
      from: "de",
    },
    en: {
      title: "Market data",
      subtitle: "Updated today",
      exchangeTitle: "Exchange rates",
      fuelTitle: "Fuel in Spain",
      diesel: "Diesel",
      gasoline: "Gasoline 95",
      perLiter: "/liter",
      importsTitle: "Car imports",
      carsMonth: "cars/month",
      totalPrevYear: "total 2025",
      liveData: "Live data",
      from: "from",
    },
  }[lang];

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-5 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-32 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-gray-100 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
            {t.liveData}
          </span>
        </div>
        <span className="text-[10px] text-gray-400">{t.subtitle}</span>
      </div>

      <div className="p-4">
        {/* Exchange Rates Row */}
        <div className="mb-3">
          <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
            <TrendingUp size={10} />
            {t.exchangeTitle} (1 EUR =)
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {DISPLAY_CURRENCIES.map((code) => {
              const rate = stats.exchangeRates.rates[code];
              if (!rate) return null;
              return (
                <div
                  key={code}
                  className="bg-gray-50 rounded-xl px-3 py-2.5 flex items-center gap-2 hover:bg-blue-50 transition-colors"
                >
                  <span className="text-lg">{currencyFlags[code]}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-400">{code}</div>
                    <div className="text-sm font-bold text-gray-900 tabular-nums">
                      {rate < 10 ? rate.toFixed(4) : rate.toFixed(2)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fuel + Imports Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {/* Diesel */}
          <div className="bg-amber-50 rounded-xl px-3 py-2.5">
            <div className="flex items-center gap-1 mb-0.5">
              <Fuel size={12} className="text-amber-600" />
              <span className="text-[10px] font-medium text-amber-700 uppercase">
                {t.diesel}
              </span>
            </div>
            <div className="text-sm font-bold text-gray-900 tabular-nums">
              €{stats.fuelPrices.diesel.toFixed(3)}
              <span className="text-[10px] font-normal text-gray-400 ml-0.5">
                {t.perLiter}
              </span>
            </div>
          </div>

          {/* Gasoline */}
          <div className="bg-green-50 rounded-xl px-3 py-2.5">
            <div className="flex items-center gap-1 mb-0.5">
              <Fuel size={12} className="text-green-600" />
              <span className="text-[10px] font-medium text-green-700 uppercase">
                {t.gasoline}
              </span>
            </div>
            <div className="text-sm font-bold text-gray-900 tabular-nums">
              €{stats.fuelPrices.gasolina95.toFixed(3)}
              <span className="text-[10px] font-normal text-gray-400 ml-0.5">
                {t.perLiter}
              </span>
            </div>
          </div>

          {/* Monthly imports */}
          <div className="bg-blue-50 rounded-xl px-3 py-2.5 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-0.5">
              <Car size={12} className="text-blue-600" />
              <span className="text-[10px] font-medium text-blue-700 uppercase">
                {t.importsTitle}
              </span>
            </div>
            <div className="text-sm font-bold text-gray-900 tabular-nums">
              {stats.importStats.monthlyImports.toLocaleString()}
              <span className="text-[10px] font-normal text-gray-400 ml-1">
                {t.carsMonth}
              </span>
            </div>
            <div className="text-[10px] text-gray-400 mt-0.5">
              {stats.importStats.yearlyTotal2025.toLocaleString()}{" "}
              {t.totalPrevYear}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
