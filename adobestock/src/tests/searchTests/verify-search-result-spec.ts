import{test} from '@playwright/test'
import { CommonHome } from '@test/adobestock/src/pages/HomePages/commonHome';
test.describe('Given I am @anonymous adobe user',()=>{
    test('Verify search result ',async({page})=>{
        const commonHome = new CommonHome(page);
        await page.goto('/');
        commonHome.verifyURL('https://stock.adobe.com/in');
    })
})
