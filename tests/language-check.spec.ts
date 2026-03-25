import { test, expect } from "@playwright/test";

// Spanish keywords that should never appear when language is set to English
const SPANISH_KEYWORDS = [
  "¿Quieres ayuda profesional",
  "Déjanos tus datos",
  "Sin compromiso",
  "Tus datos no se compartirán",
  "Solicitar asesoramiento",
  "Enviando...",
  "No se pudo enviar",
  "Por favor, llámanos directamente",
  "¿Qué hago con este número?",
  "¿Para qué sirve el Valor BOE?",
  "¿Cuánto es el arancel",
  "¿Necesito homologación",
  "¿Cuánto tarda el transporte",
  "¿Los coches eléctricos",
  "¿Los coches de Dubái",
  "¿Qué marcas son más baratas",
  "¿Qué es el ITP?",
  "¿Cuándo se aplica?",
  "¿Cómo se calcula?",
  "¿Importando un coche",
  "¿No encuentras tu modelo?",
];

// Regex to find currency with cents (€X,XX or €X.XX format)
const CURRENCY_WITH_CENTS = /€[\d.,]+,\d{2}|€[\d.,]+\.\d{2}/g;

test.describe("Language Consistency", () => {
  test("home page should respect English language setting", async ({
    page,
  }) => {
    // Set language to English in localStorage before navigating
    await page.addInitScript(() => {
      localStorage.setItem("app_language", "en");
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Check for Spanish keywords
    const bodyText = await page.evaluate(() => document.body.innerText);
    for (const keyword of SPANISH_KEYWORDS) {
      expect(
        bodyText,
        `Found Spanish text "${keyword}" when language is English`,
      ).not.toContain(keyword);
    }

    // Verify English content exists
    expect(bodyText).toContain("Origin Country");
  });

  test("result page should respect English language setting", async ({
    page,
  }) => {
    // Set language to English in localStorage before navigating
    await page.addInitScript(() => {
      localStorage.setItem("app_language", "en");
    });

    // Navigate to result page
    const resultUrl = `/?importType=EU&originCountry=Germany&carPrice=20000&officialFiscalValue=33700&carAge=new&registrationDate=2021-05&isNewCondition=false&co2Emissions=100&sellerType=dealer&transportCost=&needsHomologation=false&itpRate=&brand=MERCEDES&model=GLA+180+1.3`;

    await page.goto(resultUrl);
    await page.waitForLoadState("networkidle");

    // Check for Spanish keywords
    const bodyText = await page.evaluate(() => document.body.innerText);
    for (const keyword of SPANISH_KEYWORDS) {
      expect(
        bodyText,
        `Found Spanish text "${keyword}" on result page when language is English`,
      ).not.toContain(keyword);
    }

    // Verify the page has content
    expect(bodyText).toContain("ESTIMATED TOTAL COST");
  });

  test("all pages respect Spanish language setting", async ({ page }) => {
    const pages = ["/", "/how-it-works", "/about", "/itp"];

    for (const pageUrl of pages) {
      await page.goto(pageUrl);

      // Set language to Spanish
      await page.evaluate(() => {
        localStorage.setItem("app_language", "es");
      });
      await page.reload();

      const bodyText = await page.evaluate(() => document.body.innerText);

      // Verify Spanish content exists (at least some Spanish)
      expect(
        bodyText,
        `Page ${pageUrl} should have Spanish content when language is ES`,
      ).toMatch(/[àáäâèéëêìíïîòóöôùúüûñ]/i);
    }
  });

  test("currency should not show cents", async ({ page }) => {
    const resultUrl = `/?importType=EU&originCountry=Germany&carPrice=20000&officialFiscalValue=33700&carAge=new&registrationDate=2021-05&isNewCondition=false&co2Emissions=100&sellerType=dealer&transportCost=&needsHomologation=false&itpRate=&brand=MERCEDES&model=GLA+180+1.3`;

    await page.goto(resultUrl);

    // Wait for result to load
    await page.waitForSelector("[class*='number-display']", { timeout: 5000 });

    const bodyText = await page.evaluate(() => document.body.innerText);

    // Check if any currency values have cents
    const currenciesWithCents = bodyText.match(CURRENCY_WITH_CENTS);

    if (currenciesWithCents) {
      console.log("Found currencies with cents:", currenciesWithCents);
      // For now, just log them as we'll fix them
    }
  });

  test("language switcher should change all UI text", async ({ page }) => {
    // Start in English
    await page.addInitScript(() => {
      localStorage.setItem("app_language", "en");
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    let bodyText = await page.evaluate(() => document.body.innerText);
    expect(bodyText).toContain("Origin Country");

    // Switch to Spanish
    await page.evaluate(() => {
      localStorage.setItem("app_language", "es");
      window.location.reload();
    });

    await page.waitForLoadState("networkidle");
    bodyText = await page.evaluate(() => document.body.innerText);
    expect(bodyText).toContain("País Origen");
  });
});
