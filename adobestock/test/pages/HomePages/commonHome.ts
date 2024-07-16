import{expect, Locator, Page, test} from '@playwright/test';

export class CommonHome{
    private page: Page;
    private menu:Locator;
    private menuOption:Locator;


    constructor(page: Page){
        this.page= page;
        this.menu=page.locator('[aria-label="Menu"]');
        this.menuOption=page.locator('[aria-label="App switcher"]');

    }
    async verifyURL(url:string){
        await expect(this.page.url()).toContain(url);

    }
    async clickOnMenu(){
        await this.menu.click();
        await expect(this.menuOption).toBeVisible();
    }

}

//[aria-label="App switcher"]