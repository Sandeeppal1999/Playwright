import { Browser, chromium, expect, Page, test } from '@playwright/test';
import { Context } from 'vm';

test.describe('Frame handling', () => {
  let browser: Browser;
  let page: Page;
  let context :Context

  // beforeEach hook to launch browser and open a page
  test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false }); 
     context = await browser.newContext(); 
    page = await context.newPage(); 
    await page.goto('https://letcode.in/frame'); 
  });
  // afterEach hook to close browser after each test
  test.afterAll(async () => {
    await browser.close(); 
  });

  // Test case
  test('Verify IFrame concept', async () => {
    await page.locator('[href="/video/frames"]').click();
    await expect(page).toHaveURL(/\/video\/frames/);
  });
  test('Verify IFrame ', async () => {
     await expect(page.locator('[class="content"] >ol >li:nth-child(2)')).toContainText('switchTo()');
  });
});
