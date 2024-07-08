import{ test} from '@playwright/test'
test.describe('test',()=>{
test('test adobe ',async({page, browser})=>{
   const context= browser.newContext();
  const pages= browser.newPage();
   await  page.goto('https://playwright.dev/');


})
})