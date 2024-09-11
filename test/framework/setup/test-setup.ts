import { Browser, BrowserContext, Page, chromium, firefox, webkit } from 'playwright';
import { expect, test as base } from '@playwright/test';

type TestFixtures = {
  browser: Browser;
  context: BrowserContext;
  page: Page;
};

const test = base.extend<TestFixtures>({
    browser: async ({}, use: (browser: Browser) => Promise<void>) => {
    const browser = await chromium.launch();
    await use(browser);
    await browser.close();
  },
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },
});

export { test, expect, chromium };
