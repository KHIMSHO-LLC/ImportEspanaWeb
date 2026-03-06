"use client";

import { useEffect } from "react";

type AdBannerProps = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
  className?: string;
};

export const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
  className = "",
}: AdBannerProps) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      );
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <div
      className={`my-4 md:my-8 text-center overflow-hidden print:hidden flex justify-center w-full min-h-[100px] ${className}`}
    >
      {/* Visual Debug Placeholder REMOVED for clean UI */}

      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: "250px", width: "100%" }}
        data-ad-client="ca-pub-8296385442547902"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      ></ins>
    </div>
  );
};
