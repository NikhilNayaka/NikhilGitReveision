import { test, expect } from '@playwright/test';

test('Login page validation', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Index.html');
//working
  const sign_button = page.locator('button[id="btn1"]');
  await sign_button.click();

});