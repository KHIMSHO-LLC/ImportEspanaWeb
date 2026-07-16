"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CONTACT_EMAIL = "info@importespana.com";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--surface-dim)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[var(--surface-elevated)] p-8 rounded-2xl shadow-sm border border-[var(--surface-border)]">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
          {t("contact_title")}
        </h1>

        <div className="prose prose-blue max-w-none text-[var(--text-secondary)] space-y-6">
          <p>{t("contact_intro")}</p>

          <div className="p-5 bg-[var(--surface-dim)] rounded-xl border border-[var(--surface-border)] space-y-2">
            <div className="text-sm font-semibold text-[var(--text-primary)]">
              {t("contact_email_label")}
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-[var(--brand-blue)] font-medium hover:underline"
            >
              <Mail className="w-4 h-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <p className="text-sm">{t("contact_response")}</p>

          <div className="p-4 bg-[var(--surface-dim)] rounded-xl border border-[var(--surface-border)] space-y-1 text-sm">
            <div className="font-bold text-[var(--text-primary)]">
              KHIMSHO LLC
            </div>
            <div>ImportEspana — importespana.com</div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--surface-border)] flex gap-4">
          <Link
            href="/"
            className="text-[var(--brand-blue)] font-medium hover:underline"
          >
            ← Inicio
          </Link>
          <Link
            href="/about"
            className="text-[var(--brand-blue)] font-medium hover:underline"
          >
            {t("footer_about")} →
          </Link>
        </div>
      </div>
    </main>
  );
}
