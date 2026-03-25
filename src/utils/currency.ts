/**
 * Format a number as currency without cents (EUR)
 * @param value - The number to format
 * @returns Formatted currency string (€1.235 not €1.234,56)
 */
export function formatCurrency(value: number | undefined): string {
  if (value === undefined || value === null) {
    return "€0";
  }

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
