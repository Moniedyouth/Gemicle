# Test Redmine website by Cypress with Cucumber

The website 'Redmine' is used for registration tests and verifying different elements on it, like names of elements, checkboxes, and pictures. Also, there are test for checking downloaded file name from site.

  ______
  ## Start project:
  1. Install dependencies via `npm install`.
  2. Install devDependencies via `npm install --save-dev`.
      
  Aftter all at the `package.json`  should be: 
  ```JavaScript

  "dependencies": {
    "cypress": "^11.0.1",
    "cypress-cucumber-preprocessor": "^4.3.1"
  },
  "devDependencies": {
    "@cypress/xpath": "^2.0.3",
    "cy-verify-downloads": "^0.1.11"
  },

  ```
  `cypress.config.js` should contain:
  ```JavaScript
  
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
 
  ```
  In the `package.json` should also contain:
   ```JavaScript
   
   "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  }

   ```
   `cypress/support/e2e.js` should contain:
   ```JavaScript

    import './commands'
  require('@cypress/xpath');
  require('cy-verify-downloads').addCustomCommand();

  beforeEach(() => {

      cy.visit('https://www.redmine.org/');

  });

  ```

  3.  Input at the terminal at the `Cypress` folder `npx cypress open` and you can see all you `.feature` tests and run them.

 