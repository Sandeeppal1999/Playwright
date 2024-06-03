import { Page, test} from '@playwright/test';
import { HomePage } from './HomePage.spec';
export class searchResultPage{
    private page:Page;

    constructor(page: Page){
    this.page= page;
    const homePage= new HomePage(page);
}
}