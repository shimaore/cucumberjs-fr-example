// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {
  this.Given(/^je suis sur le repo Github de Cucumber\.js$/, {timeout: 20*1000}, function() {
    return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
  });

  this.When(/^je clique sur "([^"]*)"$/, function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  this.Then(/^je devrais voir "([^"]*)"$/, function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
};
