// this import will import the types for setAppConfig!
import '@app-config/cypress';

describe('Config Loading', () => {
  it('should mock the configuration value', () => {
    cy.setAppConfig({
      foo: 'https://overwritten.com',
      bar: 'some configuration value',
    })

    // be sure to setAppConfig before calling visit()
    cy.visit('/');
  })
})