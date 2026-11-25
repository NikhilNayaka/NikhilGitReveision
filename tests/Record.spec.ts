import { test, expect } from '@playwright/test';

test('Working on the record script', async ({ browser }) => {

  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/'
    }
  });

  const page = await context.newPage();

  await page.goto('https://demo.automationtesting.in/Register.html');

  // Fill First Name
  await page.getByPlaceholder('First Name').fill('Nikhil');

  // Fill Last Name
  await page.getByPlaceholder('Last Name').fill('Nayaka');

  // Assertion
  await expect(page.getByPlaceholder('First Name'))
    .toHaveValue('Nikhil');

  // Close context (mandatory for video)
  await context.close();
});