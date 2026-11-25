import{test , expect}from '@playwright/test';
test('Handling the Iframes' , async({page}) =>{
 
    await page.goto('https://demo.automationtesting.in/Frames.html');

    const frames = page.frameLocator('#singleframe')

    await frames.locator('input[type="text"]').fill('nikhil');
});
