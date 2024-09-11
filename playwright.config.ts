import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test/practices',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'on-failure' }],['list']],
  timeout:30*1000,
  expect:{
  timeout:5500,
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    screenshot:'on',
    trace: 'on',
    video:"retain-on-failure",
    headless:true,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: '',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   
  },

 
  

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'iPhone 14 Pro',
    //   use: { ...devices['iPhone 14 Pro'] },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  testMatch: ["**/*.spec.ts"],
});
