import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the search page', () => {
  cy.visit('https://login-test-cypress-cucumber.vercel.app/search');
});

When('I fill in {string} with {string}', (field: string, value: string) => {
  cy.get(`input[placeholder="${field}"]`).type(value);
});

When('I click on the {string} button', (button: string) => {
  cy.contains('button', button).click();
});

Then('I should see search results containing {string}', (fruit: string) => {
  cy.get('div').contains(fruit).should('be.visible');
});

Then('I should see {string}', (message: string) => {
  cy.contains(message).should('be.visible');
});
