import{test, expect}from '@playwright/test';
test('checking the login test' , async ({page}) =>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('input[id="login-button"]').click();
    await page.getByText('Add to cart').first().click();
    await expect(page.getByRole('button', { name: 'Remove' }).first()).toBeVisible();
    await page.getByText('Remove').click();
    await page.getByRole('button' , {name : 'Open Menu'}).click();
    await expect(page.getByText('Logout')).toBeVisible();
     await page.getByText('Logout').click();
});