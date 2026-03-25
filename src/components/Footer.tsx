"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto print:hidden"
      style={{
        background: "var(--footer-bg)",
        borderTop: "1px solid var(--footer-border)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="font-bold text-lg tracking-tight" style={{ color: "rgba(238,242,255,0.9)" }}>
              Import<span style={{ color: "var(--brand-gold)" }}>España</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(238,242,255,0.38)" }}>
              {t("footer_rights")}
            </p>
          </div>

          {/* Links grid */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-3">
            {[
              { href: "/privacy", label: t("footer_privacy") },
              { href: "/terms", label: t("footer_terms") },
              { href: "/about", label: t("footer_about") },
              { href: "/how-it-works", label: t("footer_howItWorks") },
              { href: "/blog", label: "Blog" },
              { href: "/itp", label: "ITP" },
              { href: "/resources", label: "Resources" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "rgba(238,242,255,0.45)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(238,242,255,0.9)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(238,242,255,0.45)")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="text-xs" style={{ color: "rgba(238,242,255,0.28)" }}>
            © {currentYear} ImportEspana
          </div>
          <div
            className="flex items-center gap-1.5 text-xs"
            style={{ color: "rgba(238,242,255,0.28)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"
              style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            />
            Official BOE Data
          </div>
        </div>
      </div>
    </footer>
  );
}
