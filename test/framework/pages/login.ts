import{expect, Locator, Page} from '@playwright/test';
import { waitForDebugger } from 'inspector';
export class Login{
    private page: Page;
    private signBtn:Locator;
    private signHeading:Locator;
    private createAnAccount:Locator;
    private step1_of_2:Locator;
    private emailField:Locator;
    private emailConintinueBtn:Locator;
    private enterYourPasswordHeading:Locator;
    private passwordField:Locator;
    private staySignedInBtn:Locator;
    private passwordContinueBtn:Locator;
    private notNowBtn:Locator;
    private profileBtn:Locator;
    private userProfileName:Locator;

    constructor(page:Page){
        this.page=page;
        this.signBtn=page.locator('[data-t="navbar-sign-in-button-text"]');
        this.signHeading=page.getByText('Sign in');
        this.createAnAccount= page.getByRole('link', { name: 'Create an account' })
        this.step1_of_2= page.locator('.Signup__step');
        this.emailField=page.locator('[data-id="EmailPage-EmailField"]');
        this.emailConintinueBtn= page.locator('[data-id="EmailPage-ContinueButton"]');
        this.enterYourPasswordHeading= page.locator('[class="spectrum-Heading1"]');
        this.passwordField=page.locator('[data-id="PasswordPage-PasswordField"]');
        this.staySignedInBtn=page.locator('[data-id="PasswordPage-RememberMeButton"]');
        this.passwordContinueBtn=page.locator('[data-id="PasswordPage-ContinueButton"]');
        this.notNowBtn=page.getByText('Not now');
        this.profileBtn=page.locator('[data-t="navbar-profile-dropdown-button"]');
        this.userProfileName=page.locator('[data-t="avatar-profile-name-label"]');


    }
    async clickSignInButton(){
        await this.signBtn.click();
        await expect(this.signHeading).toBeVisible();
    }

    async clickOnCreateAnAccount(){
        await this.createAnAccount.click();
        await expect(this.step1_of_2).toBeVisible();
    }
    async sign(){
        await this.page.waitForEvent('domcontentloaded');
        await this.emailField.fill('rockstarkapoor100+testadobestock@gmail.com');

        await this.emailConintinueBtn.click();
        await this.page.waitForTimeout(200)
        // await expect(this.enterYourPasswordHeading).toBeVisible();
        await this.passwordField.fill('Adobestock@123');
        // await this.staySignedInBtn.click();
        // await this.passwordContinueBtn.click();
        // await this.notNowBtn.click();
    }
    async verifySignedInUserName(profileName:string){
        // await this.profileBtn.click();
        // await expect(this.userProfileName).toContainText(profileName);

    }

}