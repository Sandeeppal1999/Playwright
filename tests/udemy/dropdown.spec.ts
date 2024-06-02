import{expect, test} from '@playwright/test';

test('dropDown',async ({browser})=>{
   const brow=await browser.newContext();
   const page= await brow.newPage();
  await page.goto('https://www.udemy.com/');
  await page.locator('[data-purpose="header-login"]').click();
  await page.locator('[name="email"]').fill('sandeepdtu360@gmail.com');
  await page.locator('[name="password"]').fill('30Lpa@2025');
  await page.locator('[type="submit"] span').click();
  await expect(page.locator('[ data-purpose="user-dropdown"] img')).toBeVisible();
  await page.locator('[name="q"]').fill('Playwright');
  await page.locator('[aria-label="Submit search"]').click();
    
})