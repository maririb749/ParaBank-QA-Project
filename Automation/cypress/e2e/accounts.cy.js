/**
 * ParaBank Account Tests
 *
 * Quality rule applied:
 * - Keep automation linked to documented manual test cases.
 * - Use dynamic test data to avoid dependency on unstable public demo users.
 * - Validate both confirmation messages and account detail behavior.
 *
 * Related manual test cases:
 * - TC-004: Open new account with valid data
 * - TC-005: View account balance
 * - TC-006: Access account opening without authentication
 */

describe('ParaBank Accounts', () => {
  it('TC-004: should open a new checking account with valid data', () => {
    /**
     * Purpose:
     * Validates that an authenticated customer can open a new bank account.
     *
     * User risk covered:
     * If this fails, customers cannot create additional accounts.
     *
     * Test data strategy:
     * A unique QA user is created during the test to avoid dependency on public demo data.
     */
    cy.task('buildTestUser').then((user) => {
      cy.registerUser(user);

      cy.contains('Open New Account').click();

      cy.contains('Open New Account').should('be.visible');
      cy.get('#type').select('CHECKING');
      cy.get('#fromAccountId').should('be.visible');
      cy.get('#fromAccountId option').should('have.length.at.least', 1);

      cy.get('input[value="Open New Account"]').click();

      cy.contains('Account Opened!').should('be.visible');
      cy.contains('Congratulations, your account is now open.').should('be.visible');
      cy.get('#newAccountId').should('be.visible').and('not.be.empty');
    });
  });

  it('TC-005: should display account balance and account details', () => {
    /**
     * Purpose:
     * Validates that an authenticated customer can open an account details page
     * and view account balance information.
     *
     * User risk covered:
     * If this fails, customers cannot verify their account details or balances.
     *
     * Test data strategy:
     * The test creates a new account first, then validates the details page for that account.
     */
    cy.task('buildTestUser').then((user) => {
      cy.registerUser(user);

      cy.contains('Open New Account').click();

      cy.get('#type').select('CHECKING');
      cy.get('#fromAccountId').should('be.visible');
      cy.get('#fromAccountId option').should('have.length.at.least', 1);

      cy.get('input[value="Open New Account"]').click();

      cy.get('#newAccountId')
        .should('be.visible')
        .invoke('text')
        .then((newAccountId) => {
          const accountId = newAccountId.trim();

          cy.contains('Accounts Overview').click();
          cy.contains(accountId).click();

          cy.contains('Account Details').should('be.visible');
          cy.contains('Account Number:').should('be.visible');
          cy.contains(accountId).should('be.visible');
          cy.contains('Account Type:').should('be.visible');
          cy.contains('Balance:').should('be.visible');
          cy.contains('Available:').should('be.visible');
        });
    });
  });

  it('TC-006: should prevent unauthenticated access to open account page', () => {
    /**
     * Purpose:
     * Validates that restricted account opening functionality is not available
     * to unauthenticated users.
     *
     * User risk covered:
     * If this fails, restricted account functionality may be exposed without login.
     *
     * Note:
     * Manual execution documented this scenario as Passed with Observation because
     * ParaBank blocks the page but displays a generic internal error message.
     */
    cy.visit('/openaccount.htm', { failOnStatusCode: false });

    cy.contains('An internal error has occurred and has been logged.').should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.contains('Log Out').should('not.exist');

    cy.get('#type').should('not.exist');
    cy.get('#fromAccountId').should('not.exist');
    cy.get('input[value="Open New Account"]').should('not.exist');
  });
});
