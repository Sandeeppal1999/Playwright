import test, { expect } from "playwright/test";
test('login test',async({browser})=>{
    const browsers=   await browser.newContext();
    const page =  await browsers.newPage();
    // locator 
    const loginButton= page.locator('[data-purpose="header-login"]');
    await page.goto('https://www.udemy.com/');
    expect( await page.title()).toContain('Online Courses - Learn Anything, On Your Schedule | Udemy');
    await loginButton.click();
    await page.locator('[name="email"]').fill('sandeepdtu360@gmail.com');
    await page.locator('[name="password"]').fill('30Lpa@2025');
    await page.locator('[type="submit"] span').click();
    await expect(page.locator('[ data-purpose="user-dropdown"] img')).toBeVisible();
    await page.locator('[name="q"]').fill('Playwright');
    await page.locator('[aria-label="Submit search"]').click();



     
})