const {assert} = require('chai');
const puppeteer = require('puppeteer');

module.exports = class PuppeteerWorld {
  constructor({attach, parameters}) {
    this.attach = attach;
    this.parameters = parameters;
  }

  async launchBrowser() {
    const launchOptions = {};

    if (process.env.DEBUG) {
      launchOptions.headless = false;
      launchOptions.devtools = true;
      launchOptions.slowMo = 500; // ms
    }

    this.browser = await puppeteer.launch(launchOptions);
    this.page = await this.browser.newPage();
    this.page.on('console', (msg) => this.attach(msg.text()));
    await this.page.setViewport({width: 1024, height: 768});
  }

  async closeBrowser() {
    this.browser.close();
  }

  async takeScreenshot() {
    let world = this;
    await this.page.screenshot().then(function(buffer) {
      return world.attach(buffer, 'image/png');
    });
  }

  async breakpoint() {
    await this.page.evaluate(() => {
      debugger;
    });
  }

  async goto(page) {
    let response = await this.page.goto(page);
    assert(response.ok(),
        `http status not in range 200-299: ${response.status()}`);
  }

  async click(selector) {
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
  }

  async waitForElement(selector) {
    await this.page.waitForSelector(selector);
  }

  async waitForElementVisible(selector) {
    await this.page.waitForSelector(selector, {visible: true});
  }
};
