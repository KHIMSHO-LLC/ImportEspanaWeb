"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

export const CookieConsent = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
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
    <div className="fixed bottom-0 left-0 right-0 bg-[#13131a] border-t border-[#2a2a3a] p-4 md:p-6 z-50 animate-slide-up print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-10 h-10 bg-[#1a1a24] border border-[#2a2a3a] rounded flex items-center justify-center shrink-0">
            <Cookie size={18} className="text-[#00d4aa]" />
          </div>
          <div className="text-[#8b8b9a] text-sm flex-1">
            <p>
              {t("cookie_banner_text")}{" "}
              <Link
                href="/privacy"
                className="text-[#00d4aa] hover:text-[#00e4ba] font-medium transition-colors"
              >
                {t("cookie_learn_more")}
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-[#6b6b7a] bg-[#1a1a24] hover:bg-[#2a2a3a] border border-[#2a2a3a] rounded transition-colors"
          >
            {t("cookie_decline")}
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 text-sm font-medium text-[#0a0a0f] bg-[#00d4aa] hover:bg-[#00e4ba] rounded transition-colors"
          >
            {t("cookie_accept")}
          </button>
        </div>
      </div>
    </div>
  );
};
