"use client";

import { useEffect } from "react";

type AdBannerProps = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

export const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
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
    <div className="my-8 text-center overflow-hidden print:hidden">
      {/* Visual Debug Placeholder for Development */}
      {process.env.NODE_ENV === "development" && (
        <div
          style={{
            background: "#e5e7eb",
            border: "1px dashed #9ca3af",
            padding: "20px",
            color: "#6b7280",
            fontSize: "12px",
            marginBottom: "10px",
          }}
        >
          <strong>[AdSense Placeholder]</strong>
          <br />
          Slot: {dataAdSlot} ({dataAdFormat})
        </div>
      )}

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8296385442547902"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      ></ins>
    </div>
  );
};
