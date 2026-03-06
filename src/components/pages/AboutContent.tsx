"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--surface-dim)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[var(--surface-elevated)] p-8 rounded-2xl shadow-sm border border-[var(--surface-border)]">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
          {t("about_title")}
        </h1>

        <div className="prose prose-blue max-w-none text-[var(--text-secondary)] space-y-6">
          <p>{t("about_text1")}</p>

          <p>{t("about_text2")}</p>

          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">
            {t("privacy_contact_title")}
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mail className="text-[var(--brand-blue)]" size={20} />
              <a
                href="mailto:info@importespana.com"
                className="hover:underline"
              >
                info@importespana.com
              </a>
            </div>
          </div>
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
