import{expect, Page, test} from '@playwright/test';

export class CommonHome{
    private page: Page;


    constructor(page: Page){
        this.page= page;

    }
    async verifyURL(url:string){
        await expect(this.page.url()).toContain(url);

    }

}