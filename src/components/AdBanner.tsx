"use client";

import { useEffect } from "react";

type AdBannerProps = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
  className?: string;
  variant?: "default" | "sidebar" | "inline" | "footer";
};

export const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
  className = "",
  variant = "default",
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

  const variantClasses = {
    default: "my-8",
    sidebar: "my-0",
    inline: "my-6",
    footer: "my-0",
  };

  return (
    <div
      className={`${variantClasses[variant]} overflow-hidden print:hidden ${className}`}
    >
      {/* Visual Debug Placeholder for Development */}
      {process.env.NODE_ENV === "development" && (
        <div
          style={{
            background: "#13131a",
            border: "1px dashed #2a2a3a",
            padding: "24px",
            color: "#6b6b7a",
            fontSize: "11px",
            fontFamily: "JetBrains Mono, monospace",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
        >
          <span style={{ color: "#00d4aa" }}>AD UNIT</span>
          <br />
          Slot: {dataAdSlot}
          <br />
          Format: {dataAdFormat}
        </div>
      )}

      {/* Production Ad */}
      {process.env.NODE_ENV !== "development" && (
        <div className="ad-container">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-8296385442547902"
            data-ad-slot={dataAdSlot}
            data-ad-format={dataAdFormat}
            data-full-width-responsive={dataFullWidthResponsive.toString()}
          ></ins>
        </div>
      )}
    </div>
  );
};
