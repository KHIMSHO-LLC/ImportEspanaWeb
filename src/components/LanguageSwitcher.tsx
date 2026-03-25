"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/constants/translations";
import { useState, useRef, useEffect } from "react";

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
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--surface-border)] bg-[var(--surface-elevated)] hover:border-[var(--text-tertiary)] transition-all duration-200 text-sm"
      >
        <span className="text-base">{current.flag}</span>
        <span className="font-medium text-[var(--text-secondary)]">
          {current.code.toUpperCase()}
        </span>
        <svg
          className={`w-3.5 h-3.5 text-[var(--text-tertiary)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-[var(--surface-popover)] border border-[var(--surface-border)] rounded-xl shadow-lg py-1 z-50 min-w-[140px] animate-slideDown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors duration-150 ${
                language === lang.code
                  ? "bg-[var(--brand-blue)]/20 text-[var(--brand-blue)] font-medium"
                  : "text-[var(--text-secondary)] hover:bg-white/10"
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
