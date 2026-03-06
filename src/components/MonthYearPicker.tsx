"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useMemo } from "react";

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
      { value: "01", label: lang === "es" ? "Enero" : "January" },
      { value: "02", label: lang === "es" ? "Febrero" : "February" },
      { value: "03", label: lang === "es" ? "Marzo" : "March" },
      { value: "04", label: lang === "es" ? "Abril" : "April" },
      { value: "05", label: lang === "es" ? "Mayo" : "May" },
      { value: "06", label: lang === "es" ? "Junio" : "June" },
      { value: "07", label: lang === "es" ? "Julio" : "July" },
      { value: "08", label: lang === "es" ? "Agosto" : "August" },
      { value: "09", label: lang === "es" ? "Septiembre" : "September" },
      { value: "10", label: lang === "es" ? "Octubre" : "October" },
      { value: "11", label: lang === "es" ? "Noviembre" : "November" },
      { value: "12", label: lang === "es" ? "Diciembre" : "December" },
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
          className="w-full p-3 input-field appearance-none cursor-pointer"
        >
          <option value="" disabled>
            {lang === "es" ? "Mes" : "Month"}
          </option>
          {months.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[var(--text-tertiary)]">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Year Dropdown */}
      <div className="relative flex-1 flex-shrink-0">
        <select
          value={year}
          onChange={(e) => handleYearChange(e.target.value)}
          className="w-full p-3 input-field appearance-none cursor-pointer"
        >
          <option value="" disabled>
            {lang === "es" ? "Año" : "Year"}
          </option>
          {years.map((y) => (
            <option key={y} value={y.toString()}>
              {y}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[var(--text-tertiary)]">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
