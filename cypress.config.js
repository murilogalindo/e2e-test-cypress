import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: 'https://demoqa.com',
    testIsolation: false,
    chromeWebSecurity: false,
    video: false,
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}', // <- aqui!
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // você pode usar eventos aqui, se necessário
    }
  }
});
