# AmazonTest

This project is a small *proof of concept* for adding a product to the cart on Amazon's front-end.
It's using [Puppeteer](https://developers.google.com/web/tools/puppeteer/) with
[Cucumber.js](https://github.com/cucumber/cucumber-js).

## Build & Run

Install [Node.js version 8](https://nodejs.org/en/download/).

``` bash
# install dependencies
$ npm install

# run tests (in headless mode, with html report launched on failure)
$ npm test

# generate html report
$ npm run report

# (visual) debugging
$ npm run test:e2e:debug
```

For additional script options, see package.json.

## Limitations & Assumptions

In a "real" project, there would be a lot requirements and needs to uncover before deciding on a test rig.
Here, I've made assumptions, mostly based on [yagni](https://martinfowler.com/bliki/Yagni.html).

Covers a single sunshine path only. No handling of:
- Optional "add-to-order" overlay,
- Variants,
- Products that don't ship to specific regions,
- Products that are not in stock,
etc. 

And on the step definition & toolstack side:
- Step definitions use hardcoded test data and endpoints.
- Tests will run in Chrome only (but are fast and incredibly easy to debug when failing!).
- Test dependencies are always installed - on a "real" project, they should be moved to devDependencies.
- Built on macOS High Sierra. Tested on Ubuntu 17.10. With a little work, Windows could be supported.
