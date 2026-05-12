/**
 * Shared account helpers for ParaBank Cypress specs.
 *
 * These helpers keep repeated account setup and transfer actions in one place,
 * reducing maintenance risk when ParaBank selectors or flows change.
 */

export const createCheckingAccount = () => {
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

export const transferFunds = ({ amount, fromAccountId, toAccountId }) => {
  cy.contains('Transfer Funds').click();

  cy.contains('Transfer Funds').should('be.visible');
  cy.get('#amount').clear().type(amount);
  cy.get('#fromAccountId').select(fromAccountId);
  cy.get('#toAccountId').select(toAccountId);
  cy.get('input[value="Transfer"]').click();
};
