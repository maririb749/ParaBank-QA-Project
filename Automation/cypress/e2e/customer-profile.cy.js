/**
 * ParaBank Customer Profile Tests
 *
 * Quality rule applied:
 * - Keep automation linked to documented manual test cases.
 * - Use dynamic QA users to avoid dependency on unstable public demo data.
 * - Wait for AJAX-loaded form values before editing fields.
 * - Validate visible containers instead of global page text.
 * - Avoid fixed waits, force clicks and hidden DOM assertions.
 *
 * Related manual test cases:
 * - TC-013: Update contact information with valid data
 * - TC-014: Update contact information with invalid phone format
 * - TC-015: Update contact information with empty required fields
 *
 * Related observation:
 * - OBS-002: Invalid phone format is accepted during contact information update
 */

const selectors = {
  form: '#updateProfileForm',
  result: '#updateProfileResult',
  error: '#updateProfileError',
  firstName: 'input[name="customer.firstName"]',
  lastName: 'input[name="customer.lastName"]',
  address: 'input[name="customer.address.street"]',
  city: 'input[name="customer.address.city"]',
  state: 'input[name="customer.address.state"]',
  zipCode: 'input[name="customer.address.zipCode"]',
  phone: 'input[name="customer.phoneNumber"]',
  submit: 'input[value="Update Profile"]',
  firstNameError: '#firstName-error',
  lastNameError: '#lastName-error'
};

const openUpdateContactInfo = (expectedUser = {}) => {
  cy.contains('Update Contact Info').click();

  cy.get(selectors.form).should('be.visible');
  cy.contains('Update Profile').should('be.visible');

  cy.get(selectors.firstName).should('be.visible');
  cy.get(selectors.lastName).should('be.visible');
  cy.get(selectors.phone).should('be.visible');

  if (expectedUser.firstName) {
    cy.get(selectors.firstName).should('have.value', expectedUser.firstName);
  }

  if (expectedUser.lastName) {
    cy.get(selectors.lastName).should('have.value', expectedUser.lastName);
  }
};

const setInputValue = (selector, value) => {
  cy.get(selector).should('be.visible');
  cy.get(selector).clear();
  cy.get(selector).should('have.value', '');

  if (value) {
    cy.get(selector).type(value);
    cy.get(selector).should('have.value', value);
  }
};

const fillContactInfo = ({
  firstName,
  lastName,
  address,
  city,
  state,
  zipCode,
  phone
}) => {
  setInputValue(selectors.firstName, firstName);
  setInputValue(selectors.lastName, lastName);
  setInputValue(selectors.address, address);
  setInputValue(selectors.city, city);
  setInputValue(selectors.state, state);
  setInputValue(selectors.zipCode, zipCode);
  setInputValue(selectors.phone, phone);
};

const submitProfileUpdate = () => {
  cy.get(selectors.submit).should('be.visible').click();
};

const assertProfileUpdated = () => {
  cy.get(selectors.result)
    .should('be.visible')
    .and('contain.text', 'Profile Updated')
    .and('contain.text', 'Your updated address and phone number have been added to the system.');
};

const assertNoVisibleApplicationError = () => {
  cy.get('body').then(($body) => {
    if ($body.find(selectors.error).length > 0) {
      cy.get(selectors.error).should('not.be.visible');
    }
  });
};

describe('ParaBank Customer Profile', () => {
  it('TC-013: should update contact information with valid data', () => {
    /**
     * Purpose:
     * Validates that an authenticated customer can update contact information with valid data.
     *
     * User risk covered:
     * If this fails, customers cannot maintain correct personal/contact information.
     *
     * Test data strategy:
     * A dynamic QA user is created, updated, and then reopened to validate persistence.
     */
    cy.task('buildTestUser').then((user) => {
      const updatedProfile = {
        firstName: 'ProfileFirst',
        lastName: 'ProfileLast',
        address: 'QA Street 123',
        city: 'Rotterdam',
        state: 'ZH',
        zipCode: '3011AA',
        phone: '31612345678'
      };

      cy.registerUser(user);

      openUpdateContactInfo(user);
      fillContactInfo(updatedProfile);
      submitProfileUpdate();

      assertProfileUpdated();
      assertNoVisibleApplicationError();

      openUpdateContactInfo();

      cy.get(selectors.firstName).should('have.value', updatedProfile.firstName);
      cy.get(selectors.lastName).should('have.value', updatedProfile.lastName);
      cy.get(selectors.address).should('have.value', updatedProfile.address);
      cy.get(selectors.city).should('have.value', updatedProfile.city);
      cy.get(selectors.state).should('have.value', updatedProfile.state);
      cy.get(selectors.zipCode).should('have.value', updatedProfile.zipCode);
      cy.get(selectors.phone).should('have.value', updatedProfile.phone);
    });
  });

  it('TC-014: should document accepted invalid phone format observation', () => {
    /**
     * Purpose:
     * Automates the documented observation that ParaBank accepts invalid phone format.
     *
     * User risk covered:
     * If phone format validation is absent, customer contact data quality may be reduced.
     *
     * Current project status:
     * This behavior is documented as OBS-002, not as a blocking confirmed bug.
     */
    cy.task('buildTestUser').then((user) => {
      const profileWithInvalidPhone = {
        firstName: 'PhoneFirst',
        lastName: 'PhoneLast',
        address: 'QA Street 123',
        city: 'Rotterdam',
        state: 'ZH',
        zipCode: '3011AA',
        phone: 'invalid_phone'
      };

      cy.registerUser(user);

      openUpdateContactInfo(user);
      fillContactInfo(profileWithInvalidPhone);
      submitProfileUpdate();

      assertProfileUpdated();
      assertNoVisibleApplicationError();

      openUpdateContactInfo();

      cy.get(selectors.phone).should('have.value', profileWithInvalidPhone.phone);
    });
  });

  it('TC-015: should reject contact information update when required fields are empty', () => {
    /**
     * Purpose:
     * Validates required field handling for customer profile update.
     *
     * User risk covered:
     * If this fails, mandatory customer identity fields may be saved as empty values.
     *
     * Expected behavior:
     * The update must not be completed when required identity fields are empty.
     * This test validates visible validation messages and confirms that the success
     * container is not displayed.
     */
    cy.task('buildTestUser').then((user) => {
      const invalidProfile = {
        firstName: '',
        lastName: '',
        address: 'QA Street 123',
        city: 'Rotterdam',
        state: 'ZH',
        zipCode: '3011AA',
        phone: '31612345678'
      };

      cy.registerUser(user);

      openUpdateContactInfo(user);
      fillContactInfo(invalidProfile);
      submitProfileUpdate();

      cy.get(selectors.form).should('be.visible');

      cy.get(selectors.firstNameError)
        .should('be.visible')
        .and('contain.text', 'First name is required.');

      cy.get(selectors.lastNameError)
        .should('be.visible')
        .and('contain.text', 'Last name is required.');

      cy.get(selectors.result).should('not.be.visible');
      assertNoVisibleApplicationError();
    });
  });
});
