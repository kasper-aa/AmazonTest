const {setWorldConstructor, setDefaultTimeout} = require('cucumber');
const PuppeteerWorld = require('./puppeteerworld.js');

if (process.env.DEBUG) {
  setDefaultTimeout(5 * 60 * 1000);
} else {
  setDefaultTimeout(10 * 1000);
}

if (process.env.OTHER_WORLD) {
  // Could implement other world here, e.g. for webdriver
} else {
  // default to Puppeteer
  setWorldConstructor(PuppeteerWorld);
}
