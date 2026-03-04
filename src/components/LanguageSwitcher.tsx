"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/constants/translations";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
  ];

  const current = languages.find((l) => l.code === language) || languages[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#2a2a3a] bg-[#13131a] hover:bg-[#1a1a24] hover:border-[#3a3a4a] transition-all text-sm"
      >
        <span className="text-base">{current.flag}</span>
        <span className="font-medium text-[#f5f5f7] hidden sm:inline">
          {current.code.toUpperCase()}
        </span>
        <ChevronDown
          size={14}
          className={`text-[#6b6b7a] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-[#13131a] border border-[#2a2a3a] rounded-lg shadow-2xl py-1 z-50 min-w-[160px] overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all ${
                language === lang.code
                  ? "bg-[#00d4aa]/10 text-[#00d4aa] font-medium"
                  : "text-[#8b8b9a] hover:text-[#f5f5f7] hover:bg-[#ffffff08]"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
