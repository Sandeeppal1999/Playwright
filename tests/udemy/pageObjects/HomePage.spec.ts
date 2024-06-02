import { Locator, Page } from "playwright/test";
export class HomePage{
    private page:Page
    private logo: Locator;
    private category: Locator;
    constructor(page: Page){
        this.page=page;
        this.logo=page.locator('[alt="Udemy"]').first();
        this.category=page.locator('.link-bar-module--categories--iqRvl li');
    }
    async navigateHomePage(){
        await this.logo.isVisible();
        await this.logo.click();
    }


}