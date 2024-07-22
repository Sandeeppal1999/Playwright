import{expect, test} from '@playwright/test'
import { CommonHome } from '@test/adobestock/src/pages/HomePages/commonHome';
test.describe('Given I am @anonymous adobe user',()=>{
    test('Verify search result  suggestion is display',async({page})=>{
        const commonHome = new CommonHome(page);
        await page.goto('/');
        const searchTerm= 'dog'
        await page.locator('[name="keyword"]').fill(searchTerm);
        await expect(page.locator('[data-t="typeahead-dropdown-ul"]')).toBeVisible();
    })
})
