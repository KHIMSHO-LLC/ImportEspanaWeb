"use client";

import { useState } from "react";
import { AdBanner } from "./AdBanner";
import { X } from "lucide-react";

export const StickyAdFooter = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden print:hidden">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-8 right-2 bg-[var(--surface-elevated)]/90 backdrop-blur-sm border border-[var(--surface-border)] text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] p-1 rounded-full shadow-sm"
        aria-label="Close ad"
      >
        <X size={16} />
      </button>

      {/* Ad Container */}
      <div className="bg-[var(--surface-elevated)] border-t border-[var(--surface-border)] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe pt-2">
        <div className="flex justify-center items-center min-h-[60px]">
          <AdBanner
            dataAdSlot="4722909566"
            dataAdFormat="horizontal"
            dataFullWidthResponsive={true}
          />
        </div>
      </div>
    </div>
  );
};
