"use client";

import Link from "next/link";
import { Calculator, CheckCircle, FileText, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorksPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("hiw_title")}
          </h1>
          <p className="text-xl text-gray-600">{t("hiw_subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("hiw_step1_title")}
            </h3>
            <p className="text-gray-600">{t("hiw_step1_text")}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("hiw_step2_title")}
            </h3>
            <p className="text-gray-600">{t("hiw_step2_text")}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Calculator size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("hiw_step3_title")}
            </h3>
            <p className="text-gray-600">{t("hiw_step3_text")}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("hiw_step4_title")}
            </h3>
            <p className="text-gray-600">{t("hiw_step4_text")}</p>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">{t("hiw_cta_title")}</h2>
          <p className="mb-6 opacity-90">{t("hiw_cta_text")}</p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition-colors"
          >
            {t("hiw_cta_button")}
          </Link>
        </div>
      </div>
    </main>
  );
}
