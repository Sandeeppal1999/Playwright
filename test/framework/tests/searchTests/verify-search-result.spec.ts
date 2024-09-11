import test, { expect } from "playwright/test";
import { CommonHome } from "../../pages/HomePages/commonHome";

test.describe('Given I am @anonymous adobe user',()=>{
    test('Verify search result ',async({page})=>{
        const commonHome = new CommonHome(page);
        await page.goto('/');
        const searchTerm= 'dog'
        await page.locator('[name="keyword"]').fill(searchTerm);
        await page.locator('[data-t="search-icon"]').click();
        await expect(page.locator('[class="gravel-text"]')).toContainText(searchTerm);
        page.getByText('applicator ')
    })
})
