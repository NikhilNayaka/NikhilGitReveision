import{test , expect}from '@playwright/test';


const URL = "https://www.saucedemo.com/";
const USERNAME = "standard_user";
const PASSWORD = "secret_sauce";


 test.beforeEach(async({page}) =>{

  await page.goto(URL);
  await page.getByPlaceholder('Username').fill(USERNAME)
  await page.getByPlaceholder('Password').fill(PASSWORD)
  await page.click('#login-button');

 });

 test('title verification' , async({page}) => {

  await expect(page.getByText('Products')).toHaveText('Products')

});
test('clicking' , async({page}) => {

 await page.getByText('Add to cart').first().click();
 await expect(page.getByText('Remove')).toBeVisible();

});