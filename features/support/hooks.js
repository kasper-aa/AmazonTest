const {After, Before, Status} = require('cucumber');

Before(async function() {
  await this.launchBrowser();
});

After(async function(testCase) {
  if (testCase.result.status === Status.FAILED) {
    await this.takeScreenshot();
  }
  await this.browser.close();
});
