import {test} from '@playwright/test';
test('Web Table test sceanario',()=>{
    test('Verify total of shopping is correct', async({page})=>{
        await page.goto('https://letcode.in/table');
        
    })
})