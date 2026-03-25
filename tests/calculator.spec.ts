import { test, expect } from "@playwright/test";

// Helper: switch VehicleAutocomplete to manual mode and confirm a fiscal value.
// The autocomplete has a "manual entry" link at the bottom that shows a number input.
async function enterFiscalValueManually(page: import("@playwright/test").Page, value: string) {
  // The manual entry link text is "Can't find your car? Enter value manually →" (en)
  // or "¿No encuentras tu vehículo? Introduce el valor manualmente →" (es).
  // Both contain "manually" / "manualmente". Use the more specific partial text match.
  const manualLink = page.locator("button").filter({ hasText: /manually|manualmente/i });
  await manualLink.click();

  // Fill the BOE fiscal value input
  const fiscalInput = page.locator('input[placeholder="Ej: 45000"]');
  await expect(fiscalInput).toBeVisible();
  await fiscalInput.fill(value);

  // Click the "Confirm value" button that appears once a valid value is entered
  await page.locator("button.btn-primary").filter({ hasText: /confirm|confirmar/i }).click();
}

// ─── Test 1: EU Import happy path ───────────────────────────────────────────
// Fills a typical German car import via manual fiscal value entry, submits,
// and verifies the result page shows a total cost with the full breakdown.
test("EU import: fills form and shows total cost with breakdown", async ({
  page,
}) => {
  await page.goto("/");

  // The import-type pill group is the second .pill-group on the page.
  // EU button text is "Spain (from EU)" / "España (desde UE)" depending on lang.
  const importTypePills = page.locator(".pill-group").nth(1);
  const euPill = importTypePills.locator(".pill-option").first();
  await expect(euPill).toHaveClass(/active/);

  // Germany chip should be selected by default
  await expect(page.locator(".chip", { hasText: "Germany" }).first()).toBeVisible();

  // Enter fiscal value via manual mode
  await enterFiscalValueManually(page, "18000");

  // Fill car price
  await page.locator('input[placeholder="25,000"]').fill("18000");
  await page.locator('input[placeholder="25,000"]').blur();

  // Fill CO2
  await page.locator('input[placeholder="145"]').fill("120");
  await page.locator('input[placeholder="145"]').blur();

  // Click Calculate — it's the last btn-primary on the page
  await page.locator("button.btn-primary").filter({ hasText: /calcul/i }).last().click();

  // Should navigate to /result
  await expect(page).toHaveURL(/\/result/, { timeout: 10_000 });

  // The breakdown card (.card-elevated) must be visible
  const breakdown = page.locator(".card-elevated").first();
  await expect(breakdown).toBeVisible();

  // Hero total cost (inside .card-hero) must contain digits
  const totalCostEl = page.locator(".card-hero .number-display");
  await expect(totalCostEl).toBeVisible();
  const totalText = await totalCostEl.textContent();
  expect(totalText).toMatch(/\d/);

  // DGT and ITV rows must be in the visible breakdown (not print layout)
  await expect(breakdown.locator("text=DGT")).toBeVisible();
  await expect(breakdown.locator("text=ITV")).toBeVisible();
});

// ─── Test 2: Non-EU import shows duty + VAT rows ─────────────────────────────
// Switches to NonEU (UAE), enters values, and verifies that customs duty
// and import VAT line items appear — these are NonEU-exclusive.
test("NonEU import: duty and VAT rows appear in breakdown", async ({ page }) => {
  await page.goto("/");

  // Switch to Non-EU — second pill in the import-type pill group
  const importTypePills = page.locator(".pill-group").nth(1);
  await importTypePills.locator(".pill-option").nth(1).click();

  // UAE should be auto-selected
  await expect(page.locator(".chip.active", { hasText: "UAE" })).toBeVisible();

  // Enter fiscal value via manual mode
  await enterFiscalValueManually(page, "30000");

  // Fill car price
  await page.locator('input[placeholder="25,000"]').fill("30000");
  await page.locator('input[placeholder="25,000"]').blur();

  // Fill transport cost (NonEU-specific field)
  await page.locator('input[placeholder="1500"]').fill("1200");

  // Fill CO2
  await page.locator('input[placeholder="145"]').fill("180");
  await page.locator('input[placeholder="145"]').blur();

  // Click Calculate
  await page.locator("button.btn-primary").filter({ hasText: /calcul/i }).last().click();

  // Should be on result page
  await expect(page).toHaveURL(/\/result/, { timeout: 10_000 });

  // Breakdown card must be visible
  const breakdown = page.locator(".card-elevated").first();
  await expect(breakdown).toBeVisible();

  // Customs duty row — scoped to visible breakdown card
  // The label contains "10%" in all languages (e.g. "Duty (10%)" / "Arancel (10%)")
  await expect(breakdown.locator("text=/10%/")).toBeVisible();

  // Import VAT row — 21% in all languages
  await expect(breakdown.locator("text=/21%/")).toBeVisible();

  // Customs agent fee row — DUA appears in all languages
  await expect(breakdown.locator("text=/DUA/")).toBeVisible();

  // Hero total cost must contain digits
  const totalEl = page.locator(".card-hero .number-display");
  await expect(totalEl).toBeVisible();
  const totalText = await totalEl.textContent();
  expect(totalText).toMatch(/\d/);
});
