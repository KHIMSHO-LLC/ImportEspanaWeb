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
      name: "chromium-1",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "chromium-2",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  // Don't start a dev server automatically — user runs it separately
});
