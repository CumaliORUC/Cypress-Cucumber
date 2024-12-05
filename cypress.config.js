const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugin/index')(on, config)
    },
    specPattern: 'cypress/e2e/Features/*.feature', // Path to your feature files
    baseUrl: 'https://www.sefamerve.com',
    //stepDefinitions: 'cypress/e2e/Step_Definitions/*.js', // Path to your step definitions
  },
});

