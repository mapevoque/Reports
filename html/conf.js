let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let currentDatePath = "report " + new Date();

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test.js'],
  waitForAngularEnabled: false,
  framework: 'jasmine2',
  onPrepare: () => {
    let jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));
}
}