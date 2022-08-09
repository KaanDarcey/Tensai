import {defineConfig} from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "./src/comps/**/tests/*.cypress.@(js|jsx|ts|tsx)",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
