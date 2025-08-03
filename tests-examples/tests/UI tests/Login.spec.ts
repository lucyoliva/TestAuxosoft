import { test, expect} from '@playwright/test';
import { LoginPage } from '../Helpers/Pages/Login.page';
import { HomePage } from '../Helpers/Pages/Home.page';
import { CustomerPage } from '../Helpers/Pages/Customer.page';

import dotenv from 'dotenv';

dotenv.config();

test.describe('Login Test', () => {
  let loginPage: LoginPage;
  let homePage:HomePage;
  let customerPage:CustomerPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
   homePage = new HomePage(page);
   customerPage=new CustomerPage(page);
       await loginPage.navigate();

    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
  await expect(page.getByText('QA Engineer1')).toBeVisible();
  });

  test('User should view list of existing customers', async ({}) => {

 
  await homePage.clickContacts();
  await homePage.clickCustomers();
await expect(homePage.testUser).toBeVisible({ timeout: 10000 });


});

  test('admin user can edit customer details', async ({}) => {
     await homePage.clickContacts();
  await homePage.clickCustomers();
    await homePage.clicktestUser();
await customerPage.clickontestId();
await customerPage.clickonCustomerDetails();
await customerPage.filllastname("Doe");
await customerPage.clickSave();

await expect(customerPage.testId).toBeVisible({ timeout: 10000 });

    
   
  });
});