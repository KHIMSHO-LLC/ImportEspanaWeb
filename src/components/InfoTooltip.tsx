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
        className="text-gray-400 hover:text-blue-500 transition-colors focus:outline-none"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        <Info size={16} />
      </button>

      {isVisible && (
        <div className="absolute z-50 w-64 p-3 mt-2 -ml-32 text-xs text-white bg-gray-800 rounded-lg shadow-lg opacity-100 transition-opacity left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0">
          {text}
          <div className="absolute bottom-full left-1/2 md:left-4 -ml-2 border-8 border-transparent border-b-gray-800"></div>
        </div>
      )}
    </div>
  );
}
