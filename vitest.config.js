import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser/providers/playwright";
export default defineConfig({
  test: {
    setupFiles: ["./vitest-setup.js"],
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [
        {
          browser: "chromium",
        },
      ],
    },
  },
});
