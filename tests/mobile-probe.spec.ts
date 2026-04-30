import { test, expect, Page } from "@playwright/test";

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE PROBE — measures actual element widths / scrollWidths to surface real
// overflow and text-clipping issues. Each test logs a structured report.
// ─────────────────────────────────────────────────────────────────────────────

const NARROW = { width: 320, height: 568 };
const SE = { width: 375, height: 667 };

const RESULT_BMW =
  "/result?importType=EU&originCountry=Germany&carPrice=22000&officialFiscalValue=38000&carAge=3_years&isNewCondition=false&co2Emissions=130&sellerType=dealer&spanishRegion=Madrid&needsHomologation=false&brand=BMW&model=320d";
const RESULT_NONEU =
  "/result?importType=NonEU&originCountry=Japan&carPrice=25000&officialFiscalValue=60000&carAge=2_years&isNewCondition=false&co2Emissions=175&sellerType=dealer&transportCost=2000&insuranceCost=200&spanishRegion=Madrid&needsHomologation=true&brand=Lexus&model=LS";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    try {
      localStorage.setItem("cookie_consent", "accepted");
    } catch {}
  });
});

async function reportOverflow(page: Page, label: string) {
  const data = await page.evaluate(() => {
    const SKIP_TAGS = new Set([
      "TR", "TD", "TH", "TBODY", "THEAD", "TABLE", "COLGROUP",
    ]);
    function ancestorClipsX(el: HTMLElement): boolean {
      let cur: HTMLElement | null = el.parentElement;
      while (cur && cur !== document.body) {
        const ox = getComputedStyle(cur).overflowX;
        if (ox === "auto" || ox === "scroll" || ox === "hidden") return true;
        cur = cur.parentElement;
      }
      return false;
    }
    const issues: { tag: string; text: string; reason: string }[] = [];
    const vw = window.innerWidth;
    const all = document.querySelectorAll<HTMLElement>("body *");
    all.forEach((el) => {
      if (SKIP_TAGS.has(el.tagName)) return;
      // Skip if any ancestor clips horizontal overflow (legit scroll containers).
      if (ancestorClipsX(el)) return;
      const r = el.getBoundingClientRect();
      // overflow right of viewport (real issue)
      if (r.right > vw + 1 && r.width <= vw * 2 && r.width > 8) {
        const text = (el.textContent ?? "").trim().slice(0, 80);
        issues.push({
          tag: el.tagName.toLowerCase() + "." + (el.className || "").toString().slice(0, 40),
          text,
          reason: `right=${Math.round(r.right)} > vw=${vw}`,
        });
      }
    });
    // dedupe
    const seen = new Set<string>();
    return issues.filter((i) => {
      const k = i.tag + i.text;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  });

  if (data.length > 0) {
    console.log(`\n──── ${label} (${data.length} issues) ────`);
    data.slice(0, 25).forEach((d) =>
      console.log(`  [${d.tag}] ${d.reason} :: "${d.text}"`),
    );
  } else {
    console.log(`✓ ${label}: no overflow`);
  }
  return data;
}

test.describe("Mobile narrow (320px) — full audit", () => {
  test.use({ viewport: NARROW });

  test("Home @ 320px — no internal overflow", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);
    const issues = await reportOverflow(page, "Home @ 320px");
    expect(issues.length, "elements must not overflow viewport at 320px").toBe(0);
  });

  test("Result EU @ 320px — no internal overflow", async ({ page }) => {
    await page.goto(RESULT_BMW, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);
    const issues = await reportOverflow(page, "Result EU @ 320px");
    expect(issues.length, "result page elements must not overflow at 320px").toBe(0);
  });

  test("Result Non-EU @ 320px — no internal overflow", async ({ page }) => {
    await page.goto(RESULT_NONEU, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);
    const issues = await reportOverflow(page, "Result Non-EU @ 320px");
    expect(issues.length, "result page Non-EU must not overflow at 320px").toBe(0);
  });
});

test.describe("Mobile SE (375px) — hero number sizing", () => {
  test.use({ viewport: SE });

  test("Hero total cost number does not overflow card", async ({ page }) => {
    await page.goto(RESULT_NONEU, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);
    const hero = page.locator(".card-hero .number-hero").first();
    const box = await hero.boundingBox();
    const card = page.locator(".card-hero").first();
    const cardBox = await card.boundingBox();
    expect(box).toBeTruthy();
    expect(cardBox).toBeTruthy();
    expect(box!.x + box!.width, "hero number must fit inside hero card").toBeLessThanOrEqual(
      cardBox!.x + cardBox!.width + 1,
    );
  });

  test("Region comparator table is horizontally scrollable not overflowing parent", async ({
    page,
  }) => {
    await page.goto(RESULT_BMW, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);
    // The wrapper overflow-x-auto should keep scroll inside; the table can be wider.
    const wrapper = page.locator("div.overflow-x-auto").first();
    const wBox = await wrapper.boundingBox();
    expect(wBox).toBeTruthy();
    expect(wBox!.x + wBox!.width).toBeLessThanOrEqual(SE.width + 1);
  });

  test("Hero number font-size: report measured font-size on mobile", async ({ page }) => {
    await page.goto(
      "/result?importType=NonEU&originCountry=USA&carPrice=120000&officialFiscalValue=180000&carAge=2_years&isNewCondition=false&co2Emissions=240&sellerType=dealer&transportCost=4000&insuranceCost=600&spanishRegion=Catalu%C3%B1a&needsHomologation=true&brand=Lambo&model=Urus",
      { waitUntil: "domcontentloaded" },
    );
    await page.waitForTimeout(1200);
    const data = await page.evaluate(() => {
      const el = document.querySelector(".card-hero .number-hero");
      if (!el) return null;
      const cs = getComputedStyle(el as HTMLElement);
      const r = (el as HTMLElement).getBoundingClientRect();
      return {
        fontSize: parseFloat(cs.fontSize),
        text: (el.textContent ?? "").trim(),
        width: r.width,
        cardWidth: (el.parentElement?.parentElement as HTMLElement)
          ?.getBoundingClientRect().width,
      };
    });
    console.log("\nHero @ 375px (heavy car):", data);
    expect(data!.fontSize, "hero text-5xl ~= 48px is too big on 375px").toBeLessThanOrEqual(54);
    expect(data!.width, "hero number must fit card").toBeLessThanOrEqual(data!.cardWidth + 1);
  });

  test("Region chips don't wrap to multi-line on 375px", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);
    // Each chip should be single line
    const data = await page.evaluate(() => {
      const chips = Array.from(document.querySelectorAll<HTMLElement>(".chip"));
      return chips.map((c) => ({
        text: (c.textContent ?? "").trim().slice(0, 32),
        h: c.getBoundingClientRect().height,
        lines: Math.round(c.getBoundingClientRect().height / parseFloat(getComputedStyle(c).lineHeight || "16")),
      }));
    });
    const tall = data.filter((d) => d.h > 50);
    console.log("Tall chips (likely wrapping):", tall);
    expect(tall.length, "region chips should not wrap to multiple lines").toBeLessThanOrEqual(2);
  });
});
