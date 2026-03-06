"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto print:hidden border-t border-[var(--surface-border)]" style={{ background: 'var(--foreground)' }}>
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="text-white font-bold text-lg tracking-tight">
              Import<span className="text-[var(--brand-gold)]">España</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              {t("footer_rights")}
            </p>
          </div>

          {/* Links grid */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-3">
            <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
              {t("footer_privacy")}
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
              {t("footer_terms")}
            </Link>
            <Link href="/about" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
              {t("footer_about")}
            </Link>
            <Link href="/how-it-works" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
              {t("footer_howItWorks")}
            </Link>
            <Link href="/blog" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
              Blog
            </Link>
            <Link href="/itp" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
              ITP
            </Link>
            <Link href="/resources" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
              Resources
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white/30 text-xs">
            © {currentYear} ImportEspana
          </div>
          <div className="flex items-center gap-1.5 text-white/30 text-xs">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Official BOE Data
          </div>
        </div>
      </div>
    </footer>
  );
}
