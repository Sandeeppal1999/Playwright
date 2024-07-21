import{expect, Locator, Page, test} from '@playwright/test';

export class CommonHome{
    private page: Page;
    private menu:Locator;
    private menuItems:Locator;
    private menuItem:(item:string)=>Locator;



    constructor(page: Page){
        this.page= page;
        this.menu=page.locator('[aria-label="Menu"]');
        this.menuItems=page.locator('[data-t="navbar"] [role="region"]');
        this.menuItem =(name:string)=> page.getByRole('button', { name: `${name}` })

    }
    async verifyURL(url:string){
        await expect(this.page.url()).toContain(url);

    }
    async clickOnMenu(){
        await this.menu.click();
        await expect(this.menuItems).toBeVisible();
    }

    async verifyExternalLink(linkText: string, expectedURL: string) {
        const newPagePromise = this.page.context().waitForEvent('page');
        await this.page
          .getByRole('button', { name: `${linkText}` })
          .click();
        const newPage = await newPagePromise;
        expect(newPage.url()).toContain(expectedURL);
        await newPage.close();
        await this.page.bringToFront();
      }

}

//[aria-label="App switcher"]  [class="left-nav-scroll-container"] div


/* eslint-disable playwright/no-conditional-in-test */
// import { Pricing } from '@test/pw-e2e/pageObjects/only-ecomm/pricing';
// import { loginAsCustomerLiteByPoolName } from '@test/pw-e2e/utils/poolPartyClient';
// import test from '@test/pw-mlt/setup/test-hooks-www';

// const path = '/pricing/editorial';
// const poolName = 'customer_no_sub';
// test.describe('@P3-2906 GIVEN I am @authenticated Ecomm user', () => {
//   test(`@P3 WHEN I visit editorial pricing page THEN I verify FAQ's and their links navigation`, async ({
//     page,
//     isMobile,
//   }) => {
//     test.skip(isMobile === false, 'mobile only feature');
//     const pricing = new Pricing(page, isMobile);
//     await loginAsCustomerLiteByPoolName({ page, poolName, path });
//     await page.goto(path);
//     await page.evaluate(() => {
//       window.scrollBy(0, 1000);
//     });

//     type FAQItem = {
//       q: string;
//       a: string;
//       linkText?: string;
//       expectedURL?: string;
//     };
//     const faqData: { [key: string]: FAQItem } = {
//       faq1: {
//         q: 'Why is some content marked "Editorial Use Only?"',
//         a: 'content is not cleared for commercial use. Editorial content is intended for use in news media and other non-commercial purposes.',
//       },
//       faq2: {
//         q: 'How can I use Editorial content?',
//         a: 'Some common ways to permissibly use editorial content include',
//       },
//       faq3: {
//         q: 'What licenses are available for "Editorial Use Only" content?',
//         a: 'Shutterstock’s "Editorial Use Only" content is available under two different licenses: Standard and Editorial',
//         linkText: 'video pricing page',
//         expectedURL: '/pricing/video',
//       },
//       faq4: {
//         q: 'How do I license Editorial images?',
//         a: 'by licensing either an Editorial single or a pack of 25 images or clips',
//         linkText: 'Learn more.',
//         expectedURL: '/business/media-register',
//       },
//       faq5: {
//         q: 'What is the difference between an Individual and a Team or Enterprise account?',
//         a: `An individual account provides access for only one person to license, download, and use content. If you work on a team or in a company setting,
//          a Team subscription or Enterprise account would be the best fit for you`,
//         linkText: 'contact us',
//         expectedURL: '/help#contact-us',
//       },
//       faq6: {
//         q: 'How can I get permission to use Editorial content for commercial purposes?',
//         a: `Contact us to find out more about using editorial images for your campaigns. *Asset Assurance™ is subject to Shutterstock’s legal review and approval.`,
//         linkText: 'contact us',
//         expectedURL: '/help#contact-us',
//       },
//     };
//     await pricing.verifyFAQHeading();
//     for (const { q, a, linkText, expectedURL } of Object.values(faqData)) {
//       await pricing.expandFAQ(q);
//       await pricing.verifyFaqAnswer(a);
//       if (linkText && expectedURL) {
//         await pricing.verifyExternalLink(linkText, expectedURL);
//       }
//       await pricing.closeFAQ(q);
//     }
//   });
// });
