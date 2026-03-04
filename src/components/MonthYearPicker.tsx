"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useMemo } from "react";
import { ChevronDown } from "lucide-react";

interface MonthYearPickerProps {
  value: string; // Expected: YYYY-MM
  onChange: (value: string) => void;
  className?: string;
}

export function MonthYearPicker({
  value,
  onChange,
  className = "",
}: MonthYearPickerProps) {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";

  const [year, month] = value ? value.split("-") : ["", ""];

  const currentYear = new Date().getFullYear();
  const years = useMemo(() => {
    const arr = [];
    for (let y = currentYear; y >= 1990; y--) {
      arr.push(y);
    }
    return arr;
  }, [currentYear]);

  const months = useMemo(() => {
    return [
      { value: "01", label: lang === "es" ? "Ene" : "Jan" },
      { value: "02", label: lang === "es" ? "Feb" : "Feb" },
      { value: "03", label: lang === "es" ? "Mar" : "Mar" },
      { value: "04", label: lang === "es" ? "Abr" : "Apr" },
      { value: "05", label: lang === "es" ? "May" : "May" },
      { value: "06", label: lang === "es" ? "Jun" : "Jun" },
      { value: "07", label: lang === "es" ? "Jul" : "Jul" },
      { value: "08", label: lang === "es" ? "Ago" : "Aug" },
      { value: "09", label: lang === "es" ? "Sep" : "Sep" },
      { value: "10", label: lang === "es" ? "Oct" : "Oct" },
      { value: "11", label: lang === "es" ? "Nov" : "Nov" },
      { value: "12", label: lang === "es" ? "Dic" : "Dec" },
    ];
  }, [lang]);

  const handleMonthChange = (newMonth: string) => {
    const y = year || currentYear.toString();
    onChange(`${y}-${newMonth}`);
  };

  const handleYearChange = (newYear: string) => {
    const m = month || "01";
    onChange(`${newYear}-${m}`);
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      {/* Month Dropdown */}
      <div className="relative flex-1">
        <select
          value={month}
          onChange={(e) => handleMonthChange(e.target.value)}
          className="w-full p-3.5 bg-[#1a1a24] border border-[#2a2a3a] rounded text-[#f5f5f7] appearance-none cursor-pointer focus:outline-none focus:border-[#00d4aa] focus:shadow-[0_0_0_3px_rgba(0,212,170,0.2)] transition-all"
        >
          <option value="" disabled className="bg-[#13131a]">
            {lang === "es" ? "Mes" : "Month"}
          </option>
          {months.map((m) => (
            <option key={m.value} value={m.value} className="bg-[#13131a]">
              {m.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#6b6b7a]">
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Year Dropdown */}
      <div className="relative flex-1 flex-shrink-0">
        <select
          value={year}
          onChange={(e) => handleYearChange(e.target.value)}
          className="w-full p-3.5 bg-[#1a1a24] border border-[#2a2a3a] rounded text-[#f5f5f7] font-mono appearance-none cursor-pointer focus:outline-none focus:border-[#00d4aa] focus:shadow-[0_0_0_3px_rgba(0,212,170,0.2)] transition-all"
        >
          <option value="" disabled className="bg-[#13131a]">
            {lang === "es" ? "Año" : "Year"}
          </option>
          {years.map((y) => (
            <option key={y} value={y.toString()} className="bg-[#13131a] font-mono">
              {y}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#6b6b7a]">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
