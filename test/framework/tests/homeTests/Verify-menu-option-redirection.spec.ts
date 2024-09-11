import test from "playwright/test";
import { CommonHome } from "../../pages/HomePages/commonHome";
test.describe('Given I am @anonymous adobe user',()=>{
    test('WHEN is visit adobestock.com THEN click on Menu option THEN verify menu otpion redirection is correct',async({page})=>{
        const commonHome = new CommonHome(page);
        await page.goto('/');
        await commonHome.clickOnMenu();
    
        const menuOption={
            MenuItem1:{
                linkText:'Creative Cloud',
                expectedUrl:'creativecloud.adobe.com',
            },
            MenuItem2:{
                linkText:'Photoshop',
                expectedUrl:'photoshop',
            },
            MenuItem3:{
                linkText:'Adobe Express',
                expectedUrl:'adobe.com',
            },
            MenuItem4:{
                linkText:'Lightroom',
                expectedUrl:'lightroom.adobe.com',
            },
            MenuItem5:{
                linkText:'Acrobat',
                expectedUrl:'acrobat.adobe.com',
            },
            MenuItem6:{
                linkText:'Browse All Apps',
                expectedUrl:'adobe.com',
            },

        }

        // In future will modify code 
        for (const {linkText, expectedUrl } of Object.values(menuOption)) {
              await commonHome.verifyExternalLink(linkText, expectedUrl);
                }
    })

})
