const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "screenshotsFolder": "cypress/screenshots",
  "trashAssetsBeforeRuns": true,
  "viewportWidth": 1920,
  "viewportHeight": 1080,
  "retries": {
    "runMode": 2,
    "openMode": 0
  },
  "video": false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
