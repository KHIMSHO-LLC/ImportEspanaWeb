"use client";

import { FAQ_DATA } from "@/constants/FaqData";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const FaqSection = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = FAQ_DATA[language] || FAQ_DATA["en"];

  return (
    <section className="mt-16">
      <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-8">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-[var(--surface-border)]">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center text-left gap-4 py-5 group"
              >
                <span className="font-semibold text-[var(--text-primary)] text-sm md:text-base group-hover:text-[var(--brand-blue)] transition-colors duration-200">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[var(--text-tertiary)] transition-transform duration-300 ease-out ${isOpen ? "rotate-180 text-[var(--brand-blue)]" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="pb-5 text-[var(--text-secondary)] text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 pt-6 border-t border-[var(--surface-border)] text-center">
        <p className="text-xs text-[var(--text-tertiary)]">
          Keywords: Matriculación España, Import Tax Calculator, Coche Alemán,
          ITV Importación, DGT Tasas, Impuesto CO2
        </p>
      </div>
    </section>
  );
};
