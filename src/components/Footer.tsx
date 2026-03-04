"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/about", label: t("footer_about") },
    { href: "/how-it-works", label: t("footer_howItWorks") },
    { href: "/blog", label: "Blog" },
    { href: "/itp", label: "ITP" },
    { href: "/resources", label: "Resources" },
    { href: "/valoracion-boe", label: "Valoración BOE" },
  ];

  const legalLinks = [
    { href: "/privacy", label: t("footer_privacy") },
    { href: "/terms", label: t("footer_terms") },
  ];

  return (
    <footer className="bg-[#13131a] border-t border-[#2a2a3a] mt-auto print:hidden">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-headline text-[#f5f5f7]">ImportEspana</h3>
            <p className="text-small text-[#6b6b7a] max-w-xs">
              Calculadora precisa de impuestos de matriculación. Datos oficiales del BOE actualizados diariamente.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/importespana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#1a1a24] border border-[#2a2a3a] rounded hover:border-[#00d4aa] hover:text-[#00d4aa] text-[#6b6b7a] transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://github.com/importespana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#1a1a24] border border-[#2a2a3a] rounded hover:border-[#00d4aa] hover:text-[#00d4aa] text-[#6b6b7a] transition-all"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-micro text-[#8b8b9a] mb-4">NAVEGACIÓN</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-[#6b6b7a] hover:text-[#00d4aa] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-micro text-[#8b8b9a] mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-[#6b6b7a] hover:text-[#00d4aa] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* App Download */}
            <div className="mt-6">
              <h4 className="text-micro text-[#8b8b9a] mb-3">DESCARGA LA APP</h4>
              <a
                href="https://apps.apple.com/ar/app/importespana/id6759112789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] rounded hover:border-[#00d4aa] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#f5f5f7]">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-xs text-[#f5f5f7] font-medium">App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2a2a3a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-micro text-[#4a4a5a]">
            © {currentYear} ImportEspana. {t("footer_rights")}
          </p>
          <p className="text-micro text-[#4a4a5a]">
            Hecho con precisión en España 🇪🇸
          </p>
        </div>
      </div>
    </footer>
  );
}
