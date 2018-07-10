# CucumberPuppeteer

This project is a small for using Puppeteer with Cucumber.js on Amazon's front-end.

## Limitations & Assumptions

In a "real" project, there would be a lot requirements and needs to uncover before deciding on a test rig. Here, I've brutally made assumptions, most founded in [yagni](https://martinfowler.com/bliki/Yagni.html).

Covers a single sunshine path only. No handling of:
- Optional "add-to-order" overlay
- Variants
- Products that don't ship to specific regions
- Products that are not in stock
etc. 

And on the step definition & toolstack side:
- Step definitions use hardcoded test data and endpoints.
- Tests will run in Chrome only (but are fast and incredibly easy to debug when failing!).
- All dependencies get installed - on a "real" project, test dependencies should be moved to devDependencies.
- Built on macOS High Sierra. Tested on Ubuntu 17.10. With a little work, Windows could be supported.

## Build & Run

Install node.js version 8.

``` bash
# install dependencies
$ npm install

# analyze code
$ npm run lint

# run tests (in headless mode, with html report launched on failure)
$ npm test

# generate html report
$ npm run report

# (visual) debugging
$ npm run test:e2e:debug
```

For additional script options, see package.json.
