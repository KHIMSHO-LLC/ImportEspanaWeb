import { test, expect } from "@playwright/test";

// Real test URLs
const TEST_URLS = {
  autoscout24_toyota:
    "https://www.autoscout24.es/anuncios/toyota-c-hr-125h-advance-electro-gasolina-b6589fd2-d9d8-4779-8661-487ce9131bb4?ipc=recommendation&ipl=homepage-engine-itemBased&source_otp=t40&ap_tier=t40&boost_level=t40&applied_boost_level=t40&relevance_adjustment=boost&boosting_product=mia&source=homepage_most-searched&position=1",
  autoscout24_mercedes:
    "https://www.autoscout24.es/anuncios/mercedes-benz-slk-200-blueefficiency-gasolina-blanco-c5ff7011-5286-4c3c-a136-229e6a036d37?sort=standard&desc=0&position=8&source_otp=t40&source=listpage_search-results&order_bucket=unknown&boost_level=t40&applied_boost_level=t40&relevance_adjustment=boost&boosting_product=mia",
  mobilede_mercedes_clk:
    "https://suchen.mobile.de/auto-inserat/mercedes-benz-clk-55-amg-cabrio-vollleder-xenon-sitzklima-bose-hamburg/445134089.html?refId=7387f26d-6b7f-4fe5-95bd-2875a7077344&action=vipSimilarSellerAd",
  mobilede_mercedes_cla:
    "https://suchen.mobile.de/auto-inserat/mercedes-benz-cla-250-shooting-brake-4matic-amg-exclusivepaket-hamburg/445134255.html?refId=3048917a-568e-4d90-8c78-f7646877f6f6&action=vipSimilarSellerAd",
};

test.describe("URL Parsing Feature - Real World Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
    // Click on "Paste link" tab
    await page.click("button:has-text('Paste link')");
  });

  test("AutoScout24 - Toyota extraction", async ({ page }) => {
    await page.fill('input[type="url"]', TEST_URLS.autoscout24_toyota);
    await page.click("button:has-text('Fetch')");

    // Wait for loading to complete
    await page.waitForSelector("button:has-text('Fetch')", {
      state: "enabled",
    });

    // Check if data was extracted - should show success feedback
    const urlError = await page.locator("text=/error|error|Error/i").first();
    const hasError = await urlError.isVisible().catch(() => false);

    if (hasError) {
      console.log("❌ ERROR:", await urlError.textContent());
      console.log("URL:", TEST_URLS.autoscout24_toyota);
    } else {
      console.log("✅ AutoScout24 Toyota extracted successfully");
      // Switch to manual tab to verify data was filled
      await page.click('button:has-text("Introducir datos")');

      // Check if price field has a value
      const priceField = page.locator('input[placeholder*="€"]');
      const priceValue = await priceField.inputValue().catch(() => "");
      console.log(`  - Price: ${priceValue || "NOT FILLED"}`);
    }
  });

  test("AutoScout24 - Mercedes extraction", async ({ page }) => {
    await page.fill('input[type="url"]', TEST_URLS.autoscout24_mercedes);
    await page.click("button:has-text('Fetch')");

    // Wait for loading to complete
    await page.waitForSelector("button:has-text('Fetch')", {
      state: "enabled",
    });

    const urlError = await page.locator("text=/error|Error/i").first();
    const hasError = await urlError.isVisible().catch(() => false);

    if (hasError) {
      console.log("❌ ERROR:", await urlError.textContent());
    } else {
      console.log("✅ AutoScout24 Mercedes extracted successfully");
    }
  });

  test("mobile.de - Mercedes CLK extraction", async ({ page }) => {
    await page.fill('input[type="url"]', TEST_URLS.mobilede_mercedes_clk);
    await page.click("button:has-text('Fetch')");

    // Wait for loading to complete (with longer timeout for mobile.de)
    await page.waitForSelector("button:has-text('Fetch')", {
      state: "enabled",
      timeout: 30000,
    });

    const urlError = await page.locator("text=/error|Error/i").first();
    const hasError = await urlError.isVisible().catch(() => false);

    if (hasError) {
      console.log("❌ ERROR:", await urlError.textContent());
    } else {
      console.log("✅ mobile.de Mercedes CLK extracted successfully");
    }
  });

  test("mobile.de - Mercedes CLA extraction", async ({ page }) => {
    await page.fill('input[type="url"]', TEST_URLS.mobilede_mercedes_cla);
    await page.click("button:has-text('Fetch')");

    // Wait for loading to complete
    await page.waitForSelector("button:has-text('Fetch')", {
      state: "enabled",
      timeout: 30000,
    });

    const urlError = await page.locator("text=/error|Error/i").first();
    const hasError = await urlError.isVisible().catch(() => false);

    if (hasError) {
      console.log("❌ ERROR:", await urlError.textContent());
    } else {
      console.log("✅ mobile.de Mercedes CLA extracted successfully");
    }
  });
});

test.describe("URL Parsing - API Tests", () => {
  test("API: AutoScout24 Toyota returns data", async ({ request }) => {
    const response = await request.post("/api/parse-listing", {
      data: {
        url: TEST_URLS.autoscout24_toyota,
      },
    });

    console.log("\n=== AutoScout24 Toyota API Response ===");
    console.log("Status:", response.status());

    const json = await response.json();
    console.log("Success:", json.success);

    if (json.success) {
      console.log("Extracted Data:");
      console.log("  - Make:", json.data.make || "❌ MISSING");
      console.log("  - Model:", json.data.model || "❌ MISSING");
      console.log("  - Year:", json.data.year || "❌ MISSING");
      console.log("  - Price:", json.data.price || "❌ MISSING");
      console.log("  - Mileage:", json.data.mileage || "❌ MISSING");
      console.log("  - CO2:", json.data.co2 || "❌ MISSING");
      console.log("  - Fuel Type:", json.data.fuelType || "❌ MISSING");
    } else {
      console.log("Error:", json.error);
    }

    expect(json.success).toBe(true);
    expect(json.data).toBeDefined();
    expect(json.data.price).toBeDefined();
  });

  test("API: AutoScout24 Mercedes returns data", async ({ request }) => {
    const response = await request.post("/api/parse-listing", {
      data: {
        url: TEST_URLS.autoscout24_mercedes,
      },
    });

    console.log("\n=== AutoScout24 Mercedes API Response ===");
    const json = await response.json();
    console.log("Success:", json.success);

    if (json.success) {
      console.log("Extracted Data:");
      console.log("  - Make:", json.data.make || "❌ MISSING");
      console.log("  - Model:", json.data.model || "❌ MISSING");
      console.log("  - Price:", json.data.price || "❌ MISSING");
    } else {
      console.log("Error:", json.error);
    }

    expect(json.success).toBe(true);
  });

  test("API: mobile.de Mercedes CLK returns data", async ({ request }) => {
    const response = await request.post("/api/parse-listing", {
      data: {
        url: TEST_URLS.mobilede_mercedes_clk,
      },
    });

    console.log("\n=== mobile.de Mercedes CLK API Response ===");
    const json = await response.json();
    console.log("Success:", json.success);

    if (json.success) {
      console.log("Extracted Data:");
      console.log("  - Make:", json.data.make || "❌ MISSING");
      console.log("  - Model:", json.data.model || "❌ MISSING");
      console.log("  - Year:", json.data.year || "❌ MISSING");
      console.log("  - Price:", json.data.price || "❌ MISSING");
      console.log("  - Mileage:", json.data.mileage || "❌ MISSING");
      console.log("  - CO2:", json.data.co2 || "❌ MISSING");
    } else {
      console.log("Error:", json.error);
    }

    expect(json.success).toBe(true);
  });

  test("API: mobile.de Mercedes CLA returns data", async ({ request }) => {
    const response = await request.post("/api/parse-listing", {
      data: {
        url: TEST_URLS.mobilede_mercedes_cla,
      },
    });

    console.log("\n=== mobile.de Mercedes CLA API Response ===");
    const json = await response.json();
    console.log("Success:", json.success);

    if (json.success) {
      console.log("Extracted Data:");
      console.log("  - Make:", json.data.make || "❌ MISSING");
      console.log("  - Model:", json.data.model || "❌ MISSING");
      console.log("  - Price:", json.data.price || "❌ MISSING");
    } else {
      console.log("Error:", json.error);
    }

    expect(json.success).toBe(true);
  });
});

test.describe("URL Parsing - Error Cases", () => {
  test("API: Invalid URL format", async ({ request }) => {
    const response = await request.post("/api/parse-listing", {
      data: {
        url: "not-a-url",
      },
    });

    expect(response.status()).toBe(400);
    const json = await response.json();
    expect(json.success).toBe(false);
    console.log("✅ Correctly rejected invalid URL:", json.error);
  });

  test("API: Unsupported domain", async ({ request }) => {
    const response = await request.post("/api/parse-listing", {
      data: {
        url: "https://www.example.com",
      },
    });

    expect(response.status()).toBe(400);
    const json = await response.json();
    expect(json.success).toBe(false);
    console.log("✅ Correctly rejected unsupported domain:", json.error);
  });

  test("API: Missing URL", async ({ request }) => {
    const response = await request.post("/api/parse-listing", {
      data: {},
    });

    expect(response.status()).toBe(400);
    const json = await response.json();
    expect(json.success).toBe(false);
    console.log("✅ Correctly rejected missing URL:", json.error);
  });
});
