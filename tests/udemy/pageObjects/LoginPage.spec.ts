import { Locator, Page, expect } from "playwright/test";

 export class LoginPage{
    private loginButton:Locator;
    private email:Locator;
    private password:Locator;
    private logInCTA:Locator;
    private page:Page;
    private profileImage:Locator;


    // await page.locator('[name="email"]').fill('sandeepdtu360@gmail.com');
    // await page.locator('[name="password"]').fill('30Lpa@2025');
    // await page.locator('[type="submit"] span').click();


    constructor(page:Page){
        this.page=page;
        this.loginButton=page.locator('[data-purpose="header-login"]');
        this.email=page.locator('[name="email"]');
        this.password=page.locator('[name="password"]');
        this.logInCTA= page.locator('[type="submit"] span');
        this.profileImage=page.locator('[aria-label="My profile"] img');
    }
    async login(userName: string, password: string){
        await this.loginButton.click();
        await this.email.fill(userName);
        await this.password.fill(password);
        await this.logInCTA.click();
    }
    async navigateHomepage(){
        await this.page.goto('https://www.udemy.com/');
    }
    async verifyTitleOfPage(){
      expect( await this.page.title()).toContain('Online Courses - Learn Anything, On Your Schedule | Udemy');
    }
    async UserProfileImageDisplay(){
        await this.profileImage.isVisible();

    }
}
