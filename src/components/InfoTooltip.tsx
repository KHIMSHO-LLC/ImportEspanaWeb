import { Info } from "lucide-react";
import { useState } from "react";

interface InfoTooltipProps {
  text: string;
}

export function InfoTooltip({ text }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block ml-2">
      <button
        type="button"
        className="text-[#4a4a5a] hover:text-[#00d4aa] transition-colors focus:outline-none"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        <Info size={14} />
      </button>

      {isVisible && (
        <div className="absolute z-50 w-64 p-3 mt-2 text-xs bg-[#1a1a24] border border-[#2a2a3a] rounded shadow-2xl left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0">
          <p className="text-[#8b8b9a] leading-relaxed">{text}</p>
          <div className="absolute bottom-full left-1/2 md:left-4 -ml-1 border-4 border-transparent border-b-[#1a1a24]"></div>
        </div>
      )}
    </div>
  );
}
