/**
 * ParaBank Transfer Tests
 *
 * Quality rule applied:
 * - Keep automation linked to documented manual test cases.
 * - Validate financial flows with before/after balance checks.
 * - Keep known bugs documented but skipped so the regression suite remains stable.
 *
 * Related manual test cases:
 * - TC-007: Transfer money between own accounts
 * - TC-008: Transfer with negative amount
 * - TC-009: Transfer with insufficient balance
 *
 * Known bugs:
 * - BUG-002: Negative transfer amount is accepted and processed
 * - BUG-003: Transfer with insufficient balance is accepted and creates negative balance
 */

const parseCurrencyToCents = (value) => {
  const normalizedValue = value.replace(/[^0-9.-]/g, '');
  return Math.round(Number(normalizedValue) * 100);
};

const createCheckingAccount = () => {
  cy.contains('Open New Account').click();

  cy.contains('Open New Account').should('be.visible');
  cy.get('#type').select('CHECKING');

  return cy.get('#fromAccountId')
    .should('be.visible')
    .find('option')
    .should(($options) => {
      expect($options.length, 'available funding accounts').to.be.greaterThan(0);
      expect(
        [...$options].some((option) => option.value),
        'at least one funding account has a value'
      ).to.eq(true);
    })
    .then(($options) => {
      const sourceAccountId = [...$options].find((option) => option.value).value;

      cy.get('#fromAccountId')
        .select(sourceAccountId)
        .should('have.value', sourceAccountId);

      cy.get('input[value="Open New Account"]').click();

      cy.contains('Account Opened!').should('be.visible');
      cy.contains('Congratulations, your account is now open.').should('be.visible');

      return cy.get('#newAccountId')
        .should('be.visible')
        .invoke('text')
        .then((newAccountId) => ({
          sourceAccountId: String(sourceAccountId),
          newAccountId: newAccountId.trim()
        }));
    });
};

const getAccountBalanceInCents = (accountId) => {
  cy.visit(`/activity.htm?id=${accountId}`);

  cy.contains('Account Details').should('be.visible');
  cy.contains(accountId).should('be.visible');

  return cy.get('#balance')
    .should('be.visible')
    .invoke('text')
    .then(parseCurrencyToCents);
};

const transferFunds = ({ amount, fromAccountId, toAccountId }) => {
  cy.contains('Transfer Funds').click();

  cy.contains('Transfer Funds').should('be.visible');
  cy.get('#amount').clear().type(amount);
  cy.get('#fromAccountId').select(fromAccountId);
  cy.get('#toAccountId').select(toAccountId);
  cy.get('input[value="Transfer"]').click();
};

const knownBugIt = Cypress.expose('runKnownBugTests') ? it : it.skip;

describe('ParaBank Transfers', () => {
  it('TC-007: should transfer money successfully between own accounts', () => {
    /**
     * Purpose:
     * Validates the happy path for transferring funds between two customer accounts.
     *
     * User risk covered:
     * If this fails, customers cannot move money between their own accounts reliably.
     *
     * Test data strategy:
     * The test creates a unique QA user and opens a second account before transferring funds.
     */
    cy.task('buildTestUser').then((user) => {
      const transferAmount = '50.00';
      const transferAmountInCents = 5000;

      cy.registerUser(user);

      createCheckingAccount().then(({ sourceAccountId, newAccountId }) => {
        getAccountBalanceInCents(sourceAccountId).then((sourceBalanceBefore) => {
          getAccountBalanceInCents(newAccountId).then((destinationBalanceBefore) => {
            transferFunds({
              amount: transferAmount,
              fromAccountId: sourceAccountId,
              toAccountId: newAccountId
            });

            cy.contains('Transfer Complete!').should('be.visible');
            cy.contains(`$${transferAmount} has been transferred`).should('be.visible');
            cy.contains(`from account #${sourceAccountId}`).should('be.visible');
            cy.contains(`to account #${newAccountId}`).should('be.visible');

            getAccountBalanceInCents(sourceAccountId).then((sourceBalanceAfter) => {
              expect(sourceBalanceAfter).to.eq(sourceBalanceBefore - transferAmountInCents);
            });

            getAccountBalanceInCents(newAccountId).then((destinationBalanceAfter) => {
              expect(destinationBalanceAfter).to.eq(destinationBalanceBefore + transferAmountInCents);
            });
          });
        });
      });
    });
  });

  knownBugIt('TC-008: should reject transfer with negative amount - known issue BUG-002', () => {
    /**
     * Purpose:
     * Validates that negative transfer amounts are rejected.
     *
     * User risk covered:
     * If this fails, invalid financial transactions may alter balances incorrectly.
     *
     * Current project status:
     * This scenario is linked to BUG-002 and is skipped by default because the manual cycle confirmed
     * that ParaBank accepts and processes negative transfer amounts.
     */
    cy.task('buildTestUser').then((user) => {
      cy.registerUser(user);

      createCheckingAccount().then(({ sourceAccountId, newAccountId }) => {
        transferFunds({
          amount: '-50.00',
          fromAccountId: sourceAccountId,
          toAccountId: newAccountId
        });

        cy.contains('Please enter a valid amount').should('be.visible');
        cy.contains('Transfer Complete!').should('not.exist');
      });
    });
  });

  knownBugIt('TC-009: should reject transfer with insufficient balance - known issue BUG-003', () => {
    /**
     * Purpose:
     * Validates that transfers greater than the source balance are rejected.
     *
     * User risk covered:
     * If this fails, the system may create negative balances and incorrect transaction behavior.
     *
     * Current project status:
     * This scenario is linked to BUG-003 and is skipped by default because the manual cycle confirmed
     * that ParaBank accepts transfers with insufficient balance.
     */
    cy.task('buildTestUser').then((user) => {
      cy.registerUser(user);

      createCheckingAccount().then(({ sourceAccountId, newAccountId }) => {
        transferFunds({
          amount: '100000.00',
          fromAccountId: newAccountId,
          toAccountId: sourceAccountId
        });

        cy.contains('Insufficient funds').should('be.visible');
        cy.contains('Transfer Complete!').should('not.exist');
      });
    });
  });
});
