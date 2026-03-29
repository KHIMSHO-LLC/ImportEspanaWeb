"use client";

import { useLanguage } from "@/context/LanguageContext";

const stats = {
  es: [
    { value: "47,000+", label: "Coches importados/año" },
    { value: "€3k–8k",  label: "Ahorro medio" },
    { value: "17",      label: "Comunidades" },
    { value: "14.75%",  label: "Máx. impuesto" },
  ],
  en: [
    { value: "47,000+", label: "Cars imported/year" },
    { value: "€3k–8k",  label: "Average savings" },
    { value: "17",      label: "Regions" },
    { value: "14.75%",  label: "Max tax rate" },
  ],
};

const heroText = {
  es: {
    eyebrow: "Calculadora gratuita · 2026",
    line1: "El coste real",
    line2: "de importar",
    line3: "tu coche",
    subtitle:
      "Impuestos, tasas y transporte calculados en segundos con datos oficiales del BOE.",
    badges: [
      "✓ 100% Gratis",
      "BOE oficial 2026",
      "Resultado inmediato",
      "17 comunidades",
    ],
  },
  en: {
    eyebrow: "Free calculator · 2026",
    line1: "The real cost",
    line2: "of importing",
    line3: "your car",
    subtitle:
      "Taxes, fees and transport — calculated in seconds with official BOE data.",
    badges: [
      "✓ 100% Free",
      "Official BOE 2026",
      "Instant result",
      "17 regions",
    ],
  },
};

export const HeroStats = () => {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const text = heroText[lang];

  return (
    <div className="space-y-6 pt-2 animate-fadeInUp">
      {/* Eyebrow with flanking amber rules */}
      <div className="flex items-center gap-4 animate-fadeInUp stagger-1">
        <div
          className="h-px flex-1 max-w-[56px]"
          style={{
            background: "var(--brand-amber)",
            opacity: 0.45,
            transformOrigin: "left",
            animation: "amber-line-grow 0.9s var(--ease-out-expo) 0.1s both",
          }}
        />
        <span className="hero-eyebrow">{text.eyebrow}</span>
        <div
          className="h-px flex-1 max-w-[56px]"
          style={{
            background: "var(--brand-amber)",
            opacity: 0.45,
            transformOrigin: "right",
            animation: "amber-line-grow 0.9s var(--ease-out-expo) 0.1s both",
          }}
        />
      </div>

      {/* Cinematic serif headline */}
      <h1
        className="hero-display animate-fadeInUp stagger-2"
        style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
      >
        <span className="block">{text.line1}</span>
        <span className="block">{text.line2}</span>
        <span
          className="block"
          style={{ color: "var(--brand-amber)" }}
        >
          {text.line3}
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="text-[var(--text-secondary)] leading-relaxed max-w-md animate-fadeInUp stagger-3"
        style={{ fontSize: "0.9375rem" }}
      >
        {text.subtitle}
      </p>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-2 animate-fadeInUp stagger-4">
        {text.badges.map((badge, i) => (
          <span key={i} className="trust-badge">
            {badge}
          </span>
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
    <div
      className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden animate-fadeInUp"
      style={{ background: "var(--glass-border)" }}
    >
      {items.map((stat, i) => (
        <div
          key={i}
          className={`bg-[var(--surface)] px-5 py-5 sm:py-6 animate-fadeInUp stagger-${i + 1} relative`}
        >
          {/* Amber accent rule above number */}
          <div className="stats-item-rule" />
          <div className="stat-number-display text-2xl sm:text-3xl mb-1">
            {stat.value}
          </div>
          <div
            className="text-[var(--text-tertiary)] font-medium uppercase tracking-wide"
            style={{ fontSize: "0.625rem" }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
