import { test, expect, Page } from "@playwright/test";

type Lang = "en" | "es" | "ru" | "de" | "fr";

const BASE = "http://localhost:3100";

async function setLang(page: Page, lang: Lang, path: string) {
  await page.goto(BASE + path);
  await page.evaluate((l) => localStorage.setItem("app_language", l), lang);
  await page.reload();
}

const PAGES = [
  "/importar-coche-dubai",
  "/importar-coche-madrid",
  "/importar-coche-barcelona",
  "/importar-coche-valencia",
  "/preguntas-frecuentes",
  "/metodologia",
];

const EXPECT_STRINGS: Record<Lang, { dubaiHero: RegExp; faqTitle: RegExp; methH1: RegExp; cityH1: RegExp }> = {
  en: {
    dubaiHero: /Importing a Car from Dubai/i,
    faqTitle: /Frequently Asked Questions/i,
    methH1: /Calculation Methodology/i,
    cityH1: /Importing a Car in/i,
  },
  es: {
    dubaiHero: /Importar Coche desde Dub/i,
    faqTitle: /Preguntas Frecuentes/i,
    methH1: /Metodolog/i,
    cityH1: /Importar Coche en/i,
  },
  ru: {
    dubaiHero: /Импорт автомобиля из Дубая/i,
    faqTitle: /Частые вопросы/i,
    methH1: /Методология/i,
    cityH1: /Импорт авто в/i,
  },
  de: {
    dubaiHero: /Auto-Import aus Dubai/i,
    faqTitle: /Häufige Fragen/i,
    methH1: /Methodik/i,
    cityH1: /Auto-Import in/i,
  },
  fr: {
    dubaiHero: /Importer une voiture de Dubaï/i,
    faqTitle: /Questions fréquentes/i,
    methH1: /Méthodologie/i,
    cityH1: /Importer une voiture/i,
  },
};

test.describe("i18n on all pages", () => {
  for (const lang of ["en", "es", "ru", "de", "fr"] as Lang[]) {
    test(`Dubai page renders in ${lang}`, async ({ page }) => {
      await setLang(page, lang, "/importar-coche-dubai");
      await expect(page.locator("h1").first()).toContainText(EXPECT_STRINGS[lang].dubaiHero);
    });

    test(`FAQ page renders in ${lang}`, async ({ page }) => {
      await setLang(page, lang, "/preguntas-frecuentes");
      await expect(page.locator("h1").first()).toContainText(EXPECT_STRINGS[lang].faqTitle);
    });

    test(`Methodology page renders in ${lang}`, async ({ page }) => {
      await setLang(page, lang, "/metodologia");
      await expect(page.locator("h1").first()).toContainText(EXPECT_STRINGS[lang].methH1);
    });

    test(`Madrid city page renders in ${lang}`, async ({ page }) => {
      await setLang(page, lang, "/importar-coche-madrid");
      await expect(page.locator("h1").first()).toContainText(EXPECT_STRINGS[lang].cityH1);
    });
  }

  test("All city pages render H1 in English", async ({ page }) => {
    const cities = [
      "madrid", "barcelona", "valencia", "sevilla", "malaga",
      "bilbao", "zaragoza", "murcia", "palma", "alicante",
    ];
    for (const slug of cities) {
      await setLang(page, "en", `/importar-coche-${slug}`);
      await expect(page.locator("h1").first()).toContainText(/Importing a Car in/i);
    }
  });

  test("Dubai page in EN does not leak Spanish strings", async ({ page }) => {
    await setLang(page, "en", "/importar-coche-dubai");
    const text = await page.locator("main, .max-w-3xl").first().innerText();
    expect(text).not.toMatch(/Cargando calculadora/);
    expect(text).not.toMatch(/¿Cómo se construye/);
    expect(text).not.toMatch(/Modelos Populares/);
  });
});

test("Language switcher persists across pages", async ({ page }) => {
  await page.goto(BASE + "/importar-coche-dubai");
  await page.evaluate(() => localStorage.setItem("app_language", "de"));
  await page.reload();
  await expect(page.locator("h1").first()).toContainText(/Auto-Import aus Dubai/i);

  await page.goto(BASE + "/metodologia");
  await expect(page.locator("h1").first()).toContainText(/Methodik/i);

  await page.goto(BASE + "/preguntas-frecuentes");
  await expect(page.locator("h1").first()).toContainText(/Häufige Fragen/i);
});
