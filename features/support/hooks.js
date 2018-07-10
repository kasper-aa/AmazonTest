const {After, Before, Status} = require('cucumber');

Before(async function(testCase) {
  await this.open();
});

After(async function(testcase) {
  if (testcase.result.status === Status.FAILED) {
    await this.takeScreenshot();
  }
  await this.browser.close();
});
