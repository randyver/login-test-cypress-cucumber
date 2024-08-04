import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the login page', () => {
  cy.visit('/login');
});

When('I fill in {string} with {string}', (field, value) => {
  cy.get(`[data-testid="${field}-input"]`).type(value);
});

When('I click on the {string} button', (buttonText) => {
  cy.get(`[data-testid="login-button"]`).click();
});

Then('I should be redirected to the homepage', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/`);
});

Then('I should see a success message {string}', (message) => {
  cy.contains(message).should('be.visible');
});

Then('I should see an error message {string}', (message) => {
  cy.contains(message).should('be.visible');
});
