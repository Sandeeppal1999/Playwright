import{test} from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage.spec';
import { HomePage } from '../pageObjects/HomePage.spec';
test.describe('verify home page',()=>{
    test('verify cateorgyu ',async({page})=>{
        const homePage= new HomePage(page);
        const loginPage= new LoginPage(page);
    })
})