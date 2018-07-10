const {Given, When, Then} = require('cucumber');
const {assert} = require('chai');

const PAGE = 'https://www.amazon.co.uk';
const INSTOCK_SIMPLE_ASIN = '1680502387';

Given('A user is on amazon.co.uk', async function() {
    let response = await this.page.goto(PAGE);
    assert(response.ok(),
        `http status not in range 200-299: ${response.status()}`);

    // Uncomment to see how a "breakpoint" works
    // await this.breakpoint();
});

When('The user adds a product to cart', async function() {
    let response = await this.page.goto(`${PAGE}/dp/${INSTOCK_SIMPLE_ASIN}`);
    assert(response.ok(),
      `Bad http status for ${INSTOCK_SIMPLE_ASIN}: ${response.status()}`);
    await this.page.waitForSelector('#add-to-cart-button');
    await this.page.click('#add-to-cart-button');
});

When('Proceeds to checkout', async function() {
    await this.page.waitForSelector('#hlb-ptc-btn-native');
    await this.page.click('#hlb-ptc-btn-native');
});

Then('The login modal is presented', async function() {
    await this.page.waitForSelector('#authportal-main-section');
    await this.page.waitForSelector('#ap_email', {visible: true});
    await this.page.waitForSelector('#continue', {visible: true});
});
