import{test , expect}from '@playwright/test';

const URL = 'https://www.saucedemo.com/';
const USERNAME = 'standard_user';
const Password = 'secret_sauce';

test.describe('Login functionality' , () => {

test.beforeEach(async({page}) => {

    await page.goto(URL);
    await page.fill('#user-name' , USERNAME);
    await page.fill('#password' , Password);
    await page.locator('#login-button').click();});

test('checking the title' , async({page}) => {
  
    const title_verify =  page.getByText('Products');
    await expect(title_verify).toBeVisible();

});

});


