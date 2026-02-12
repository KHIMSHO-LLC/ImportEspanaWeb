"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {t("terms_title")}
        </h1>

        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="font-medium text-gray-500">{t("terms_last_updated")}</p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {t("terms_section1_title")}
            </h2>
            <p>{t("terms_section1_text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {t("terms_section2_title")}
            </h2>
            <p>{t("terms_section2_text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {t("privacy_contact_title")}
            </h2>
            <p>
              <a
                href="mailto:info@importespana.com"
                className="text-blue-600 hover:underline"
              >
                info@importespana.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link href="/" className="text-blue-600 font-medium hover:underline">
            {t("back_to_home")}
          </Link>
        </div>
      </div>
    </main>
  );
}
