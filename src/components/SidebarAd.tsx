import { AdBanner } from "./AdBanner";

export const SidebarAd = ({ side }: { side: "left" | "right" }) => {
  return (
    <div className="hidden xl:flex flex-col gap-6 w-[160px] or w-[300px] shrink-0 sticky top-24 h-fit print:hidden">
      {/* Ad Unit */}
      {/* Ad Unit - Decoration removed to avoid whitespace violation */}
      <AdBanner
        dataAdSlot={side === "left" ? "8566059459" : "7252977786"}
        dataAdFormat="vertical"
        dataFullWidthResponsive={true}
      />
    </div>
  );
};
