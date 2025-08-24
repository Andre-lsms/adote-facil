// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    includeShadowDom: true,
  },
})

