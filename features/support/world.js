const {setWorldConstructor, setDefaultTimeout} = require('cucumber');
const puppeteer = require('puppeteer');

class World {
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
}

setWorldConstructor(World);

if (process.env.DEBUG) {
  setDefaultTimeout(5 * 60 * 1000);
} else {
  setDefaultTimeout(10 * 1000);
}
