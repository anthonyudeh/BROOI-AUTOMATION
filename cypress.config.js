const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: 'https://staging.brooi.com/',
     pageLoadTimeout: 160000,

  },
});
