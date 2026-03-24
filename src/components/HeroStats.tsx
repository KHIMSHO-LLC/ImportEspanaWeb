"use client";

import { useLanguage } from "@/context/LanguageContext";

const stats = {
  es: [
    { value: "47,000+", label: "Coches importados/año" },
    { value: "€3k–8k", label: "Ahorro medio" },
    { value: "17", label: "Comunidades autónomas" },
    { value: "0–14.75%", label: "Rango impuesto" },
  ],
  en: [
    { value: "47,000+", label: "Cars imported/year" },
    { value: "€3k–8k", label: "Average savings" },
    { value: "17", label: "Tax regions" },
    { value: "0–14.75%", label: "Tax range" },
  ],
};

const heroText = {
  es: {
    eyebrow: "Calculadora gratuita 2026",
    title: "El coste real de importar tu coche",
    subtitle:
      "Impuestos, tasas y transporte — calculados en segundos con datos oficiales del BOE.",
    badges: ["✅ 100% Gratis", "📋 BOE oficial 2026", "⚡ Resultado inmediato", "🇪🇸 17 comunidades"],
  },
  en: {
    eyebrow: "Free calculator 2026",
    title: "The real cost of importing your car",
    subtitle:
      "Taxes, fees and transport — calculated in seconds with official BOE data.",
    badges: ["✅ 100% Free", "📋 Official BOE 2026", "⚡ Instant result", "🇪🇸 17 regions"],
  },
};

export const HeroStats = () => {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const text = heroText[lang];

  return (
    <div className="space-y-4 animate-fadeInUp">
      <div className="label-caps text-[var(--brand-blue)] flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]" />
        {text.eyebrow}
      </div>
      <h1 className="heading-display text-3xl sm:text-4xl text-[var(--text-primary)]">
        {text.title}
      </h1>
      <p className="text-[var(--text-secondary)] text-base max-w-xl leading-relaxed">
        {text.subtitle}
      </p>
      <div className="flex flex-wrap gap-2">
        {text.badges.map((badge, i) => (
          <span key={i} className="trust-badge">{badge}</span>
        ))}
      </div>
    </div>
  );
};

export const StatsBanner = () => {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const items = stats[lang];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--surface-border)] rounded-xl overflow-hidden animate-fadeInUp">
      {items.map((stat, i) => (
        <div
          key={i}
          className={`bg-[var(--surface)] p-4 sm:p-5 animate-fadeInUp stagger-${i + 1}`}
        >
          <div className="number-display text-xl sm:text-2xl text-[var(--text-primary)]">
            {stat.value}
          </div>
          <div className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
