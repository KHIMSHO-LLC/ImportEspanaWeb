"use client";

import { AlertTriangle, ShieldCheck, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { formatCurrency } from "@/utils/currency";

interface Props {
  risk: "low" | "medium" | "high";
  ratio: number;
  declaredPrice: number;
  marketValue: number;
}

const COPY: Record<
  "es" | "en" | "de" | "fr" | "ru",
  Record<"low" | "medium" | "high", { title: string; body: string }>
> = {
  es: {
    low: {
      title: "Riesgo de inspección bajo",
      body: "Tu precio declarado coincide con la valoración del BOE. Es muy improbable que Hacienda emita una liquidación complementaria.",
    },
    medium: {
      title: "Riesgo de inspección moderado",
      body: "Tu precio está por debajo del valor de mercado. Hacienda podría revisar tu declaración. Conserva la factura y prueba del estado real del vehículo.",
    },
    high: {
      title: "Riesgo de inspección alto",
      body: "El precio declarado es muy inferior al valor BOE. Es probable que Hacienda emita una paralela cobrando la diferencia. Considera ajustar a la valoración oficial o documentar exhaustivamente el motivo (siniestro, kilometraje extremo).",
    },
  },
  en: {
    low: {
      title: "Low audit risk",
      body: "Your declared price matches the BOE valuation. Hacienda is very unlikely to issue a complementary settlement.",
    },
    medium: {
      title: "Moderate audit risk",
      body: "Your price is below the market value. Hacienda could review your declaration — keep the invoice and proof of the vehicle's real condition.",
    },
    high: {
      title: "High audit risk",
      body: "The declared price is well below the BOE value. Hacienda is likely to issue a complementary settlement charging the difference. Consider adjusting to the official valuation or documenting the reason (accident, extreme mileage).",
    },
  },
  de: {
    low: {
      title: "Geringes Prüfrisiko",
      body: "Ihr angegebener Preis entspricht der BOE-Bewertung. Eine ergänzende Steuerfestsetzung ist sehr unwahrscheinlich.",
    },
    medium: {
      title: "Mittleres Prüfrisiko",
      body: "Ihr Preis liegt unter dem Marktwert. Hacienda könnte Ihre Erklärung prüfen — Rechnung und Zustandsnachweis aufbewahren.",
    },
    high: {
      title: "Hohes Prüfrisiko",
      body: "Der angegebene Preis liegt deutlich unter dem BOE-Wert. Hacienda wird wahrscheinlich eine ergänzende Festsetzung mit der Differenz erlassen.",
    },
  },
  fr: {
    low: {
      title: "Risque de contrôle faible",
      body: "Votre prix déclaré correspond à l'évaluation BOE. Le fisc espagnol émettra rarement un complément.",
    },
    medium: {
      title: "Risque de contrôle modéré",
      body: "Votre prix est inférieur à la valeur de marché. Conservez la facture et la preuve de l'état du véhicule.",
    },
    high: {
      title: "Risque de contrôle élevé",
      body: "Le prix est très en-dessous de la valeur BOE. Le fisc émettra probablement un complément couvrant la différence.",
    },
  },
  ru: {
    low: {
      title: "Низкий риск проверки",
      body: "Ваша заявленная цена совпадает с оценкой BOE. Доначисление налога маловероятно.",
    },
    medium: {
      title: "Умеренный риск проверки",
      body: "Цена ниже рыночной. Налоговая может проверить декларацию — сохраните счёт-фактуру и доказательства реального состояния авто.",
    },
    high: {
      title: "Высокий риск проверки",
      body: "Цена существенно ниже стоимости BOE. Налоговая, вероятно, доначислит налог на разницу.",
    },
  },
};

export function AuditRiskBadge({ risk, ratio, declaredPrice, marketValue }: Props) {
  const { language } = useLanguage();
  const c = COPY[(language as keyof typeof COPY) ?? "es"][risk];

  if (declaredPrice <= 0 || marketValue <= 0) return null;

  const palette = {
    low: {
      bg: "bg-emerald-500/[0.06]",
      border: "border-emerald-500/30",
      icon: <ShieldCheck size={20} className="text-emerald-500" />,
      title: "text-emerald-700 dark:text-emerald-300",
    },
    medium: {
      bg: "bg-amber-500/[0.06]",
      border: "border-amber-500/30",
      icon: <ShieldAlert size={20} className="text-amber-500" />,
      title: "text-amber-700 dark:text-amber-300",
    },
    high: {
      bg: "bg-red-500/[0.06]",
      border: "border-red-500/30",
      icon: <AlertTriangle size={20} className="text-red-500" />,
      title: "text-red-700 dark:text-red-300",
    },
  }[risk];

  const pct = Math.round(ratio * 100);
  return (
    <div
      className={`p-4 rounded-xl border ${palette.bg} ${palette.border} flex gap-3 items-start`}
    >
      <div className="shrink-0 mt-0.5">{palette.icon}</div>
      <div className="flex-1 space-y-1">
        <div className={`font-semibold text-sm ${palette.title}`}>{c.title}</div>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {c.body}
        </p>
        <div className="text-xs text-[var(--text-tertiary)] mt-2 number-display">
          {formatCurrency(declaredPrice)} declarado · {formatCurrency(marketValue)} BOE · {pct}%
        </div>
      </div>
    </div>
  );
}
