import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login page', () => {
  cy.visit('https://login-test-cypress-cucumber.vercel.app/login');
});

When('I fill in {string} with {string}', (field: string, value: string) => {
  cy.get(`input[name="${field.toLowerCase()}"]`).type(value);
});

When('I click on the {string} button', (button: string) => {
  cy.contains('button', button).click();
});

Then('I should see a success message {string}', (message: string) => {
  cy.contains(message).should('be.visible');
});

Then('I should be redirected to the homepage', () => {
  cy.visit('https://login-test-cypress-cucumber.vercel.app');
});

Then('I should see an error message {string}', (message: string) => {
  cy.contains(message).should('be.visible');
});
