"use client";

import { AdBanner } from "./AdBanner";

export const SidebarAd = ({ side }: { side: "left" | "right" }) => {
  // Only show on large screens
  return (
    <div className="hidden xl:flex flex-col w-[300px] shrink-0 sticky top-28 h-fit print:hidden">
      <div className="ad-sidebar">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-[1px] bg-[#2a2a3a]"></div>
          <span className="text-[10px] font-medium text-[#4a4a5a] uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-mono)' }}>
            Sponsored
          </span>
        </div>

        {/* Ad Unit */}
        <AdBanner
          dataAdSlot={side === "left" ? "8566059459" : "7252977786"}
          dataAdFormat="vertical"
          dataFullWidthResponsive={true}
          variant="sidebar"
        />

        {/* Help text */}
        <div className="mt-4 p-4 bg-[#13131a] border border-[#2a2a3a] rounded">
          <p className="text-[11px] text-[#6b6b7a] leading-relaxed" style={{ fontFamily: 'var(--font-mono)' }}>
            Importing a car? Check our verified transport partners for the best rates.
          </p>
        </div>
      </div>
    </div>
  );
};
