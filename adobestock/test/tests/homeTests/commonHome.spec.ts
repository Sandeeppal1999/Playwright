
import{ expect, test} from '@playwright/test'
import { CommonHome } from '@test/adobestock/test/pages/HomePages/commonHome';


const path= 'https://stock.adobe.com/in/';
test.describe('Home page',()=>{
    test('Verify Home page',async({page})=>{
        const commonHome = new CommonHome(page);
        await page.goto(path);
        // Veify page URL and Title is correct
        commonHome.verifyURL('adobe.com/in/');
        await expect (await page.title()).toContain('Stock photos, royalty-free images, graphics, vectors & videos | Adobe Stock');

    })

})
//npx playwright test commonHome.spec.ts --headed --project=chromium