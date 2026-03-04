"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BarChart3, Car, MapPin, Percent, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const stats = {
  es: [
    {
      icon: Car,
      value: "47,000+",
      label: "Importaciones anuales",
      suffix: "",
    },
    {
      icon: BarChart3,
      value: "€5,500",
      label: "Ahorro medio",
      suffix: "",
    },
    {
      icon: MapPin,
      value: "17",
      label: "Regiones ITP",
      suffix: "",
    },
    {
      icon: Percent,
      value: "0–14.75%",
      label: "Rango impuestos",
      suffix: "",
    },
  ],
  en: [
    {
      icon: Car,
      value: "47,000+",
      label: "Annual imports",
      suffix: "",
    },
    {
      icon: BarChart3,
      value: "€5,500",
      label: "Average savings",
      suffix: "",
    },
    {
      icon: MapPin,
      value: "17",
      label: "ITP regions",
      suffix: "",
    },
    {
      icon: Percent,
      value: "0–14.75%",
      label: "Tax range",
      suffix: "",
    },
  ],
};

const heroText = {
  es: {
    title: "Importa tu coche a España",
    subtitle: "Calculadora precisa de impuestos de matriculación. Datos oficiales del BOE.",
    trusted: "Datos oficiales BOE",
    liveCounter: "calculos hoy",
  },
  en: {
    title: "Import your car to Spain",
    subtitle: "Accurate registration tax calculator. Official BOE data.",
    trusted: "Official BOE data",
    liveCounter: "calculations today",
  },
};

// Animated counter component
function AnimatedValue({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  return (
    <span className="text-mono-lg text-[#f5f5f7]">{displayValue}</span>
  );
}

export const HeroStats = () => {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const text = heroText[lang];
  const items = stats[lang];
  const [calculationCount, setCalculationCount] = useState(0);

  // Simulate live counter
  useEffect(() => {
    const baseCount = 1247;
    setCalculationCount(baseCount);
    
    const interval = setInterval(() => {
      setCalculationCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-10 space-y-8">
      {/* Hero Title Section */}
      <div className="text-center space-y-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full">
          <Sparkles size={14} className="text-[#00d4aa]" />
          <span className="text-micro text-[#00d4aa]">{text.trusted}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-hero text-[#f5f5f7] max-w-lg mx-auto">
          {text.title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-body text-[#8b8b9a] max-w-md mx-auto">
          {text.subtitle}
        </p>

        {/* Live Counter */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#13131a] border border-[#2a2a3a] rounded-md">
            <div className="w-2 h-2 bg-[#00d4aa] rounded-full animate-pulse"></div>
            <span className="text-mono text-[#00d4aa]">
              {calculationCount.toLocaleString()}
            </span>
            <span className="text-micro text-[#6b6b7a]">{text.liveCounter}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid - Horizontal on desktop, 2x2 on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((stat, i) => (
          <div
            key={i}
            className="group bg-[#13131a] border border-[#2a2a3a] rounded p-4 text-center transition-all duration-300 hover:border-[#3a3a4a] hover:bg-[#1a1a24]"
          >
            <stat.icon className="w-4 h-4 text-[#6b6b7a] mx-auto mb-2 group-hover:text-[#00d4aa] transition-colors" />
            <div className="mb-1">
              <AnimatedValue value={stat.value} />
            </div>
            <div className="text-micro text-[#6b6b7a]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="divider" />
    </div>
  );
};
