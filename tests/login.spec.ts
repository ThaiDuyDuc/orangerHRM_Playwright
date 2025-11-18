import { test, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/loginPage";
import { commonData } from "../src/data/baseData/commonData";
import { loginData } from "../src/data/loginData";

test.describe("Login test", () => {
  // test("should login successfully with valid credentials", async ({ page }) => {
  //   const loginPage = new LoginPage(page);
  //   await loginPage.goto();
  //   await loginPage.title.waitFor();

  //   await loginPage.login(loginData.user1.email, loginData.user1.password);

  //   await page.waitForURL(commonData.dashboardUrl);
  //   await page.waitForTimeout(3000);
  //   // expect(page.url()).toBe(commonData.dashboardUrl);
  // });

  // test("Login with uppercase/lowercase email/username", async ({ page }) => {
  //   const loginPage = new LoginPage(page);
  //   await loginPage.goto();
  //   await loginPage.title.waitFor();

  //   await loginPage.login(loginData.user2.email, loginData.user2.password);

  //   await page.waitForURL(commonData.dashboardUrl);
  //   await page.waitForTimeout(3000);
  //   // expect(page.url()).toBe(commonData.dashboardUrl);
  // });

  test("Login failed. Username is empty, password is valid.", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.title.waitFor();

    await loginPage.login(loginData.user3.email, loginData.user3.password);

    await loginPage.usernameError.waitFor();
    await page.waitForTimeout(3000);
  });

  /*
    Login successful username/password has spaces at the beginning or end.
    Login failed. Password is empty, username is valid.
    Login failed. Username and password are empty.
    Login failed Username does not exist
    Login failed. Incorrect password.
    Login failed. Incorrect username and password.
  */
});
