import{expect, Locator, Page} from '@playwright/test';
export class Login{
    private page: Page;
    private signBtn:Locator;
    private signHeading:Locator;
    private createAnAccount:Locator;
    private step1_of_2:Locator;

    constructor(page:Page){
        this.page=page;
        this.signBtn=page.locator('[data-t="navbar-sign-in-button-text"]');
        this.signHeading=page.getByText('Sign in');
        this.createAnAccount= page.getByRole('link', { name: 'Create an account' })
        this.step1_of_2= page.locator('.Signup__step');

    }
    async clickSignInButton(){
        await this.signBtn.click();
        await expect(this.signHeading).toBeVisible();
    }

    async clickOnCreateAnAccount(){
        await this.createAnAccount.click();
        await expect(this.step1_of_2).toBeVisible();
    }

}