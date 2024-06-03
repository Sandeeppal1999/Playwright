import{expect, test} from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage.spec';
import { HomePage } from '../pageObjects/HomePage.spec';
test.describe('verify home page',()=>{
    test('verify cateorgyu ',async({page})=>{
        const searchTerm='java'
        const homePage= new HomePage(page);
        const loginPage= new LoginPage(page);
        await loginPage.navigateHomepage();
        await homePage.searchItem(searchTerm);
        expect( await page.url()).toContain(searchTerm);
        await homePage.verifySearchHeading(searchTerm);
    })
})