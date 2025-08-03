// pages/HomePage.ts

import { Page, Locator } from '@playwright/test';
export class HomePage {
  readonly page: Page;
// Locators:
  
  readonly pageTitle: Locator;
  readonly Contacts: Locator;
  readonly Customer: Locator;
  readonly testUser:Locator
  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('text= QA Engineer1 ');
    this.Contacts=page.locator('text=Contacts');
    this.Customer=page.locator('text=Customers');
    this.testUser=page.locator('text=test');

     
  }
   async navigate() {
    await this.page.goto('https://dev.workshop.auxosoftware.com/dashboard');
  }
  
  
async clickContacts() {
    await this.Contacts.click();
  }
  async clickCustomers() {
    await this.Customer.click();
  }
   async clicktestUser() {
    await this.testUser.click();
  }
   
}



