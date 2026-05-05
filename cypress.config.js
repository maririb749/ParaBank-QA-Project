module.exports = {
  e2e: {
    baseUrl: 'https://parabank.parasoft.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    requestTimeout: 5000,
    responseTimeout: 10000,
    defaultCommandTimeout: 5000,
    chromeWebSecurity: false,
    
    setupNodeEvents(on, config) {
      // Plugins podem ser adicionados aqui
    },
  },
};
