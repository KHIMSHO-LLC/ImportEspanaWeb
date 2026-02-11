"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm print:hidden">
      <div className="max-w-7xl mx-auto px-3 py-2 md:px-4 md:py-3 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Logo - Centered on mobile */}
        <h1 className="text-lg md:text-xl font-bold text-blue-900 flex items-center gap-1 md:gap-2 shrink-0 w-full justify-center md:w-auto md:justify-start">
          ImportEspana 🇪🇸
        </h1>

        {/* Language Switcher - Centered on mobile */}
        <div className="w-full md:w-auto flex justify-center overflow-x-auto no-scrollbar pb-1 md:pb-0">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
