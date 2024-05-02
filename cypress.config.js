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
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
