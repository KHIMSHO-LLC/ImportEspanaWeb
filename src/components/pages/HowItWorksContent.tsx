"use client";

import Link from "next/link";
import { Calculator, CheckCircle, FileText, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorksContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--surface-dim)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            {t("hiw_title")}
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">{t("hiw_subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--surface-elevated)] p-6 rounded-2xl shadow-sm border border-[var(--surface-border)]">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[var(--brand-blue)]">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {t("hiw_step1_title")}
            </h3>
            <p className="text-[var(--text-secondary)]">{t("hiw_step1_text")}</p>
          </div>

          <div className="bg-[var(--surface-elevated)] p-6 rounded-2xl shadow-sm border border-[var(--surface-border)]">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[var(--brand-blue)]">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {t("hiw_step2_title")}
            </h3>
            <p className="text-[var(--text-secondary)]">{t("hiw_step2_text")}</p>
          </div>

          <div className="bg-[var(--surface-elevated)] p-6 rounded-2xl shadow-sm border border-[var(--surface-border)]">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[var(--brand-blue)]">
              <Calculator size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {t("hiw_step3_title")}
            </h3>
            <p className="text-[var(--text-secondary)]">{t("hiw_step3_text")}</p>
          </div>

          <div className="bg-[var(--surface-elevated)] p-6 rounded-2xl shadow-sm border border-[var(--surface-border)]">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[var(--brand-blue)]">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {t("hiw_step4_title")}
            </h3>
            <p className="text-[var(--text-secondary)]">{t("hiw_step4_text")}</p>
          </div>
        </div>

        <div className="bg-[var(--brand-blue)] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">{t("hiw_cta_title")}</h2>
          <p className="mb-6 opacity-90">{t("hiw_cta_text")}</p>
          <Link
            href="/"
            className="inline-block bg-[var(--surface-elevated)] text-[var(--brand-blue)] font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition-colors"
          >
            {t("hiw_cta_button")}
          </Link>
        </div>
      </div>
    </main>
  );
}
