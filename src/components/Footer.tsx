"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto print:hidden min-h-[100px]">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5">
          {/* Links - stack as grid on mobile for bigger tap targets */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-x-6 gap-y-1 w-full sm:w-auto">
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm py-2 text-center sm:text-left"
            >
              {t("footer_privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm py-2 text-center sm:text-left"
            >
              {t("footer_terms")}
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm py-2 text-center sm:text-left"
            >
              {t("footer_about")}
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm py-2 text-center sm:text-left"
            >
              {t("footer_howItWorks")}
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm py-2 text-center sm:text-left"
            >
              Blog
            </Link>
            <Link
              href="/itp"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm py-2 text-center sm:text-left"
            >
              ITP
            </Link>
            <Link
              href="/resources"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm py-2 text-center sm:text-left col-span-2 sm:col-span-1"
            >
              Resources
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-xs text-center">
            © {currentYear} ImportEspana. {t("footer_rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
