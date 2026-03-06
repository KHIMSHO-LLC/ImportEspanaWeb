"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--surface-dim)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[var(--surface-elevated)] p-8 rounded-2xl shadow-sm border border-[var(--surface-border)]">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
          {t("terms_title")}
        </h1>

        <div className="prose prose-blue max-w-none text-[var(--text-secondary)] space-y-6">
          <p className="font-medium text-[var(--text-tertiary)]">{t("terms_last_updated")}</p>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {t("terms_section1_title")}
            </h2>
            <p>{t("terms_section1_text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {t("terms_section2_title")}
            </h2>
            <p>{t("terms_section2_text")}</p>
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
                info@importespana.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--surface-border)]">
          <Link href="/" className="text-[var(--brand-blue)] font-medium hover:underline">
            {t("back_to_home")}
          </Link>
        </div>
      </div>
    </main>
  );
}
