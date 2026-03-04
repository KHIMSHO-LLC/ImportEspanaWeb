"use client";

import { useEffect, useState } from "react";
import { TrendingDown, TrendingUp, Activity, Fuel, Globe, Car } from "lucide-react";
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
      <div className="bg-[#13131a] border border-[#2a2a3a] rounded p-4 mb-8">
        <div className="h-4 bg-[#2a2a3a] rounded w-1/3 mb-4 animate-pulse"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-[#1a1a24] rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#13131a] border border-[#2a2a3a] rounded overflow-hidden mb-8">
      {/* Header */}
      <div className="bg-[#1a1a24] px-4 py-3 border-b border-[#2a2a3a] flex items-center justify-between">
        <h3 className="text-micro text-[#8b8b9a] flex items-center gap-2">
          <Activity size={14} className="text-[#00d4aa]" />
          {lang === "es" ? "MERCADO EN TIEMPO REAL" : "LIVE MARKET DATA"}
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#00d4aa] rounded-full animate-pulse"></div>
          <span className="text-micro text-[#6b6b7a]">
            {lang === "es" ? "Actualizado hoy" : "Updated today"}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#2a2a3a]">
        {/* EUR to GBP */}
        <div className="p-4 hover:bg-[#1a1a24] transition-colors group">
          <div className="flex items-center gap-1.5 text-micro text-[#6b6b7a] mb-2">
            <Globe size={12} />
            <span>EUR → GBP</span>
          </div>
          <div className="text-mono text-[#f5f5f7] text-xl">
            £{data.exchangeRates.GBP.toFixed(4)}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-[#00d4aa] mt-1 font-medium">
            <TrendingUp size={10} />
            Estable
          </div>
        </div>

        {/* EUR to PLN */}
        <div className="p-4 hover:bg-[#1a1a24] transition-colors group">
          <div className="flex items-center gap-1.5 text-micro text-[#6b6b7a] mb-2">
            <Globe size={12} />
            <span>EUR → PLN</span>
          </div>
          <div className="text-mono text-[#f5f5f7] text-xl">
            zł{data.exchangeRates.PLN.toFixed(2)}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-[#ffd700] mt-1 font-medium">
            Estable
          </div>
        </div>

        {/* Diesel Spain */}
        <div className="p-4 hover:bg-[#1a1a24] transition-colors group">
          <div className="flex items-center gap-1.5 text-micro text-[#6b6b7a] mb-2">
            <Fuel size={12} />
            <span>{lang === "es" ? "Diésel ESP" : "Diesel ESP"}</span>
          </div>
          <div className="text-mono text-[#f5f5f7] text-xl">
            €{data.fuel.dieselSpain.toFixed(3)}/L
          </div>
          <div className="flex items-center gap-1 text-[10px] text-[#00d4aa] mt-1 font-medium">
            <TrendingDown size={10} />
            Media nacional
          </div>
        </div>

        {/* Import Activity */}
        <div className="p-4 hover:bg-[#1a1a24] transition-colors group">
          <div className="flex items-center gap-1.5 text-micro text-[#6b6b7a] mb-2">
            <Car size={12} />
            <span>{lang === "es" ? "Matriculaciones" : "Registrations"}</span>
          </div>
          <div className="text-mono text-[#00d4aa] text-xl">
            {data.stats.monthlyImports.toLocaleString("de-DE")}
            <span className="text-[#6b6b7a] text-sm ml-1">/mo</span>
          </div>
          <div className="text-[10px] text-[#4a4a5a] mt-1">
            DGT {data.stats.period}
          </div>
        </div>
      </div>
    </div>
  );
}
