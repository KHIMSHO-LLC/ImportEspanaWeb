"use client";

import { useLanguage } from "@/context/LanguageContext";

const APP_STORE_BASE = "https://apps.apple.com/ar/app/importespana/id6759112789";

const COPY = {
  es: {
    badge: "App iOS",
    title: "Calcula sin límite, guarda tu historial y exporta PDF",
    subtitle:
      "Versión Pro: cálculos ilimitados, sin anuncios y comparativa por comunidad. Disponible en iPhone y iPad.",
    cta: "Descargar en App Store",
    perk1: "Sin límite diario",
    perk2: "Historial guardado",
    perk3: "Exportar PDF",
  },
  en: {
    badge: "iOS App",
    title: "Unlimited calculations, saved history and PDF export",
    subtitle:
      "Pro version: unlimited calculations, no ads, and region-by-region comparison. iPhone and iPad.",
    cta: "Download on the App Store",
    perk1: "No daily limit",
    perk2: "Saved history",
    perk3: "Export PDF",
  },
  de: {
    badge: "iOS App",
    title: "Unbegrenzt rechnen, Verlauf speichern, PDF exportieren",
    subtitle:
      "Pro-Version: unbegrenzte Berechnungen, werbefrei und Regionsvergleich. iPhone und iPad.",
    cta: "Im App Store laden",
    perk1: "Kein Tageslimit",
    perk2: "Gespeicherter Verlauf",
    perk3: "PDF-Export",
  },
  fr: {
    badge: "App iOS",
    title: "Calculs illimités, historique sauvegardé, export PDF",
    subtitle:
      "Version Pro : calculs illimités, sans publicité, comparaison par région. iPhone et iPad.",
    cta: "Télécharger sur l'App Store",
    perk1: "Sans limite quotidienne",
    perk2: "Historique sauvegardé",
    perk3: "Export PDF",
  },
  ru: {
    badge: "iOS App",
    title: "Без лимита, сохранённая история и экспорт PDF",
    subtitle:
      "Pro-версия: безлимитные расчёты, без рекламы, сравнение регионов. iPhone и iPad.",
    cta: "Загрузить в App Store",
    perk1: "Без дневного лимита",
    perk2: "История расчётов",
    perk3: "Экспорт в PDF",
  },
} as const;

type Variant = "hero" | "inline" | "compact";

export function AppCallout({
  source,
  variant = "inline",
}: {
  source: string;
  variant?: Variant;
}) {
  const { language } = useLanguage();
  const t = COPY[language as keyof typeof COPY] ?? COPY.es;

  const url = `${APP_STORE_BASE}?utm_source=website&utm_medium=cta&utm_campaign=${encodeURIComponent(
    source,
  )}`;

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "app_store_click", {
        source,
        platform: "ios",
        variant,
      });
    }
  };

  if (variant === "compact") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90"
        style={{
          background: "var(--brand-blue)",
          color: "white",
        }}
      >
        {t.cta}
      </a>
    );
  }

  if (variant === "hero") {
    return (
      <div
        className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-blue) 0%, #1e40af 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-32 translate-x-32" style={{ background: "white" }} />
        <div className="relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/15 text-white px-2.5 py-1 rounded-full">
            {t.badge}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {t.title}
          </h3>
          <p className="text-sm text-white/80 leading-relaxed max-w-lg">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap gap-2">
            {[t.perk1, t.perk2, t.perk3].map((perk) => (
              <span
                key={perk}
                className="text-[11px] font-medium bg-white/10 border border-white/15 text-white/85 px-2.5 py-1 rounded-full"
              >
                {perk}
              </span>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white text-[var(--brand-blue)] hover:bg-white/95 transition-all duration-200 active:scale-[0.98] mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {t.cta}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1 space-y-1.5">
        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-blue)]">
          {t.badge}
        </span>
        <h3 className="font-bold text-[var(--text-primary)] text-base leading-snug">
          {t.title}
        </h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {t.subtitle}
        </p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="btn-primary inline-flex items-center justify-center px-4 py-2.5 text-sm shrink-0"
      >
        {t.cta}
      </a>
    </div>
  );
}
