import { Browser, chromium, expect, Page, test } from '@playwright/test';
import { error } from 'console';
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
   const frame= await page.frame({name: "firstFr" });

   if(frame!=null){
    await frame.fill('//input[@name="fname"]', 'sandeep');
    await frame.fill('input[name="lname"]','pal');

    // inner frames
    const childFrame= frame.childFrames();
    if(childFrame!=null){
    console.log(`no of child frame:  ${childFrame.length}`);
     await childFrame[1]?.fill('[name="email"]','sandeep@gmail.com');
    const parentFrame=  childFrame[0].parentFrame();
    await parentFrame?.fill('//input[@name="fname"]', 'sandhya pal ');
     }
   }
   else 
   throw new error('No such frame exits');

    
 
    // await expect(page).toHaveURL(/\/video\/frames/);
  });
  test('Verify IFrame ', async () => {
    // Navigate to the video frames page 

    //  await expect(page.locator('[class="content"] >ol >li:nth-child(2)')).toContainText('switchTo()');
  });
});
