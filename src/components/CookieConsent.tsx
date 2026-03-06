"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export const CookieConsent = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 print:hidden animate-fadeInUp" style={{ animationDuration: '0.4s' }}>
      <div className="mx-4 mb-4 md:mx-8 md:mb-6 max-w-2xl ml-auto">
        <div className="backdrop-blur-xl bg-[var(--foreground)]/95 border border-white/10 rounded-2xl p-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-white/70 text-sm flex-1 leading-relaxed">
              {t("cookie_banner_text")}{" "}
              <Link
                href="/privacy"
                className="text-white underline underline-offset-2 hover:text-[var(--brand-gold)] transition-colors duration-200 font-medium"
              >
                {t("cookie_learn_more")}
              </Link>
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-200"
              >
                {t("cookie_decline")}
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 text-sm font-semibold text-[var(--foreground)] bg-white hover:bg-white/90 rounded-lg transition-all duration-200"
              >
                {t("cookie_accept")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
