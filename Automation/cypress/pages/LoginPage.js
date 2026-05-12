export class LoginPage {
  visit() {
    cy.visit('/index.htm');
    this.assertLoginFormVisible();

    return this;
  }

  fillUsername(username) {
    cy.get('input[name="username"]').clear();

    if (username) {
      cy.get('input[name="username"]').type(username);
    }

    return this;
  }

  fillPassword(password) {
    cy.get('input[name="password"]').clear();

    if (password) {
      cy.get('input[name="password"]').type(password, { log: false });
    }

    return this;
  }

  submit() {
    cy.get('input[value="Log In"]').click();

    return this;
  }

  login(username, password) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();

    return this;
  }

  assertLoginFormVisible() {
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('input[value="Log In"]').should('be.visible');

    return this;
  }
}

export const loginPage = new LoginPage();
