import { Locator, Page } from "@playwright/test";
import { commonData } from "../data/baseData/commonData";

export class LoginPage {
  readonly page: Page;
  readonly title: Locator;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly usernameError: Locator;
  readonly passwordError: Locator;
  readonly invalidError: Locator;

  constructor(page: Page) {
    this.page = page;

    // element
    this.title = page.locator("//h5[normalize-space()='Login']");
    this.txtUsername = page.locator("//input[@placeholder='Username']");
    this.txtPassword = page.locator("//input[@placeholder='Password']");
    this.btnLogin = page.locator("//button[normalize-space()='Login']");

    this.usernameError = page
      .locator("span")
      .filter({ hasText: "Required" })
      .first();

    this.passwordError = page
      .locator("span")
      .filter({ hasText: "Required" })
      .last();
    this.invalidError = page.locator(':text-is("Invalid credentials")');
  }

  async goto() {
    await this.page.goto(commonData.baseURL);
  }

  async login(username: string, password: string) {
    await this.txtUsername.fill(username);
    await this.txtPassword.fill(password);

    await this.btnLogin.click();
  }
}
