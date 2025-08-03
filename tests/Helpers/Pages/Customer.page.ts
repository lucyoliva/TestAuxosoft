
import { Page, Locator } from '@playwright/test';

export class CustomerPage {
  readonly page: Page;

  // Locators:
readonly generalItem:Locator;
readonly testId:Locator;
readonly edit:Locator;
readonly LastName:Locator;
readonly savebtn:Locator;
readonly customerdetails:Locator;
  constructor(page: Page) {
    this.page = page;
    this.testId = page.locator('[data-testid="ut-customer-card-more-actions"]');
    this.edit=page.locator('text=Edit Customer Details');
    this.LastName=page.locator('input[placeholder="Last Name"]',);
        this.savebtn=page.locator('text=Save');
        this.customerdetails=page.locator('text=Customer Details');
}
  

  
   async clickontestId() {
   await this.testId.click();
   

  }
  async clickonCustomerDetails() {
   await this.edit.click();
   

  }
async clickSave() {
   await this.savebtn.click();
   

  }
async filllastname(lastname) {
   await this.LastName.fill(lastname);
   

  }
  
}

