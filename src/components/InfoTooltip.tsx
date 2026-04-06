"use client";

import { Info } from "lucide-react";
import { useRef, useState } from "react";

interface InfoTooltipProps {
  text: string;
}

// Tooltip width in px — must match w-64 (16rem = 256px at default font size)
const TOOLTIP_WIDTH = 256;

export function InfoTooltip({ text }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const [caretLeft, setCaretLeft] = useState<string>("50%");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const show = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const iconCenterX = rect.left + rect.width / 2;

      let left: number;
      // Ideal: center the tooltip on the icon
      let idealLeft = iconCenterX - TOOLTIP_WIDTH / 2;
      const MARGIN = 8;

      if (idealLeft < MARGIN) {
        // Would overflow left — anchor to left margin
        left = MARGIN - rect.left;
      } else if (idealLeft + TOOLTIP_WIDTH > viewportWidth - MARGIN) {
        // Would overflow right — anchor to right margin
        left = viewportWidth - MARGIN - TOOLTIP_WIDTH - rect.left;
      } else {
        left = idealLeft - rect.left;
      }

      // Caret points to the icon center regardless of tooltip position
      const caretPos = iconCenterX - (rect.left + left);
      setTooltipStyle({ left });
      setCaretLeft(`${caretPos}px`);
    }
    setIsVisible(true);
  };

  const hide = () => setIsVisible(false);

  return (
    <div className="relative inline-block ml-2">
      <button
        ref={buttonRef}
        type="button"
        className="text-gray-400 hover:text-blue-500 transition-colors focus:outline-none"
        onMouseEnter={show}
        onMouseLeave={hide}
        onClick={() => (isVisible ? hide() : show())}
      >
        <Info size={16} />
      </button>

      {isVisible && (
        <div
          className="absolute z-50 w-64 p-3 mt-2 text-xs text-white bg-gray-800 rounded-lg shadow-lg"
          style={tooltipStyle}
        >
          {text}
          <div
            className="absolute bottom-full -ml-2 border-8 border-transparent border-b-gray-800"
            style={{ left: caretLeft }}
          />
        </div>
      )}
    </div>
  );
}
