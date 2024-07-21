import{ expect, test} from '@playwright/test'
import { CommonHome } from '@test/adobestock/src/pages/HomePages/commonHome';
test.describe('Given I am @anonymous adobe user',()=>{
    test('Verify Home page',async({page})=>{
        const commonHome = new CommonHome(page);
        await page.goto('/');
        // Veify page URL and Title is correct
        commonHome.verifyURL('https://stock.adobe.com/');
        await expect (await page.title()).toContain('Stock photos, royalty-free images, graphics, vectors & videos | Adobe Stock');

    })

})
