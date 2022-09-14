// cypress/utils/action/index.ts

export const login = (accessID: string, accessPassword: string): void => {
  cy.visit('/login')
    .get('[type=email]')
    .type(accessID)
    .should('have.value', accessID)
    .get('[type=password]')
    .type(accessPassword)
    .get(`[type=submit]`)
    .click();
};
