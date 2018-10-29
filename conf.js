let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let currentDatePath = "report " + new Date();

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test.js'],
  waitForAngularEnabled: false,
  framework: 'jasmine2',
  onPrepare: () => {
    let AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results',
    }));
  }
  
}


