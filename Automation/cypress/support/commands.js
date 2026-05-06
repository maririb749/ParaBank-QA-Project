/**
 * Opens the ParaBank login page and validates that the login form is available.
 */
Cypress.Commands.add('visitLoginPage', () => {
  cy.visit('/index.htm');
  cy.get('input[name="username"]').should('be.visible');
  cy.get('input[name="password"]').should('be.visible');
  cy.get('input[value="Log In"]').should('be.visible');
});

/**
 * Registers a unique QA customer through the ParaBank UI.
 * This avoids dependency on public demo users that may expire, reset or already exist.
 */
Cypress.Commands.add('registerUser', (user) => {
  cy.visit('/register.htm');

  cy.contains('Signing up is easy!').should('be.visible');

  cy.get('input[name="customer.firstName"]').clear().type(user.firstName);
  cy.get('input[name="customer.lastName"]').clear().type(user.lastName);
  cy.get('input[name="customer.address.street"]').clear().type(user.address);
  cy.get('input[name="customer.address.city"]').clear().type(user.city);
  cy.get('input[name="customer.address.state"]').clear().type(user.state);
  cy.get('input[name="customer.address.zipCode"]').clear().type(user.zipCode);
  cy.get('input[name="customer.phoneNumber"]').clear().type(user.phone);
  cy.get('input[name="customer.ssn"]').clear().type(user.ssn);
  cy.get('input[name="customer.username"]').clear().type(user.username);
  cy.get('input[name="customer.password"]').clear().type(user.password, { log: false });
  cy.get('input[name="repeatedPassword"]').clear().type(user.password, { log: false });

  cy.get('input[value="Register"]').click();

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
  cy.visitLoginPage();

  cy.get('input[name="username"]').clear();

  if (username) {
    cy.get('input[name="username"]').type(username);
  }

  cy.get('input[name="password"]').clear();

  if (password) {
    cy.get('input[name="password"]').type(password, { log: false });
  }

  cy.get('input[value="Log In"]').click();
});

/**
 * Logs out when the authenticated menu is available.
 */
Cypress.Commands.add('logout', () => {
  cy.contains('Log Out').click();
  cy.get('input[name="username"]').should('be.visible');
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
  cy.get('input[name="username"]').should('be.visible');
  cy.get('input[name="password"]').should('be.visible');
  cy.get('input[value="Log In"]').should('be.visible');
  cy.contains('Log Out').should('not.exist');
});
