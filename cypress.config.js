const { defineConfig } = require("cypress");
const wp = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  "reporter": "mochawesome",
   "reporterOptions": {
      "reportDir": "cypress/results",
      "overwrite": false,
      "html": false,
      "json": true
   },
  "reporter": "junit",
  "reporterOptions": {
      "mochaFile": "cypress/results/results.xml",
      "toConsole": true
   },
  "chromeWebSecurity": false,
  "projectId": 'dtytff',
  "e2e": {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "compilerOptions": {
    "types": ["cypress-commands", "cypress"],    
    "strict": true,
    "baseUrl": ".",
    "target": "ESNext",
    "lib": ["es6", "dom"],
    "module": "commonjs",
    "incremental": true,
    "types": ["cypress"],
  },
  "include": ["**/*.ts"],
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "configFile": "reporter-config.json"
  },
});
