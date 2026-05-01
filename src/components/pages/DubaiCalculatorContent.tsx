"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { HomeContent } from "@/app/page";
import SeoSchema from "@/components/SeoSchema";
import { useLanguage } from "@/context/LanguageContext";
import { DUBAI_CONTENT } from "@/i18n/dubai";
import {
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Ship,
  FileCheck,
  ClipboardList,
  CheckCircle,
  Car,
  Clock,
  ArrowRight,
  Info,
} from "lucide-react";

const STEP_ICONS = [
  <Car key="car" size={20} className="text-[var(--brand-blue)]" />,
  <Ship key="ship" size={20} className="text-[var(--brand-blue)]" />,
  <ClipboardList key="clip" size={20} className="text-[var(--brand-blue)]" />,
  <FileCheck key="check" size={20} className="text-[var(--brand-blue)]" />,
  <CheckCircle key="done" size={20} className="text-[var(--brand-blue)]" />,
];

const BUILDUP_BARS = [
  { bar: 56, color: "bg-[var(--brand-blue)]" },
  { bar: 8, color: "bg-[var(--brand-blue-light)]" },
  { bar: 10, color: "bg-amber-400" },
  { bar: 20, color: "bg-amber-500" },
  { bar: 6, color: "bg-[var(--brand-gold)]" },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[var(--surface-border)] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left bg-[var(--surface)] hover:bg-[var(--surface-dim)] transition-colors"
      >
        <span className="font-semibold text-[var(--text-primary)] pr-4 text-sm">{q}</span>
        {open ? (
          <ChevronUp size={16} className="text-[var(--brand-blue)] shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-[var(--text-tertiary)] shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-4 pt-2 bg-[var(--surface-dim)] text-sm text-[var(--text-secondary)] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function DubaiCalculatorContent() {
  const { language } = useLanguage();
  const c = DUBAI_CONTENT[language] ?? DUBAI_CONTENT.en;

  const breadcrumbs = [
    { name: c.breadcrumbHome, url: "https://importespana.com" },
    { name: c.breadcrumbCurrent, url: "https://importespana.com/importar-coche-dubai" },
  ];

  return (
    <>
      <SeoSchema
        breadcrumbs={breadcrumbs}
        faqItems={c.faqItems}
        showHomeSchemas={false}
      />

      <div className="max-w-3xl mx-auto px-4 pt-8 pb-20 space-y-10">

        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--text-tertiary)] flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">{c.breadcrumbHome}</Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">{c.breadcrumbCurrent}</span>
        </nav>

        {/* Hero */}
        <div className="card-hero p-7 md:p-10">
          <div className="relative z-10 space-y-4">
            <div className="label-caps text-white/60 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
              {c.guideBadge}
            </div>
            <div className="flex items-center gap-3 text-3xl">
              🇦🇪 <ArrowRight size={20} className="text-white/50" /> 🇪🇸
            </div>
            <h1 className="heading-display text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
              {c.heroTitle}
            </h1>
            <p className="text-white/70 text-base max-w-xl leading-relaxed">
              {c.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {c.trustBadges.map((b) => (
                <span key={b} className="text-xs font-semibold bg-white/10 border border-white/20 text-white/80 px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cost overview */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "6,5%", label: c.costTariffLabel, sub: c.costTariffSub, color: "text-[var(--brand-blue)]" },
            { value: "21%", label: c.costVatLabel, sub: c.costVatSub, color: "text-[var(--brand-blue)]" },
            { value: c.costTotalValue, label: c.costTotalLabel, sub: c.costTotalSub, color: "text-[var(--warning)]" },
          ].map((item) => (
            <div key={item.label} className="card p-4 text-center space-y-1">
              <div className={`number-display text-2xl font-bold ${item.color}`}>{item.value}</div>
              <div className="font-semibold text-[var(--text-primary)] text-xs leading-tight">{item.label}</div>
              <div className="text-[10px] text-[var(--text-tertiary)]">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Warning callout */}
        <div className="flex items-start gap-3 p-4 rounded-xl border border-amber-200 bg-amber-50">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <span className="font-semibold text-amber-800">{c.warningTitle}</span>{" "}
            <span className="text-amber-700">{c.warningText}</span>
          </div>
        </div>

        {/* Calculator */}
        <div className="space-y-4">
          <div>
            <h2 className="heading-section text-xl text-[var(--text-primary)]">
              {c.calculatorHeading}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              {c.calculatorSubheading}
            </p>
          </div>
          <Suspense fallback={
            <div className="card p-8 text-center text-sm text-[var(--text-tertiary)]">
              <div className="w-8 h-8 border-2 border-[var(--brand-blue)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              {c.calculatorLoading}
            </div>
          }>
            <HomeContent
              prefilledCountry="UAE"
              prefilledImportType="NonEU"
            />
          </Suspense>
        </div>

        {/* Cost build-up */}
        <div className="card p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Info size={16} className="text-[var(--brand-blue)] shrink-0" />
            <h3 className="font-bold text-[var(--text-primary)]">{c.costBuildupHeading}</h3>
          </div>
          <div className="space-y-2 text-sm">
            {c.costBuildupRows.map((row, i) => (
              <div key={row.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[var(--text-secondary)]">{row.label}</span>
                  <span className="font-semibold text-[var(--text-primary)] number-display">{row.value}</span>
                </div>
                <div className="h-1.5 bg-[var(--surface-border)] rounded-full overflow-hidden">
                  <div className={`h-full ${BUILDUP_BARS[i].color} rounded-full`} style={{ width: `${BUILDUP_BARS[i].bar}%` }} />
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-[var(--surface-border)] flex justify-between font-bold text-sm">
              <span className="text-[var(--text-primary)]">{c.costBuildupTotalLabel}</span>
              <span className="number-display text-[var(--brand-blue)]">{c.costBuildupTotalValue}</span>
            </div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)]">{c.costBuildupNote}</p>
        </div>

        {/* Process steps */}
        <div className="space-y-4">
          <h2 className="heading-section text-xl text-[var(--text-primary)]">
            {c.processHeading}
          </h2>
          <div className="space-y-3">
            {c.processSteps.map((s, i) => (
              <div key={i} className="card p-5 flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[rgba(29,78,216,0.08)] flex items-center justify-center shrink-0">
                  {STEP_ICONS[i]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="font-semibold text-[var(--text-primary)] text-sm">{s.title}</div>
                    <div className="flex items-center gap-1 text-xs text-[var(--text-tertiary)] shrink-0">
                      <Clock size={11} />
                      {s.time}
                    </div>
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">{s.desc}</div>
                </div>
                <div className="w-6 h-6 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="space-y-4">
          <h2 className="heading-section text-xl text-[var(--text-primary)]">
            {c.comparisonHeading}
          </h2>
          <div className="card overflow-hidden">
            <div className="grid grid-cols-3 text-xs font-semibold text-[var(--text-tertiary)] bg-[var(--surface-dim)] px-4 py-3 border-b border-[var(--surface-border)] label-caps">
              <span>{c.comparisonHeaderFactor}</span>
              <span className="text-center">{c.comparisonHeaderDubai}</span>
              <span className="text-center">{c.comparisonHeaderGermany}</span>
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-sm px-4 py-3 border-b border-[var(--surface-border)] last:border-0 hover:bg-[var(--surface-dim)] transition-colors">
                <span className="text-[var(--text-secondary)] font-medium">{row.label}</span>
                <span className={`text-center text-xs font-medium ${row.dubaiBad ? "text-[var(--brand-red)]" : "text-[var(--success)]"}`}>
                  {row.dubai}
                </span>
                <span className={`text-center text-xs font-medium ${row.dubaiBad ? "text-[var(--success)]" : "text-[var(--text-secondary)]"}`}>
                  {row.alemania}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--text-tertiary)]">{c.comparisonNote}</p>
        </div>

        {/* Popular models */}
        <div className="space-y-4">
          <h2 className="heading-section text-xl text-[var(--text-primary)]">
            {c.modelsHeading}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {c.popularModels.map((m) => (
              <div key={m.name} className="card p-4 space-y-1.5">
                <div className="text-2xl">{m.emoji}</div>
                <div className="font-semibold text-[var(--text-primary)] text-sm leading-tight">{m.name}</div>
                <div className="text-xs text-[var(--brand-blue)] font-medium">{m.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Watch out */}
        <div className="card p-6 border-l-4 border-l-[var(--brand-gold)] space-y-3">
          <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
            <AlertTriangle size={16} className="text-[var(--brand-gold)]" />
            {c.watchOutHeading}
          </h3>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            {c.watchOutItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="heading-section text-xl text-[var(--text-primary)]">
            {c.faqHeading}
          </h2>
          <div className="space-y-2">
            {c.faqItems.map((item, i) => (
              <FaqItem key={i} q={item.question} a={item.answer} />
            ))}
          </div>
        </div>

        {/* Internal links */}
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/blog/como-importar-coche-dubai-espana-2026"
            className="card p-4 flex items-center gap-3 hover:border-[var(--brand-blue-light)] transition-all group"
          >
            <span className="text-2xl shrink-0">📖</span>
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors">
                {c.linkBlogTitle}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] mt-0.5">{c.linkBlogDesc}</div>
            </div>
          </Link>
          <Link
            href="/importar-desde/uae"
            className="card p-4 flex items-center gap-3 hover:border-[var(--brand-blue-light)] transition-all group"
          >
            <span className="text-2xl shrink-0">🇦🇪</span>
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors">
                {c.linkCountryTitle}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] mt-0.5">{c.linkCountryDesc}</div>
            </div>
          </Link>
        </div>

      </div>
    </>
  );
}
