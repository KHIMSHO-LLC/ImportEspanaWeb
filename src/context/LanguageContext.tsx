"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, translations } from "@/constants/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = () => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("app_language");
        if (saved) {
          setLanguageState(saved as Language);
        } else {
          // Auto-detect system language
          const systemLang = navigator.language.split("-")[0];
          if (systemLang && ["es", "ru", "de", "fr"].includes(systemLang)) {
            setLanguageState(systemLang as Language);
          }
        }
      }
    } catch (e) {
      console.error("Failed to load language", e);
    } finally {
      setIsLoaded(true);
    }
  };

  const setLanguage = (lang: Language) => {
    try {
      setLanguageState(lang);
      if (typeof window !== "undefined") {
        localStorage.setItem("app_language", lang);
      }
    } catch (e) {
      console.error("Failed to save language", e);
    }
  };

  const t = (key: keyof typeof translations.en) => {
    const translation =
      translations[language][key] || translations.en[key] || key;
    return translation;
  };

  if (!isLoaded) {
    return null; // or generic loading spinner
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
