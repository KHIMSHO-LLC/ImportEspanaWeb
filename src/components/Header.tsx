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
            priority
          />
        </Link>

        {/* Language Switcher - Centered on mobile */}
        <div className="w-full md:w-auto flex justify-center overflow-x-auto no-scrollbar pb-1 md:pb-0">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
