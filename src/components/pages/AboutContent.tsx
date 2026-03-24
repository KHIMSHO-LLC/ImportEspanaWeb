"use client";

import Link from "next/link";
import { Mail, RefreshCw, Database, Calendar } from "lucide-react";
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

          {/* Who built it */}
          <div className="p-4 bg-[var(--surface-dim)] rounded-xl border border-[var(--surface-border)] space-y-2">
            <h2 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Calendar size={16} className="text-[var(--brand-blue)]" />
              Sobre el proyecto
            </h2>
            <p className="text-sm">
              ImportEspana fue lanzado en 2024 por <strong>KHIMSHO LLC</strong> para simplificar el complejo proceso de importar vehículos a España. Disponible como calculadora web y como app para iOS y Android.
            </p>
          </div>

          {/* Data sources */}
          <div className="p-4 bg-[var(--surface-dim)] rounded-xl border border-[var(--surface-border)] space-y-2">
            <h2 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Database size={16} className="text-[var(--brand-blue)]" />
              Fuentes de datos
            </h2>
            <ul className="text-sm space-y-1">
              <li>• Tablas de valoración BOE (Boletín Oficial del Estado)</li>
              <li>• Ley 38/1992 de Impuestos Especiales</li>
              <li>• Real Decreto Legislativo 1/1993 (ITP)</li>
              <li>• Normativa autonómica de tipos impositivos ITP</li>
              <li>• Tipos arancelarios del Arancel Integrado de la UE (TARIC)</li>
            </ul>
          </div>

          {/* Update frequency */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold px-3 py-2 rounded-full">
            <RefreshCw size={12} />
            Tablas actualizadas: Enero 2026 — Fuente: BOE
          </div>

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

        <div className="mt-8 pt-6 border-t border-[var(--surface-border)] flex gap-4">
          <Link href="/" className="text-[var(--brand-blue)] font-medium hover:underline">
            ← Inicio
          </Link>
          <Link href="/metodologia" className="text-[var(--brand-blue)] font-medium hover:underline">
            Metodología del cálculo →
          </Link>
        </div>
      </div>
    </main>
  );
}
