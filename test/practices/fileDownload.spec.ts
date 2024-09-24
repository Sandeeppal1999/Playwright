import {test}from '@playwright/test';
test.describe('Download and upload file',()=>{
    test('',async({page})=>{
        await page.goto('https://letcode.in/test');
        await page.locator('[href="/file"]').click();
        const downloadPromise= page.waitForEvent('download');
        await page.locator('[id="xls"]').click();
        const download = await downloadPromise;
        await page.waitForTimeout(4000);
        await download.saveAs('./testData/testFile'+ download.suggestedFilename());
        
    })

})

//https://automationexercise.com/


