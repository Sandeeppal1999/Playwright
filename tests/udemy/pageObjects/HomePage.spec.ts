import { expect } from '@playwright/test';
import { Locator, Page } from "playwright/test";
export class HomePage{
    private page:Page
    private logo: Locator;
    private category: Locator;
    private searchBar:Locator;
    private searchIcon:Locator;
    private searchHeading:(searchTerm:string)=>Locator;
    constructor(page: Page){
        this.page=page;
        this.logo=page.locator('[alt="Udemy"]').first();
        this.category=page.locator('.link-bar-module--categories--iqRvl li');
        this.searchBar=page.getByPlaceholder("Search for anything");
        this.searchIcon=page.getByLabel('Submit search');
        this.searchHeading=(searchTerm)=>page.getByRole('heading', { name: `results for “${searchTerm}”`});
    }
    async navigateHomePage(){
        await this.logo.isVisible();
        await this.logo.click();
    }
    async searchItem(searchTerm: string){
        await this.searchBar.fill(searchTerm);
        await this.searchIcon.click();
    }
    async verifySearchHeading(searchTerm :string){
        await this.page.waitForLoadState('networkidle');
        expect(await this.searchHeading(searchTerm)).toBeVisible();


    }


}