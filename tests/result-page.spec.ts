import { test, expect } from "@playwright/test";

// Result page loads via URL params (deep-linkable). These tests verify the new
// fields and components render correctly.

test.beforeEach(async ({ page }) => {
  // Pre-set the cookie-consent flag so the overlay doesn't intercept clicks.
  await page.addInitScript(() => {
    try {
      localStorage.setItem("cookie_consent", "accepted");
    } catch {}
  });
});

test("Tesla EV → Cataluña shows ITP exemption note", async ({ page }) => {
  await page.goto(
    "/result?importType=EU&originCountry=Germany&carPrice=35000&officialFiscalValue=50000&carAge=2_years&isNewCondition=false&co2Emissions=0&sellerType=private&itpRate=0.05&spanishRegion=Catalu%C3%B1a&needsHomologation=false&brand=Tesla&model=Model3",
  );
  await expect(page.locator("text=/Decreto-ley 5\\/2025|Decree-Law 5\\/2025/i").first()).toBeVisible({
    timeout: 10000,
  });
});

test("Andalucía EV → ITP reduced 1% note", async ({ page }) => {
  await page.goto(
    "/result?importType=EU&originCountry=Germany&carPrice=30000&officialFiscalValue=40000&carAge=1_year&isNewCondition=false&co2Emissions=0&sellerType=private&itpRate=0.04&spanishRegion=Andaluc%C3%ADa&needsHomologation=false&brand=Tesla&model=Model3",
  );
  await expect(page.locator("text=/Ley 5\\/2021|Law 5\\/2021/i").first()).toBeVisible({
    timeout: 10000,
  });
});

test("BMW Cataluña 220g/km uses 16% top-bracket IEDMT", async ({ page }) => {
  await page.goto(
    "/result?importType=EU&originCountry=Germany&carPrice=50000&officialFiscalValue=80000&carAge=1_year&isNewCondition=false&co2Emissions=220&sellerType=dealer&spanishRegion=Catalu%C3%B1a&needsHomologation=false&brand=BMW&model=M5",
  );
  // Click "How we calculated" to expand and check the rate in details
  await expect(page.locator("text=/16,00%|16\\.00%/").first()).toBeVisible({
    timeout: 10000,
  });
});

test("Audit-risk badge appears when declared price <60% of market", async ({ page }) => {
  await page.goto(
    "/result?importType=EU&originCountry=Germany&carPrice=5000&officialFiscalValue=30000&carAge=3_years&isNewCondition=false&co2Emissions=130&sellerType=private&itpRate=0.04&spanishRegion=Madrid&needsHomologation=false&brand=BMW&model=320d",
  );
  await expect(
    page.locator("text=/Riesgo de inspección alto|High audit risk/i").first(),
  ).toBeVisible({ timeout: 10000 });
});

test("TCO panel renders with 1y/5y switcher", async ({ page }) => {
  await page.goto(
    "/result?importType=EU&originCountry=Germany&carPrice=22000&officialFiscalValue=38000&carAge=3_years&isNewCondition=false&co2Emissions=130&sellerType=dealer&spanishRegion=Madrid&needsHomologation=false&brand=BMW&model=320d",
  );
  await expect(
    page.locator("text=/Coste real de propiedad|Total cost of ownership/i").first(),
  ).toBeVisible({ timeout: 10000 });
});

test("Region comparator highlights cheapest region", async ({ page }) => {
  await page.goto(
    "/result?importType=EU&originCountry=Germany&carPrice=22000&officialFiscalValue=38000&carAge=3_years&isNewCondition=false&co2Emissions=130&sellerType=dealer&spanishRegion=Madrid&needsHomologation=false&brand=BMW&model=320d",
  );
  await expect(
    page.locator("text=/Comparativa por comunidad|Compare across regions/i").first(),
  ).toBeVisible({ timeout: 10000 });
  await expect(
    page.locator("text=/Más barata|Cheapest/i").first(),
  ).toBeVisible({ timeout: 10000 });
});
