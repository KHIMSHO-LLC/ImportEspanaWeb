import { AdBanner } from "./AdBanner";

export const SidebarAd = ({ side }: { side: "left" | "right" }) => {
  return (
    <div className="hidden xl:flex flex-col gap-6 w-[160px] or w-[300px] shrink-0 sticky top-24 h-fit">
      {/* Ad Unit */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 overflow-hidden">
        <div className="text-[10px] text-gray-400 text-center uppercase tracking-wider mb-1">
          Advertisement
        </div>
        <AdBanner
          dataAdSlot={side === "left" ? "LEFT_SIDEBAR_ID" : "RIGHT_SIDEBAR_ID"}
          dataAdFormat="vertical"
          dataFullWidthResponsive={true}
        />
      </div>

      {/* Affiliate Placeholder */}
      <div className="bg-blue-50/50 rounded-xl border border-blue-100 p-4 text-center">
        <h3 className="text-gray-900 font-semibold text-sm mb-2">
          Import Services
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          Need help importing your car? Check our recommended partners.
        </p>
        <div className="space-y-2 opacity-50">
          <div className="h-8 bg-blue-100 rounded animate-pulse" />
          <div className="h-8 bg-blue-100 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};
