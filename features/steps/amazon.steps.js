const {Given, When, Then} = require('cucumber');

const PAGE = 'https://www.amazon.co.uk';
const INSTOCK_SIMPLE_ASIN = '1680502387';

Given('A user is on amazon.co.uk', async function() {
    await this.goto(PAGE);
});

When('The user adds a product to cart', async function() {
    await this.goto(`${PAGE}/dp/${INSTOCK_SIMPLE_ASIN}`);
    await this.click('#add-to-cart-button');
});

When('Proceeds to checkout', async function() {
    await this.click('#hlb-ptc-btn-native');
});

Then('The login modal is presented', async function() {
    await this.waitForElement('#authportal-main-section');
    await this.waitForElementVisible('#ap_email');
    await this.waitForElementVisible('#continue');
});
