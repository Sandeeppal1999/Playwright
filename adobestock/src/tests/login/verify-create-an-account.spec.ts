import { Login } from './../../pages/login';
import{test} from '@test/adobestock/src/setup/test-setup'

test.describe('Given I am @anonymous adobe user',()=>{
    test('verify create an account form ',async({page})=>{
        // Navigate to a URL
        await page.goto('https://example.com');
      
        await page.goto('/');
        const login = new Login(page);
        await page.goto('/');
        await login.clickSignInButton();
        await login.clickOnCreateAnAccount();



    })
    
})