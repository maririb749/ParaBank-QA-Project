import { loginPage } from '../pages/LoginPage';
import { registerPage } from '../pages/RegisterPage';

/**
 * Opens the ParaBank login page and validates that the login form is available.
 */
Cypress.Commands.add('visitLoginPage', () => {
  loginPage.visit();
});

/**
 * Registers a unique QA customer through the ParaBank UI.
 * This avoids dependency on public demo users that may expire, reset or already exist.
 */
Cypress.Commands.add('registerUser', (user) => {
  registerPage.register(user);

  cy.get('body').then(($body) => {
    const pageText = $body.text();

    if (!pageText.includes('Your account was created successfully')) {
      throw new Error(`User registration failed. Page text was: ${pageText}`);
    }
  });

  cy.contains('Your account was created successfully').should('be.visible');
  cy.contains(`Welcome ${user.firstName} ${user.lastName}`).should('be.visible');
});

/**
 * Performs login using the ParaBank login form.
 */
Cypress.Commands.add('login', (username, password) => {
  loginPage.login(username, password);
});

/**
 * Logs out when the authenticated menu is available.
 */
Cypress.Commands.add('logout', () => {
  cy.contains('Log Out').click();

  loginPage.assertLoginFormVisible();
});

/**
 * Validates that the authenticated account services area is visible.
 */
Cypress.Commands.add('assertAuthenticatedArea', () => {
  cy.contains('Accounts Overview').should('be.visible');
  cy.contains('Log Out').should('be.visible');
  cy.contains('Account Services').should('be.visible');
});

/**
 * Validates that the user remains unauthenticated and the login form is visible.
 */
Cypress.Commands.add('assertUnauthenticatedArea', () => {
  loginPage.assertLoginFormVisible();
  cy.contains('Log Out').should('not.exist');
});
