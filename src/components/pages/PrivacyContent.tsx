"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--surface-dim)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[var(--surface-elevated)] p-8 rounded-2xl shadow-sm border border-[var(--surface-border)]">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
          {t("privacy_title")}
        </h1>

        <div className="prose prose-blue max-w-none text-[var(--text-secondary)] space-y-6">
          <p className="font-medium text-[var(--text-tertiary)]">
            Last updated: February 11, 2026
          </p>

          <p>{t("privacy_intro")}</p>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {t("privacy_section1_title")}
            </h2>
            <p>{t("privacy_section1_text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
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
                className="text-[var(--brand-blue)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {t("privacy_section3_title")}
            </h2>
            <p>{t("privacy_section3_text")}</p>
            <p className="mt-2 text-sm text-[var(--text-tertiary)] italic">
              {t("privacy_opt_out")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {t("privacy_contact_title")}
            </h2>
            <p>
              <a
                href="mailto:info@importespana.com"
                className="text-[var(--brand-blue)] hover:underline"
              >
                {t("privacy_contact_email")}
              </a>
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--surface-border)]">
          <Link href="/" className="text-[var(--brand-blue)] font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
