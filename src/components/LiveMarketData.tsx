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
      <div className="rounded-xl border border-[var(--surface-border)] p-4">
        <div className="h-5 skeleton rounded w-1/3 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 skeleton rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[var(--surface-border)] overflow-hidden bg-[var(--surface-elevated)]">
      <div className="px-4 py-3 border-b border-[var(--surface-border)] flex items-center justify-between bg-[var(--surface-dim)]">
        <h3 className="label-caps flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse-dot_2s_ease-in-out_infinite]" />
          {lang === "es" ? "Mercado en Tiempo Real" : "Live Market Data"}
        </h3>
        <div className="text-xs text-[var(--text-tertiary)] font-medium px-2 py-1 rounded-md border border-[var(--surface-border)]">
          {lang === "es" ? "Actualizado: " : "Updated: "}
          <span className="text-emerald-600 font-bold">Hoy</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[var(--surface-border)]">
        {/* EUR to GBP */}
        <div className="p-4 hover:bg-[var(--surface-dim)] transition-colors duration-200">
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-1.5">
            <Globe size={12} /> EUR → GBP
          </div>
          <div className="number-display text-xl text-[var(--text-primary)]">
            £{data.exchangeRates.GBP.toFixed(4)}
          </div>
          <div className="flex items-center gap-1 text-xs text-emerald-600 mt-1.5 font-medium">
            <TrendingUp size={12} />
            Estable
          </div>
        </div>

        {/* EUR to PLN */}
        <div className="p-4 hover:bg-[var(--surface-dim)] transition-colors duration-200">
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-1.5">
            <Globe size={12} /> EUR → PLN
          </div>
          <div className="number-display text-xl text-[var(--text-primary)]">
            zł{data.exchangeRates.PLN.toFixed(2)}
          </div>
          <div className="flex items-center gap-1 text-xs text-amber-600 mt-1.5 font-medium">
            Estable
          </div>
        </div>

        {/* Diesel Spain */}
        <div className="p-4 hover:bg-[var(--surface-dim)] transition-colors duration-200">
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-1.5">
            <Fuel size={12} />{" "}
            {lang === "es" ? "Diésel España" : "Diesel Spain"}
          </div>
          <div className="number-display text-xl text-[var(--text-primary)]">
            €{data.fuel.dieselSpain.toFixed(3)}/L
          </div>
          <div className="flex items-center gap-1 text-xs text-emerald-600 mt-1.5 font-medium">
            <TrendingDown size={12} />
            Nacional Media
          </div>
        </div>

        {/* Import Activity */}
        <div className="p-4 hover:bg-[var(--surface-dim)] transition-colors duration-200">
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-1.5">
            {lang === "es" ? "Matriculaciones" : "Registrations"}
          </div>
          <div className="number-display text-xl text-[var(--brand-blue)]">
            {data.stats.monthlyImports.toLocaleString("de-DE")}{" "}
            <span className="text-sm font-medium text-[var(--text-tertiary)]">/mo</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[var(--text-tertiary)] mt-1.5">
            DGT {data.stats.period}
          </div>
        </div>
      </div>
    </div>
  );
}
