/**
 * ParaBank Authentication Tests
 *
 * Quality rule applied:
 * - Keep automation small, readable and linked to documented manual test cases.
 * - Prefer meaningful assertions over a large number of generic checks.
 * - Each automated scenario must clearly state what user risk or requirement it validates.
 *
 * Related manual test cases:
 * - TC-001: Login with valid credentials
 * - TC-002: Login with incorrect password
 * - TC-003: Login with empty required fields
 *
 * Notes:
 * - Tests that require a valid customer create their own unique QA user.
 * - This avoids dependency on unstable public demo users.
 * - TC-002 is linked to BUG-001. The issue was reproduced during the manual cycle,
 *   was not reproduced during EXP-001, and remains Needs Retest.
 * - TC-002 stays skipped by default until consistent retest results support updating
 *   the documentation and automation strategy.
 */

const knownBugIt = Cypress.expose('runKnownBugTests') ? it : it.skip;

describe('ParaBank Authentication', () => {
  it('TC-001: should log in successfully with valid credentials', () => {
    /**
     * Purpose:
     * Validates the happy path for authentication.
     *
     * User risk covered:
     * If this fails, registered users cannot access account services.
     *
     * Test data strategy:
     * A unique QA user is created during the test to avoid collisions in the public demo environment.
     */
    cy.task('buildTestUser').then((validUser) => {
      cy.registerUser(validUser);
      cy.logout();

      cy.login(validUser.username, validUser.password);

      cy.assertAuthenticatedArea();
      cy.contains(`Welcome ${validUser.firstName} ${validUser.lastName}`).should('be.visible');
      cy.contains('The username and password could not be verified.').should('not.exist');
    });
  });

  knownBugIt('TC-002: should reject login with incorrect password - known issue BUG-001', () => {
    /**
     * Purpose:
     * Validates that an incorrect password does not authenticate a registered user.
     *
     * User risk covered:
     * If this fails, authentication cannot be trusted.
     *
     * Current project status:
     * BUG-001 was reproduced during the manual testing cycle, was not reproduced during EXP-001,
     * and remains Needs Retest. This scenario stays pending/skipped by default until consistent
     * retest results support updating the documentation and automation strategy.
     */
    cy.task('buildTestUser').then((validUser) => {
      cy.registerUser(validUser);
      cy.logout();

      cy.fixture('users').then(({ invalidLogin }) => {
        cy.login(validUser.username, invalidLogin.password);

        cy.contains(invalidLogin.expectedErrorMessage).should('be.visible');
        cy.contains('Accounts Overview').should('not.exist');
        cy.contains('Log Out').should('not.exist');
      });
    });
  });

  it('TC-003: should reject login when username and password are empty', () => {
    /**
     * Purpose:
     * Validates required field handling on the login form.
     *
     * User risk covered:
     * If this fails, users may not understand why login did not happen or the form may submit invalid data.
     *
     * Test data strategy:
     * This scenario does not require a registered user.
     */
    cy.fixture('users').then(({ emptyLogin }) => {
      cy.visitLoginPage();
      cy.get('input[value="Log In"]').click();

      cy.contains(emptyLogin.expectedErrorMessage).should('be.visible');
      cy.assertUnauthenticatedArea();
      cy.contains('Accounts Overview').should('not.exist');
    });
  });
});
