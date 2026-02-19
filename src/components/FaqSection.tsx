"use client";

import { FAQ_DATA } from "@/constants/FaqData";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

export const FaqSection = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = FAQ_DATA[language] || FAQ_DATA["en"];

  return (
    <section className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="text-blue-600" size={24} />
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-start text-left gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <span className="font-semibold text-gray-800 text-sm md:text-base">
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-blue-500 shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-gray-400 shrink-0" size={20} />
              )}
            </button>

            {openIndex === index && (
              <div className="mt-2 pl-2 pr-4 text-gray-600 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-600">
          Keywords: Matriculación España, Import Tax Calculator, Coche Alemán,
          ITV Importación, DGT Tasas, Impuesto CO2
        </p>
      </div>
    </section>
  );
};
