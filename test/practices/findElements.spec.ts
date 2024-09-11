import { Browser, chromium, expect, Page, test } from '@playwright/test';
import { Context } from 'vm';

test.describe('Multiple element handling ', () => {
  let browser: Browser;
  let page: Page;
  let context :Context

  // beforeEach hook to launch browser and open a page
  test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false }); 
     context = await browser.newContext(); 
    page = await context.newPage(); 
    await page.goto('https://letcode.in/elements'); 
  });
  // afterEach hook to close browser after each test
  test.afterAll(async () => {
    await browser.close(); 
  });

  // Test case
  test('Multiple element ', async () => {
    const ele = await page.$("input[name='username']")
    await ele?.fill("ortonikc");
    await ele?.press("Enter");
    await page.waitForSelector("app-gitrepos ol li", { timeout: 5000 })
    const repos = await page.$$("app-gitrepos ol li");
    console.log(repos.length);
    for await (const repo of repos) {
        console.log(await repo.innerText());
    }
  });
});
