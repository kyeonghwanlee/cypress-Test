// cypress/support/index.ts
import 'cypress-file-upload';
import 'cypress-xpath';
import './commands';

Cypress.on('uncaught:exception', () => {
  return false;
});

