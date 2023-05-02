const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     pageLoadTimeout: 180000,

  },
});
