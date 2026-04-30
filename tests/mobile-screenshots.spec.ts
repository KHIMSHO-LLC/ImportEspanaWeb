import { test } from "@playwright/test";
import * as fs from "node:fs";
import * as path from "node:path";

// Captures full-page screenshots at common mobile viewports for visual review.
// Drops files into screenshots/<viewport>/<route>.png.

const SHOTS_DIR = path.join(__dirname, "..", "screenshots");

const VIEWPORTS: { name: string; width: number; height: number }[] = [
  { name: "iphone-se", width: 375, height: 667 },
  { name: "iphone-12", width: 390, height: 844 },
  { name: "iphone-14-pro-max", width: 430, height: 932 },
  { name: "ipad-mini", width: 768, height: 1024 },
];

const ROUTES: { path: string; name: string }[] = [
  { path: "/", name: "home" },
  {
    path:
      "/result?importType=EU&originCountry=Germany&carPrice=22000&officialFiscalValue=38000&carAge=3_years&isNewCondition=false&co2Emissions=130&sellerType=dealer&spanishRegion=Madrid&needsHomologation=false&brand=BMW&model=320d",
    name: "result-eu-dealer",
  },
  {
    path:
      "/result?importType=EU&originCountry=Germany&carPrice=35000&officialFiscalValue=50000&carAge=2_years&isNewCondition=false&co2Emissions=0&sellerType=private&itpRate=0.05&spanishRegion=Catalu%C3%B1a&needsHomologation=false&brand=Tesla&model=Model3",
    name: "result-tesla-cataluna",
  },
  {
    path:
      "/result?importType=NonEU&originCountry=Japan&carPrice=25000&officialFiscalValue=60000&carAge=2_years&isNewCondition=false&co2Emissions=175&sellerType=dealer&transportCost=2000&insuranceCost=200&spanishRegion=Madrid&needsHomologation=true&brand=Lexus&model=LS",
    name: "result-noneu-japan",
  },
  {
    path:
      "/result?importType=EU&originCountry=Germany&carPrice=5000&officialFiscalValue=30000&carAge=3_years&isNewCondition=false&co2Emissions=130&sellerType=private&itpRate=0.04&spanishRegion=Madrid&needsHomologation=false&brand=BMW&model=320d",
    name: "result-audit-high",
  },
  { path: "/itp", name: "itp" },
  { path: "/valoracion-boe", name: "valoracion-boe" },
  { path: "/preguntas-frecuentes", name: "faq" },
  { path: "/blog", name: "blog" },
  { path: "/importar-coche/madrid", name: "region-madrid" },
];

for (const vp of VIEWPORTS) {
  test.describe(`Screenshots — ${vp.name}`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    test.beforeEach(async ({ page }) => {
      await page.addInitScript(() => {
        try {
          localStorage.setItem("cookie_consent", "accepted");
        } catch {}
      });
    });

    for (const route of ROUTES) {
      test(`${route.name}`, async ({ page }) => {
        const dir = path.join(SHOTS_DIR, vp.name);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        await page.goto(route.path, { waitUntil: "domcontentloaded" });
        await page.waitForTimeout(900);
        await page.screenshot({
          path: path.join(dir, `${route.name}.png`),
          fullPage: true,
        });
      });
    }
  });
}
