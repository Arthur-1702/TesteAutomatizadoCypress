const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    userName: "flavio",
    password: "123"
  },
  projectId: 'y2fcjv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://alura-fotos.herokuapp.com'
  },
});
