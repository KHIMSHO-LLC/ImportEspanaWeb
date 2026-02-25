"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BarChart3, Car, MapPin, Percent } from "lucide-react";

const stats = {
  es: [
    {
      icon: Car,
      value: "47,000+",
      label: "Coches importados a España cada año",
    },
    {
      icon: BarChart3,
      value: "€3,000–8,000",
      label: "Ahorro medio vs comprar en España",
    },
    {
      icon: MapPin,
      value: "17",
      label: "Comunidades con diferentes tipos de ITP",
    },
    {
      icon: Percent,
      value: "0–14.75%",
      label: "Rango del impuesto de matriculación",
    },
  ],
  en: [
    {
      icon: Car,
      value: "47,000+",
      label: "Cars imported to Spain every year",
    },
    {
      icon: BarChart3,
      value: "€3,000–8,000",
      label: "Average savings vs buying in Spain",
    },
    {
      icon: MapPin,
      value: "17",
      label: "Regions with different ITP tax rates",
    },
    {
      icon: Percent,
      value: "0–14.75%",
      label: "Registration tax range based on CO₂",
    },
  ],
};

const heroText = {
  es: {
    title: "Calcula el coste real de importar tu coche",
    subtitle:
      "Descubre en segundos cuánto pagarás en impuestos, tasas y transporte. Sin sorpresas.",
    cta: "Usar calculadora gratis",
    trusted: "Datos oficiales del BOE",
  },
  en: {
    title: "Calculate the real cost of importing your car",
    subtitle:
      "Find out in seconds what you'll pay in taxes, fees, and transport. No surprises.",
    cta: "Use free calculator",
    trusted: "Official BOE data",
  },
};

export const HeroStats = () => {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const text = heroText[lang];
  const items = stats[lang];

  return (
    <div className="mb-6 space-y-5">
      {/* Hero Text */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
          {text.title}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">{text.subtitle}</p>
        <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full border border-green-200">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {text.trusted}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {items.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-100 p-3 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <stat.icon className="w-5 h-5 text-blue-500 mx-auto mb-1.5" />
            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500 leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
