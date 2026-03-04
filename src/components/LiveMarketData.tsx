"use client";

import { useEffect, useState } from "react";
import { TrendingDown, TrendingUp, Activity, Fuel, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LiveStats {
  exchangeRates: {
    GBP: number;
    PLN: number;
  };
  fuel: {
    dieselSpain: number;
  };
  stats: {
    monthlyImports: number;
    period: string;
  };
}

export function LiveMarketData() {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";

  const [data, setData] = useState<LiveStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/live-stats");
        if (res.ok) {
          const stats = await res.json();
          setData(stats);
        }
      } catch (e) {
        console.error("Failed to load live market data", e);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading || !data) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-gray-100 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <Activity size={16} className="text-blue-600 animate-pulse" />
          {lang === "es" ? "Mercado en Tiempo Real" : "Live Market Data"}
        </h3>
        <div className="text-xs text-gray-500 font-medium bg-white px-2 py-1 rounded-md border border-gray-200 shadow-sm">
          {lang === "es" ? "Actualizado: " : "Updated: "}
          <span className="text-green-600 font-bold">Hoy</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-100">
        {/* EUR to GBP */}
        <div className="p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
            <Globe size={14} /> 🇪🇺 EUR → 🇬🇧 GBP
          </div>
          <div className="text-xl font-black text-gray-900">
            £{data.exchangeRates.GBP.toFixed(4)}
          </div>
          <div className="flex items-center gap-1 text-xs text-green-600 mt-1 font-medium">
            <TrendingUp size={12} />
            Estable
          </div>
        </div>

        {/* EUR to PLN */}
        <div className="p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
            <Globe size={14} /> 🇪🇺 EUR → 🇵🇱 PLN
          </div>
          <div className="text-xl font-black text-gray-900">
            zł{data.exchangeRates.PLN.toFixed(2)}
          </div>
          <div className="flex items-center gap-1 text-xs text-amber-600 mt-1 font-medium">
            Estable
          </div>
        </div>

        {/* Diesel Spain */}
        <div className="p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
            <Fuel size={14} />{" "}
            {lang === "es" ? "Diésel España" : "Diesel Spain"}
          </div>
          <div className="text-xl font-black text-gray-900">
            €{data.fuel.dieselSpain.toFixed(3)}/L
          </div>
          <div className="flex items-center gap-1 text-xs text-green-600 mt-1 font-medium">
            <TrendingDown size={12} />
            Nacional Media
          </div>
        </div>

        {/* Import Activity */}
        <div className="p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
            🚗 {lang === "es" ? "Matriculaciones" : "Registrations"}
          </div>
          <div className="text-xl font-black text-blue-600">
            {data.stats.monthlyImports.toLocaleString("de-DE")}{" "}
            <span className="text-sm font-medium text-gray-500">/mo</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
            DGT {data.stats.period}
          </div>
        </div>
      </div>
    </div>
  );
}
