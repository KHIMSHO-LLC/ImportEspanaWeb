"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm print:hidden">
      <div className="max-w-7xl mx-auto px-3 py-2 md:px-4 md:py-3 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Logo - Centered on mobile */}
        <Link
          href="/"
          className="flex items-center justify-center md:justify-start w-full md:w-auto shrink-0"
        >
          <Image
            src="/logo-full.png"
            alt="ImportEspana"
            width={300}
            height={60}
            className="h-10 md:h-12 w-auto object-contain"
            style={{ width: "auto" }} // Preserve aspect ratio
            priority
          />
        </Link>

        {/* Navigation + App Store + Language */}
        <div className="w-full md:w-auto flex justify-center items-center gap-3 pb-1 md:pb-0">
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Blog
          </Link>
          <a
            href="https://apps.apple.com/ar/app/importespana/id6759112789"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 40"
              className="h-8 w-auto"
            >
              <rect width="120" height="40" rx="6" fill="#000" />
              <path
                d="M24.77 20.3a4.95 4.95 0 012.36-4.15 5.07 5.07 0 00-3.99-2.16c-1.68-.18-3.31 1.01-4.17 1.01-.87 0-2.19-.99-3.62-.96a5.31 5.31 0 00-4.47 2.73c-1.93 3.34-.49 8.27 1.36 10.97.93 1.33 2.02 2.82 3.45 2.76 1.39-.06 1.92-.89 3.6-.89s2.16.89 3.61.86c1.5-.03 2.44-1.34 3.33-2.68a11.05 11.05 0 001.51-3.09 4.78 4.78 0 01-2.97-4.4z"
                fill="#fff"
              />
              <path
                d="M22.04 12.21a4.87 4.87 0 001.12-3.49 4.96 4.96 0 00-3.21 1.66 4.64 4.64 0 00-1.15 3.36 4.1 4.1 0 003.24-1.53z"
                fill="#fff"
              />
              <text
                fill="#fff"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="7"
                x="38"
                y="15"
              >
                Download on the
              </text>
              <text
                fill="#fff"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="14"
                fontWeight="600"
                x="38"
                y="30"
              >
                App Store
              </text>
            </svg>
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
