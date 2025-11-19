import { Locator, Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly btnClock: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnClock = page.locator(
      "//button[@class='oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action']"
    );
  }

  async gotoAttendancePunchInOut() {
    await this.btnClock.click;
  }
}
