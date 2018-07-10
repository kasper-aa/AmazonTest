const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'report/cucumber_report.json',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.2.3',
    'Test Environment': 'Production',
    'Browser': 'Chromium (Puppeteer)',
  },
};

reporter.generate(options);
