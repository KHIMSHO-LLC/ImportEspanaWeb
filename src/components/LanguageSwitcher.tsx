"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/constants/translations";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
  ];

  return (
    <div className="bg-transparent py-0 md:bg-white md:py-3 md:border-b md:border-gray-200">
      <div className="flex gap-1.5 md:gap-3 px-0 md:px-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`
              flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full border transition-colors whitespace-nowrap
              ${
                language === lang.code
                  ? "bg-blue-50 border-blue-600 shadow-sm"
                  : "bg-gray-100 border-transparent hover:bg-gray-200"
              }
            `}
          >
            <span className="text-sm md:text-lg">{lang.flag}</span>
            <span
              className={`text-xs md:text-sm font-semibold ${
                language === lang.code ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {lang.code.toUpperCase()}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
