"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {t("privacy_title")}
        </h1>

        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="font-medium text-gray-500">
            Last updated: February 11, 2026
          </p>

          <p>{t("privacy_intro")}</p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {t("privacy_section1_title")}
            </h2>
            <p>{t("privacy_section1_text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {t("privacy_section2_title")}
            </h2>
            <p>{t("privacy_section2_text")}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t("privacy_list_id")}</li>
              <li>{t("privacy_list_usage")}</li>
              <li>{t("privacy_list_loc")}</li>
              <li>{t("privacy_list_cookies")}</li>
            </ul>
            <p className="mt-2">
              For more information, please see the{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {t("privacy_section3_title")}
            </h2>
            <p>{t("privacy_section3_text")}</p>
            <p className="mt-2 text-sm text-gray-500 italic">
              {t("privacy_opt_out")}
            </p>
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
                {t("privacy_contact_email")}
              </a>
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link href="/" className="text-blue-600 font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
