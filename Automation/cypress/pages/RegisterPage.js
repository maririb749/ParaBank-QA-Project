class RegisterPage {
  visit() {
    cy.visit('/register.htm');
    cy.contains('Signing up is easy!').should('be.visible');

    return this;
  }

  fillCustomerInfo(user) {
    cy.get('input[name="customer.firstName"]').clear().type(user.firstName);
    cy.get('input[name="customer.lastName"]').clear().type(user.lastName);
    cy.get('input[name="customer.address.street"]').clear().type(user.address);
    cy.get('input[name="customer.address.city"]').clear().type(user.city);
    cy.get('input[name="customer.address.state"]').clear().type(user.state);
    cy.get('input[name="customer.address.zipCode"]').clear().type(user.zipCode);
    cy.get('input[name="customer.phoneNumber"]').clear().type(user.phone);
    cy.get('input[name="customer.ssn"]').clear().type(user.ssn);

    return this;
  }

  fillCredentials(user) {
    cy.get('input[name="customer.username"]').clear().type(user.username);
    cy.get('input[name="customer.password"]').clear().type(user.password, { log: false });
    cy.get('input[name="repeatedPassword"]').clear().type(user.password, { log: false });

    return this;
  }

  submit() {
    cy.get('input[value="Register"]').click();

    return this;
  }

  register(user) {
    this.visit();
    this.fillCustomerInfo(user);
    this.fillCredentials(user);
    this.submit();

    return this;
  }
}

export const registerPage = new RegisterPage();
