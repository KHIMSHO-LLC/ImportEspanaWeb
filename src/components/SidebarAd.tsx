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
    </div>
  );
};
