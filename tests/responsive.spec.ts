import { test, expect, Page } from "@playwright/test";

// ─── Viewport definitions ─────────────────────────────────────────────────────
const VIEWPORTS = {
  mobileS: { width: 320, height: 568 },   // iPhone SE 1st gen
  mobileM: { width: 375, height: 667 },   // iPhone SE 3rd gen
  mobileL: { width: 390, height: 844 },   // iPhone 14
  tablet:  { width: 768, height: 1024 },  // iPad portrait
  desktop: { width: 1280, height: 800 },  // Standard laptop
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Returns body scrollWidth vs viewport width — should be ≤ viewport on mobile */
async function getHorizontalOverflow(page: Page): Promise<number> {
  return page.evaluate(() => {
    return document.documentElement.scrollWidth - window.innerWidth;
  });
}

/** Asserts no horizontal scrollbar appears */
async function expectNoHorizontalOverflow(page: Page, label: string) {
  const overflow = await getHorizontalOverflow(page);
  expect(overflow, `Horizontal overflow on ${label}: ${overflow}px`).toBeLessThanOrEqual(0);
}

/** Asserts header logo and nav container are visible */
async function expectHeaderVisible(page: Page) {
  const header = page.locator("header");
  await expect(header).toBeVisible();
  // Logo image
  const logo = header.locator("img");
  await expect(logo.first()).toBeVisible();
}

/** Asserts footer is visible and not clipped */
async function expectFooterVisible(page: Page) {
  const footer = page.locator("footer");
  await expect(footer).toBeVisible();
}

/** Check that no important content is visually clipped (basic bounding-box check) */
async function expectNoClipping(page: Page, selector: string, label: string) {
  const el = page.locator(selector).first();
  if (await el.count() === 0) return; // element might not exist on this page

  const vw = page.viewportSize()!.width;
  const box = await el.boundingBox();
  if (!box) return;

  expect(box.x, `${label} starts off-screen left`).toBeGreaterThanOrEqual(-1);
  expect(box.x + box.width, `${label} overflows viewport right`).toBeLessThanOrEqual(vw + 1);
}

// ─── Pages to check ──────────────────────────────────────────────────────────
const ROUTES = [
  { path: "/", name: "Home / Calculator" },
  { path: "/valoracion-boe", name: "BOE Valuation" },
  { path: "/itp", name: "ITP Info" },
  { path: "/how-it-works", name: "How It Works" },
  { path: "/about", name: "About" },
  { path: "/blog", name: "Blog" },
  { path: "/resources", name: "Resources" },
  { path: "/preguntas-frecuentes", name: "FAQ" },
  { path: "/importar-coche-dubai", name: "Dubai Calculator" },
  { path: "/importar-desde/alemania", name: "Country: Germany" },
  { path: "/importar-coche/madrid", name: "Region: Madrid" },
  { path: "/privacy", name: "Privacy" },
  { path: "/terms", name: "Terms" },
];

// ─── Mobile responsive suite ─────────────────────────────────────────────────

for (const vp of [VIEWPORTS.mobileS, VIEWPORTS.mobileM, VIEWPORTS.mobileL]) {
  const vpLabel = Object.entries(VIEWPORTS).find(([, v]) => v === vp)![0];

  test.describe(`Responsive — ${vpLabel} (${vp.width}×${vp.height})`, () => {
    test.use({ viewport: vp });

    for (const route of ROUTES) {
      test(`${route.name} — no horizontal overflow`, async ({ page }) => {
        await page.goto(route.path, { waitUntil: "domcontentloaded" });
        await page.waitForTimeout(500); // allow hydration

        await expectNoHorizontalOverflow(page, `${route.name} @ ${vpLabel}`);
      });

      test(`${route.name} — header and key content visible`, async ({ page }) => {
        await page.goto(route.path, { waitUntil: "domcontentloaded" });
        await page.waitForTimeout(500);

        await expectHeaderVisible(page);
        await expectFooterVisible(page);

        // Main content area should exist and not be clipped
        await expectNoClipping(page, "main, [role='main']", `main @ ${route.name}`);
      });
    }

    // ── Home page specific checks ───────────────────────────────────────────

    test("Home — calculator form fields are visible and usable", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(800);

      // Import type pill group
      const pills = page.locator(".pill-group").first();
      await expect(pills).toBeVisible();

      // The calculate button should be visible without horizontal scroll
      const calcBtn = page.locator("button.btn-primary").filter({ hasText: /calcul/i }).last();
      await expect(calcBtn).toBeVisible();
      const box = await calcBtn.boundingBox();
      expect(box, "Calculate button must have layout").toBeTruthy();
      expect(box!.width, "Calculate button must fill its container").toBeGreaterThan(100);
    });

    test("Home — mobile hamburger menu opens and closes", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(500);

      // Hamburger button
      const hamburger = page.locator("button[aria-label='Open menu'], button[aria-label='Close menu']").first();
      await expect(hamburger).toBeVisible();

      // Open
      await hamburger.click();
      await page.waitForTimeout(300);
      // Mobile nav should slide in — check a nav link is now visible
      const mobileNav = page.locator("nav").last();
      await expect(mobileNav).toBeVisible();

      // Close via backdrop or hamburger again
      await hamburger.click();
      await page.waitForTimeout(300);
    });

    // ── Result page specific checks ────────────────────────────────────────

    test("Result page — breakdown card fully within viewport", async ({ page }) => {
      // Navigate with a pre-filled result URL
      const params = new URLSearchParams({
        importType: "EU",
        originCountry: "Germany",
        carPrice: "20000",
        officialFiscalValue: "18000",
        carAge: "used",
        co2Emissions: "120",
        sellerType: "dealer",
        itpRate: "0.06",
        selectedRegion: "Madrid",
      });
      await page.goto(`/result?${params}`, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(1000);

      // Total cost card
      const heroCard = page.locator(".card-hero").first();
      await expect(heroCard).toBeVisible();
      await expectNoClipping(page, ".card-hero", `result hero card @ ${vpLabel}`);

      // Breakdown card
      const breakdownCard = page.locator(".card-elevated").first();
      await expect(breakdownCard).toBeVisible();
      await expectNoClipping(page, ".card-elevated", `result breakdown @ ${vpLabel}`);

      // No horizontal overflow
      await expectNoHorizontalOverflow(page, `result page @ ${vpLabel}`);
    });

    // ── BOE tool checks ────────────────────────────────────────────────────

    test("BOE Valuation — inputs and results visible", async ({ page }) => {
      await page.goto("/valoracion-boe", { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(500);

      await expectNoHorizontalOverflow(page, `BOE @ ${vpLabel}`);

      // Page heading or main form container
      const main = page.locator("main").first();
      await expect(main).toBeVisible();
    });
  });
}

// ─── Tablet responsive suite ─────────────────────────────────────────────────

test.describe(`Responsive — tablet (${VIEWPORTS.tablet.width}×${VIEWPORTS.tablet.height})`, () => {
  test.use({ viewport: VIEWPORTS.tablet });

  for (const route of ROUTES) {
    test(`${route.name} — no horizontal overflow on tablet`, async ({ page }) => {
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(500);

      await expectNoHorizontalOverflow(page, `${route.name} @ tablet`);
      await expectHeaderVisible(page);
    });
  }

  test("Home — desktop nav visible on tablet", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);

    // On tablet (768px) md: breakpoint should show desktop nav
    const desktopNav = page.locator("nav.hidden.md\\:flex");
    await expect(desktopNav).toBeVisible();
  });
});

// ─── Desktop smoke checks ─────────────────────────────────────────────────────

test.describe(`Responsive — desktop (${VIEWPORTS.desktop.width}×${VIEWPORTS.desktop.height})`, () => {
  test.use({ viewport: VIEWPORTS.desktop });

  test("Home — calculator centered, no sidebar artifacts", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);

    // No AdBanner elements should exist in the DOM at all
    const adBanners = page.locator(".adsbygoogle");
    expect(await adBanners.count()).toBe(0);

    await expectNoHorizontalOverflow(page, "home @ desktop");
    await expectHeaderVisible(page);
  });

  test("Result page — two-column layout renders properly", async ({ page }) => {
    const params = new URLSearchParams({
      importType: "EU",
      originCountry: "Germany",
      carPrice: "20000",
      officialFiscalValue: "18000",
      carAge: "used",
      co2Emissions: "120",
      sellerType: "dealer",
      itpRate: "0.06",
    });
    await page.goto(`/result?${params}`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);

    // Both columns should be side-by-side on desktop
    const heroCard = page.locator(".card-hero").first();
    const breakdownCard = page.locator(".card-elevated").first();

    await expect(heroCard).toBeVisible();
    await expect(breakdownCard).toBeVisible();

    const heroBox = await heroCard.boundingBox();
    const breakdownBox = await breakdownCard.boundingBox();

    // On desktop md:grid-cols-2 — both cards should start at roughly the same Y
    expect(heroBox).toBeTruthy();
    expect(breakdownBox).toBeTruthy();
    // Cards should be on same row (Y diff < 50px)
    expect(Math.abs(heroBox!.y - breakdownBox!.y), "cards should be in same row on desktop").toBeLessThan(50);
  });

  test("No ad slots in DOM (all ads removed)", async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      const adSlots = page.locator(".adsbygoogle");
      expect(await adSlots.count(), `Ad slots found on ${route.path}`).toBe(0);
    }
  });
});
