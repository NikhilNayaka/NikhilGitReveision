import { test, expect } from '@playwright/test';

const URL = "https://www.saucedemo.com/";
const USERNAME = "standard_user";
const PASSWORD = "secret_sauce";

test.beforeEach(async ({ page }) => {

  console.log('Logging in...');

  await page.goto(URL);

  //await page.waitForSelector('#user-name');

  await page.fill('#user-name', USERNAME);
  await page.fill('#password', PASSWORD);

  await page.click('#login-button');

  await expect(page.locator('.title')).toHaveText('Products');
});


test('checking the title', async ({ page }) => {

await expect(page.locator('.title')).toHaveText('Products');

});


test('Adding the element in the cart', async ({ page }) => {

  await page.click('#add-to-cart-sauce-labs-backpack');

  await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible();

});
