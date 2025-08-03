/// pages/LoginPage.ts

import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Locators:
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
     
     this.usernameInput = page.locator('#username');
     this.passwordInput = page.locator('#password');
     this.submitButton=page.locator('button[type="submit"][name="action"]');
   
  }

 async navigate() {
        await this.page.goto('https://dev.workshop.auxosoftware.com/');

  }

  async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
  }
}
