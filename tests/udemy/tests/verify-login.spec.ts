import{test} from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage.spec';
test.describe('test',()=>{
    test('test login', async({page})=>{
        const loginPage=new  LoginPage(page);
        await loginPage.navigateHomepage();
        await loginPage.login('sandeepdtu360@gmail.com','30Lpa@2025')
        await loginPage.UserProfileImageDisplay();
    })
})
