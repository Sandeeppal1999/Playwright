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
