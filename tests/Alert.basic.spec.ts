import { test, expect } from '@playwright/test';

test('Handling the alert', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Alerts.html');

  // ✅ Simple Alert
  /*const [Simple_Alert] = await Promise.all([
    page.waitForEvent('dialog'),
    page.locator('button[onclick="alertbox()"]').click({force : true})
  ]);

  console.log('message simple:', Simple_Alert.message());

  await Simple_Alert.accept(); // ✅ FIXED */

  // Simple Alert 002
  await page.once('dialog' , async(dialog) =>{
  console.log('message simple alert' , dialog.message())
 dialog.accept();})
 await page.getByText('click the button to display an  alert box:').click();

 //Confirmation Alert

 await page.once('dialog' , async(dialog) => {
    console.log('Confirmation message' , dialog.message())
   await dialog.dismiss();})
 
   await page.getByText('Alert with OK & Cancel').click();
   await page.getByText('click the button to display a confirm box').click();

 // prompt alert

 await page.once('dialog' , async(dialog) =>{
 console.log("propt message" , dialog.message()),
 dialog.accept('Alert with TextboNikhil');

 })
  await page.getByText('Alert with Textbox').click();
  await page.getByText('click the button to demonstrate the prompt box').click();
});

