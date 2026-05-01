"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ_DATA } from "@/constants/FaqData";
import SeoSchema from "@/components/SeoSchema";
import { useLanguage } from "@/context/LanguageContext";

const CATEGORIES = [
  { id: "costes", titleKey: "faqCategoryCosts", icon: "💶", range: [0, 6] },
  { id: "proceso", titleKey: "faqCategoryProcess", icon: "📋", range: [6, 12] },
  { id: "vehiculos", titleKey: "faqCategoryVehicles", icon: "🚗", range: [12, 17] },
  { id: "comparativas", titleKey: "faqCategoryRegional", icon: "🗺️", range: [17, 21] },
  { id: "dubai", titleKey: "faqCategoryDubai", icon: "🇦🇪", range: [21, 28] },
] as const;

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[var(--surface-border)] rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-[var(--surface)] hover:bg-[var(--surface-dim)] transition-colors duration-200"
      >
        <span className="font-semibold text-[var(--text-primary)] pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp size={18} className="text-[var(--brand-blue)] shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-[var(--text-tertiary)] shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-3 bg-[var(--surface-dim)] text-sm text-[var(--text-secondary)] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqPageContent() {
  const { language, t } = useLanguage();
  const allFaqs = FAQ_DATA[language] ?? FAQ_DATA.en;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const breadcrumbs = [
    { name: t("home"), url: "https://importespana.com" },
    { name: t("faqPageBreadcrumb"), url: "https://importespana.com/preguntas-frecuentes" },
  ];

  return (
    <>
      <SeoSchema
        breadcrumbs={breadcrumbs}
        faqItems={allFaqs}
        showHomeSchemas={false}
      />

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--text-tertiary)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">
            {t("home")}
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)]">{t("faqPageBreadcrumb")}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          {t("faqPageTitle")}
        </h1>
        <p className="text-[var(--text-secondary)] mb-10 text-lg">
          {t("faqPageSubtitle")}
        </p>

        <div className="space-y-12">
          {CATEGORIES.map((cat) => {
            const faqs = allFaqs.slice(cat.range[0], cat.range[1]);
            return (
              <section key={cat.id}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">
                    {t(cat.titleKey)}
                  </h2>
                </div>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => {
                    const globalIdx = cat.range[0] + idx;
                    return (
                      <AccordionItem
                        key={globalIdx}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === globalIdx}
                        onToggle={() =>
                          setOpenIndex(openIndex === globalIdx ? null : globalIdx)
                        }
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA links */}
        <div className="mt-12 p-6 bg-[var(--surface-dim)] rounded-2xl border border-[var(--surface-border)]">
          <h3 className="font-bold text-[var(--text-primary)] mb-3">
            {t("faqReadyTitle")}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            {t("faqReadyText")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary text-sm px-5 py-2.5">
              {t("faqCalculateNow")}
            </Link>
            <Link href="/importar-coche-dubai" className="btn-secondary text-sm px-5 py-2.5">
              {t("faqImportFromDubai")}
            </Link>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-8 border-t border-[var(--surface-border)]">
          <h3 className="font-semibold text-[var(--text-secondary)] mb-4 text-sm uppercase tracking-wider">
            {t("faqAlsoInteresting")}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { href: "/itp", label: t("faqLinkItpTable") },
              { href: "/how-it-works", label: t("faqLinkHowItWorks") },
              { href: "/metodologia", label: t("faqLinkMethodology") },
              { href: "/blog", label: t("faqLinkBlog") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--brand-blue)] hover:underline py-1"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
