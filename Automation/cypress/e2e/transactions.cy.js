/**
 * ParaBank Transaction Tests
 *
 * Quality rule applied:
 * - Keep automation linked to documented manual test cases.
 * - Create dynamic user data to avoid dependency on unstable public demo accounts.
 * - Validate visible user-facing transaction behavior instead of hidden DOM text.
 *
 * Related manual test cases:
 * - TC-010: View transaction history
 * - TC-011: Search transactions by amount
 * - TC-012: Empty transaction history for a newly created account
 */

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

const transferFunds = ({ amount, fromAccountId, toAccountId }) => {
  cy.contains('Transfer Funds').click();

  cy.contains('Transfer Funds').should('be.visible');
  cy.get('#amount').clear().type(amount);
  cy.get('#fromAccountId').select(fromAccountId);
  cy.get('#toAccountId').select(toAccountId);
  cy.get('input[value="Transfer"]').click();

  cy.contains('Transfer Complete!').should('be.visible');
  cy.contains(`$${amount} has been transferred`).should('be.visible');
};

const openAccountActivity = (accountId) => {
  cy.visit(`/activity.htm?id=${accountId}`);

  cy.contains('Account Details').should('be.visible');
  cy.contains(accountId).should('be.visible');
  cy.contains('Account Activity').should('be.visible');
};

const assertNoVisibleApplicationError = () => {
  cy.get('body').then(($body) => {
    if ($body.find('#error').length > 0) {
      cy.get('#error').should('not.be.visible');
    }
  });
};

const searchTransactionsByAmount = ({ accountId, amount }) => {
  cy.contains('Find Transactions').click();

  cy.contains('Find Transactions').should('be.visible');
  cy.get('#accountId').select(accountId);

  cy.get('input#amount, input[name="criteria.amount"]')
    .filter(':visible')
    .first()
    .as('amountInput');

  cy.get('@amountInput')
    .clear()
    .type(amount);

  cy.get('@amountInput').then(($input) => {
    const $form = $input.closest('form');

    const $submitButton = $form
      .find('button, input[type="submit"], input[type="button"]')
      .filter((_, element) => {
        const label = element.innerText || element.value || '';
        return /Find Transactions/i.test(label);
      })
      .last();

    if (!$submitButton.length) {
      throw new Error('Amount search submit button was not found.');
    }

    cy.wrap($submitButton).click();
  });

  cy.get('#resultContainer', { timeout: 20000 })
    .should('be.visible')
    .within(() => {
      cy.contains('Transaction Results').should('be.visible');
    });
};

describe('ParaBank Transactions', () => {
  it('TC-010: should display transaction history for an account', () => {
    /**
     * Purpose:
     * Validates that a customer can view transaction history for an account.
     *
     * User risk covered:
     * If this fails, customers cannot verify account movement or transaction records.
     */
    cy.task('buildTestUser').then((user) => {
      cy.registerUser(user);

      createCheckingAccount().then(({ sourceAccountId, newAccountId }) => {
        transferFunds({
          amount: '50.00',
          fromAccountId: sourceAccountId,
          toAccountId: newAccountId
        });

        openAccountActivity(newAccountId);
        assertNoVisibleApplicationError();

        cy.get('#accountActivity').should('be.visible');
        cy.contains('Funds Transfer Received').should('be.visible');
        cy.contains('$50.00').should('be.visible');
        cy.contains('Date').should('be.visible');
        cy.contains('Transaction').should('be.visible');
        cy.contains('Credit').should('be.visible');
      });
    });
  });

  it('TC-011: should search transactions by amount', () => {
    /**
     * Purpose:
     * Validates that a customer can search transactions by amount.
     *
     * User risk covered:
     * If this fails, customers may not be able to locate specific transactions efficiently.
     */
    cy.task('buildTestUser').then((user) => {
      cy.registerUser(user);

      createCheckingAccount().then(({ sourceAccountId, newAccountId }) => {
        transferFunds({
          amount: '50.00',
          fromAccountId: sourceAccountId,
          toAccountId: newAccountId
        });

        searchTransactionsByAmount({
          accountId: newAccountId,
          amount: '50.00'
        });

        cy.get('#resultContainer')
          .should('be.visible')
          .within(() => {
            cy.contains('$50.00').should('be.visible');
            cy.contains('Funds Transfer Received').should('be.visible');
          });
      });
    });
  });

  it('TC-012: should display valid transaction state for a newly created account', () => {
    /**
     * Purpose:
     * Validates the transaction history state for a newly opened account.
     *
     * User risk covered:
     * If this fails, new accounts may show broken, unrelated or misleading transaction history.
     *
     * Test data strategy:
     * ParaBank usually creates an initial funding transaction for new accounts.
     * The test accepts either a visible initial transaction or a valid visible empty state.
     */
    cy.task('buildTestUser').then((user) => {
      cy.registerUser(user);

      createCheckingAccount().then(({ newAccountId }) => {
        openAccountActivity(newAccountId);
        assertNoVisibleApplicationError();

        cy.get('#accountDetails').should('be.visible');
        cy.get('#accountActivity').should('be.visible');

        cy.contains('Account Number:').should('be.visible');
        cy.contains(newAccountId).should('be.visible');
        cy.contains('Balance:').should('be.visible');
        cy.contains('Available:').should('be.visible');

        cy.get('body').then(($body) => {
          const hasVisibleTransactionTable =
            $body.find('#transactionTable:visible tbody tr').length > 0;

          const hasVisibleEmptyState =
            $body.find('#noTransactions:visible').length > 0;

          expect(
            hasVisibleTransactionTable || hasVisibleEmptyState,
            'new account should show a visible initial transaction or visible empty state'
          ).to.eq(true);
        });
      });
    });
  });
});
