import { Locator, Page } from "@playwright/test";

export class TimePage {
  readonly page: Page;

  readonly titlePage: Locator;
  readonly titleItemPunchInOut: Locator;
  //   readonly selTimeSheet: Location;

  constructor(page: Page) {
    this.page = page;
    this.titlePage = page.locator('h6:has-text("Attendance")');
    this.titleItemPunchInOut = page.locator(
      "//h6[contains(normalize-space(),'Punch')]"
    );
  }
}
