import { Browser, chromium, expect, Page, test } from '@playwright/test';
import { Context } from 'vm';

test.describe('Frame handling', () => {
  let browser: Browser;
  let page: Page;
  let context :Context

  // beforeEach hook to launch browser and open a page
  test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false }); // Launch browser
     context = await browser.newContext(); // Create a new context
    page = await context.newPage(); // Open a new page
    await page.goto('https://letcode.in/frame'); // Navigate to the base URL
  });
  // afterEach hook to close browser after each test
  test.afterAll(async () => {
    await browser.close(); // Close browser
  });

  // Test case
  test('Verify IFrame concept', async () => {
    await page.locator('[href="/video/frames"]').click();
    
    // Verify that the URL contains '/video/frames'
    await expect(page).toHaveURL(/\/video\/frames/);
  });
  test('Verify IFrame ', async () => {
    // Navigate to the video frames page 

     await expect(page.locator('[class="content"] >ol >li:nth-child(2)')).toContainText('switchTo()');
  });
});
