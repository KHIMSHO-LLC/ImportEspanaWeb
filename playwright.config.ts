import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: "http://localhost:3000",
    headless: false,
  },
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"] },
      testMatch: /(?!responsive).*\.spec\.ts/,
    },
    {
      name: "responsive",
      use: { ...devices["Desktop Chrome"] },
      testMatch: /responsive\.spec\.ts/,
    },
  ],
  // Don't start a dev server automatically — user runs it separately
});
