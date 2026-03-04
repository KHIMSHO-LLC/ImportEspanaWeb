"use client";

import { useState, useEffect } from "react";
import { AdBanner } from "./AdBanner";
import { X } from "lucide-react";

export const StickyAdFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Only show after user has scrolled a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden print:hidden">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-6 right-3 bg-[#13131a] border border-[#2a2a3a] text-[#6b6b7a] hover:text-[#f5f5f7] p-1.5 rounded-md shadow-lg transition-all"
        aria-label="Close ad"
      >
        <X size={14} />
      </button>

      {/* Ad Container */}
      <div className="bg-[#0a0a0f]/95 backdrop-blur-md border-t border-[#2a2a3a] pb-safe">
        <div className="flex justify-center items-center min-h-[70px] px-4">
          <AdBanner
            dataAdSlot="4722909566"
            dataAdFormat="horizontal"
            dataFullWidthResponsive={true}
            variant="footer"
          />
        </div>
      </div>
    </div>
  );
};
