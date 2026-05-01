"use client";

import Link from "next/link";
import { BookOpen, Calculator, FileText, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MetodologiaContent() {
  const { t } = useLanguage();

  const co2Rows: [string, string, string][] = [
    ["0 – 120 g/km", t("methIedmtExempt"), "0 €"],
    ["121 – 159 g/km", "4,75 %", "950 €"],
    ["160 – 199 g/km", "9,75 %", "1.950 €"],
    ["≥ 200 g/km", "14,75 %", "2.950 €"],
  ];

  const deprecRows: [string, string, string][] = [
    [t("deprecAgeLessThan1"), "100 %", "30.000 €"],
    [t("deprecAge1to2"), "84 %", "25.200 €"],
    [t("deprecAge2to3"), "67 %", "20.100 €"],
    [t("deprecAge3to4"), "56 %", "16.800 €"],
    [t("deprecAge4to5"), "47 %", "14.100 €"],
    [t("deprecAge5to6"), "39 %", "11.700 €"],
    [t("deprecAge6to7"), "34 %", "10.200 €"],
    [t("deprecAge7to8"), "28 %", "8.400 €"],
    [t("deprecAge8to9"), "24 %", "7.200 €"],
    [t("deprecAge9to10"), "19 %", "5.700 €"],
    [t("deprecAge10to11"), "17 %", "5.100 €"],
    [t("deprecAge11to12"), "13 %", "3.900 €"],
    [t("deprecAgeMore12"), "10 %", "3.000 €"],
  ];

  const fees: [string, string, string][] = [
    [t("methFeeItvLabel"), "150 €", t("methFeeItvSource")],
    [t("methFeeDgtLabel"), "99,77 €", t("methFeeDgtSource")],
    [t("methFeePlatesLabel"), "50 €", t("methFeePlatesSource")],
    [t("methFeeAgencyLabel"), "300 €", t("methFeeAgencySource")],
    [t("methFeeCustomsAgentLabel"), "200 €", t("methFeeCustomsAgentSource")],
    [t("methFeeHomologationLabel"), "1.500 €", t("methFeeHomologationSource")],
  ];

  const sources = [
    {
      name: t("methSourceBoeTitle"),
      url: "https://www.boe.es",
      desc: t("methSourceBoeDesc"),
    },
    {
      name: t("methSourceLawTitle"),
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740",
      desc: t("methSourceLawDesc"),
    },
    {
      name: t("methSourceAeatTitle"),
      url: "https://www.agenciatributaria.es",
      desc: t("methSourceAeatDesc"),
    },
    {
      name: t("methSourceDgtTitle"),
      url: "https://www.dgt.es",
      desc: t("methSourceDgtDesc"),
    },
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-[var(--text-tertiary)] mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">
          {t("home")}
        </Link>
        <span>/</span>
        <span className="text-[var(--text-primary)]">{t("methPageBreadcrumb")}</span>
      </nav>

      {/* Last updated badge */}
      <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
        <RefreshCw size={12} />
        {t("methUpdatedBadge")}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
        {t("methH1")}
      </h1>
      <p className="text-[var(--text-secondary)] text-lg mb-10">
        {t("methIntro")}
      </p>

      <div className="space-y-10">
        {/* IEDMT */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <Calculator size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              {t("methIedmtTitle")}
            </h2>
          </div>
          <div className="prose prose-sm max-w-none text-[var(--text-secondary)] space-y-3">
            <p>{t("methIedmtIntro")}</p>
            <div className="bg-[var(--surface-dim)] border border-[var(--surface-border)] rounded-xl p-4 font-mono text-sm">
              {t("methIedmtFormula")}
            </div>
            <p><strong>{t("methIedmtBoeLabel")}</strong> {t("methIedmtBoeText")}</p>
            <p><strong>{t("methIedmtDeprecLabel")}</strong> {t("methIedmtDeprecText")}</p>
            <p><strong>{t("methIedmtCo2Label")}</strong></p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse my-2">
                <thead>
                  <tr className="bg-[var(--surface-dim)]">
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">{t("methIedmtTableHeadCo2")}</th>
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">{t("methIedmtTableHeadRate")}</th>
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">{t("methIedmtTableHeadExample")}</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  {co2Rows.map(([co2, rate, example]) => (
                    <tr key={co2}>
                      <td className="p-3 border border-[var(--surface-border)] font-mono">{co2}</td>
                      <td className="p-3 border border-[var(--surface-border)] font-bold">{rate}</td>
                      <td className="p-3 border border-[var(--surface-border)] text-[var(--text-tertiary)]">{example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-tertiary)]">{t("methIedmtFootnote")}</p>
            <p>
              <strong>{t("methLegalBase")}</strong>{" "}
              <a
                href="https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-blue)] hover:underline"
              >
                {t("methIedmtLegalLink")}
              </a>
            </p>
          </div>
        </section>

        {/* Depreciation Table */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <Calculator size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              {t("methDeprecTitle")}
            </h2>
          </div>
          <div className="prose prose-sm max-w-none text-[var(--text-secondary)] space-y-3">
            <p>{t("methDeprecIntro")}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--surface-dim)]">
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">{t("methDeprecHeadAge")}</th>
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">{t("methDeprecHeadPct")}</th>
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">{t("methDeprecHeadExample")}</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  {deprecRows.map(([age, pct, example]) => (
                    <tr key={age}>
                      <td className="p-3 border border-[var(--surface-border)]">{age}</td>
                      <td className="p-3 border border-[var(--surface-border)] font-bold">{pct}</td>
                      <td className="p-3 border border-[var(--surface-border)] text-[var(--text-tertiary)] font-mono">{example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ITP */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <FileText size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              {t("methItpTitle")}
            </h2>
          </div>
          <div className="prose prose-sm max-w-none text-[var(--text-secondary)] space-y-3">
            <p>{t("methItpIntro")}</p>
            <div className="bg-[var(--surface-dim)] border border-[var(--surface-border)] rounded-xl p-4 font-mono text-sm">
              {t("methItpFormula")}
            </div>
            <p>
              {t("methItpText")}
              {" "}
              <strong>{t("methLegalBase")}</strong>{" "}
              <a
                href="https://www.boe.es/buscar/act.php?id=BOE-A-1993-15767"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-blue)] hover:underline"
              >
                {t("methItpLegalLink")}
              </a>
            </p>
          </div>
        </section>

        {/* Customs (Non-EU) */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <Calculator size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              {t("methCustomsTitle")}
            </h2>
          </div>
          <div className="prose prose-sm max-w-none text-[var(--text-secondary)] space-y-3">
            <div className="bg-[var(--surface-dim)] border border-[var(--surface-border)] rounded-xl p-4 font-mono text-sm space-y-1">
              <div>Valor_CIF = Precio + Transporte + Seguro</div>
              <div>Arancel = Valor_CIF × 10%</div>
              <div>IVA_importación = (Valor_CIF + Arancel) × 21%</div>
            </div>
            <p>{t("methCustomsText")}</p>
          </div>
        </section>

        {/* Fixed fees */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <FileText size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              {t("methFeesTitle")}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--surface-dim)]">
                  <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">{t("methFeesHeadConcept")}</th>
                  <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">{t("methFeesHeadAmount")}</th>
                  <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">{t("methFeesHeadSource")}</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                {fees.map(([c, i, f]) => (
                  <tr key={c}>
                    <td className="p-3 border border-[var(--surface-border)]">{c}</td>
                    <td className="p-3 border border-[var(--surface-border)] font-mono">{i}</td>
                    <td className="p-3 border border-[var(--surface-border)] text-xs text-[var(--text-tertiary)]">{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sources */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <BookOpen size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              {t("methSourcesTitle")}
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
            {sources.map((s) => (
              <li key={s.name} className="flex gap-3">
                <div className="shrink-0 text-[var(--brand-blue)] mt-0.5">→</div>
                <div>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-blue)] hover:underline font-medium"
                  >
                    {s.name}
                  </a>
                  <p className="text-[var(--text-tertiary)] text-xs mt-0.5">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Disclaimer */}
        <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
          <p className="font-semibold mb-1">{t("methDisclaimerTitle")}</p>
          <p>{t("methDisclaimerText")}</p>
        </div>
      </div>
    </main>
  );
}
