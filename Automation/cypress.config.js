const { defineConfig } = require('cypress');
const crypto = require('crypto');

function buildTestUser() {
  const randomId = crypto.randomUUID().replace(/-/g, '').slice(0, 10);
  const timeId = Date.now().toString(36).slice(-6);

  return {
    firstName: 'Mariana',
    lastName: 'QA',
    address: 'QA Street 123',
    city: 'Rotterdam',
    state: 'ZH',
    zipCode: '3011AA',
    phone: '31612345678',
    ssn: randomId.slice(0, 9),
    username: `pb${timeId}${randomId}`.slice(0, 18),
    password: `Pass${randomId}1`
  };
}

module.exports = defineConfig({
  allowCypressEnv: false,
  expose: {
    runKnownBugTests: false
  },

  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      on('task', {
        buildTestUser() {
          return buildTestUser();
        }
      });

      return config;
    }
  }
});
