import { test, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/loginPage";
import { commonData } from "../src/data/baseData/commonData";
import { loginData } from "../src/data/loginData";

test.describe("Login test", () => {
  // 1
  test("should login successfully with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.title.waitFor();

    await loginPage.login(loginData.user1.email, loginData.user1.password);

    await page.waitForURL(commonData.dashboardUrl);
    await page.waitForTimeout(3000);
    // expect(page.url()).toBe(commonData.dashboardUrl);
  });

  // 2
  test("Login with uppercase/lowercase email/username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.title.waitFor();

    await loginPage.login(loginData.user2.email, loginData.user2.password);

    await page.waitForURL(commonData.dashboardUrl);
    await page.waitForTimeout(3000);
    // expect(page.url()).toBe(commonData.dashboardUrl);
  });

  // 3
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

  // 4
  test("Login failed with spaces at the beginning and end of Username", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.login(loginData.user4.email, loginData.user4.password);

    await expect(loginPage.invalidError).toHaveText("Invalid credentials");
    // await page.waitForURL(commonData.dashboardUrl);
  });

  // 5
  test("Login failed. Password is empty, username is valid.", async ({
    page,
  }) => {
    // Login page
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.title.waitFor();

    // enter login data
    await loginPage.login(loginData.user5.email, loginData.user5.password);

    // display err password
    await expect(loginPage.passwordError).toHaveText("Required");
  });

  // 6
  test("Login failed. Username and password are empty.", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // login page
    await loginPage.goto();

    // display title
    await loginPage.title.waitFor();

    await loginPage.login(loginData.user6.email, loginData.user6.password);
  });

  // 7
  test("Login failed Username does not exist", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Login page
    await loginPage.goto();

    // display title
    await expect(loginPage.title).toHaveText("Login");

    // enter login data
    await loginPage.login(loginData.user7.email, loginData.user7.password);

    // display err password
    await expect(loginPage.invalidError).toHaveText("Invalid credentials");
  });

  // 8
  test("Login failed. Incorrect password.", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Login page
    await loginPage.goto();

    // display title
    await expect(loginPage.title).toHaveText("Login");

    // enter login data
    await loginPage.login(loginData.user8.email, loginData.user8.password);

    // display err password
    await expect(loginPage.invalidError).toHaveText("Invalid credentials");
  });

  // 9
  test("Login failed. Incorrect username and password.", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Login page
    await loginPage.goto();

    // display title
    // await expect(loginPage.title).toHaveText("Login");

    // enter login data
    await loginPage.login(loginData.user9.email, loginData.user9.password);

    // display err password
    await expect(loginPage.invalidError).toHaveText("Invalid credentials");
  });

  // 10
  test("Login fails when there is a space before Username.", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    // Login page
    await loginPage.goto();

    // display title
    // await expect(loginPage.title).toHaveText("Login");

    // enter login data
    await loginPage.login(loginData.user10.email, loginData.user10.password);

    // display err password
    await expect(loginPage.invalidError).toHaveText("Invalid credentials");
  });

  // 11
  test("Login is successful when there is a space after Username.", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    // Login page
    await loginPage.goto();

    // display title
    // await expect(loginPage.title).toHaveText("Login");

    // enter login data
    await loginPage.login(loginData.user11.email, loginData.user11.password);

    // go to Url Dashboard
    await page.waitForURL(commonData.dashboardUrl);
  });
});
