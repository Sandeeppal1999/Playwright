import { Locator, Page } from "playwright/test";
export class HomePage{
    private page:Page
    private logo: Locator;
    private category: Locator;
    private searchBar:Locator;
    private searchIcon:Locator;
    constructor(page: Page){
        this.page=page;
        this.logo=page.locator('[alt="Udemy"]').first();
        this.category=page.locator('.link-bar-module--categories--iqRvl li');
        this.searchBar=page.getByPlaceholder("Search for anything");
        this.searchIcon=page.getByLabel('Submit search');
    }
    async navigateHomePage(){
        await this.logo.isVisible();
        await this.logo.click();
    }
    async searchItem(searchTerm: string){
        await this.searchBar.fill(searchTerm);
        await this.searchIcon.click();
    }


}