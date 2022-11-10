
const { defineConfig } = require('cypress');
const cucumber  = require('cypress-cucumber-preprocessor').default;
const { verifyDownloadTasks } = require('cy-verify-downloads');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber ());
      on('task', verifyDownloadTasks);
    },
    specPattern: "cypress/integration/*.feature"
  }
})