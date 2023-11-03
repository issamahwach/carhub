import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 660,
    viewportWidth: 1000,
    baseUrl: "http://localhost:3000",
  },
});
