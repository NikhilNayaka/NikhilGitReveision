import{test , expect}from '@playwright/test';

test('working on handling the single window' , async({context , page}) =>{

    await page.goto('https://demo.automationtesting.in/Windows.html');

    await page.getByText('Open New Seperate Windows').click();
    
    const[newPage] = await Promise.all([

        context.waitForEvent('page'),
        await page.locator('button[onclick="newwindow()"]').click()
    ]);
    
    await page.waitForLoadState();

    console.log('To get new Page title' ,await  page.title())


});