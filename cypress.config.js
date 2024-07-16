const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

async function setupNodeEvents(on, config){
  on('file:preprocessor', cucumber())
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/Intigration/framework/pagetest.js',
    //specPattern: 'cypress/Intigration/Assessment/Evaluation4.js',
    //specPattern: 'cypress/Intigration/Day1/*.js',
    //specPattern: 'cypress/UAT/Features/*.feature'

  },
});
