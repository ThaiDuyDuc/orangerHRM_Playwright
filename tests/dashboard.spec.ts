import test, { expect } from "@playwright/test";
import { LoginPage } from "../src/pages/loginPage";
import { loginData } from "../src/data/loginData";
import { DashboardPage } from "../src/pages/dashboardPage";
import { TimePage } from "../src/pages/timePage";

test.describe("dasboard test", () => {
  test.beforeEach(async ({ page }) => {
    // Go to Url Dasboard
    const login = new LoginPage(page);
    await login.goto();
    await login.login(loginData.user1.email, loginData.user1.password);
  });

  //   test("go to Attendance Punch In Out page", async ({ page }) => {
  //     // Go to url Dasboard
  //     const dasboardPage = new DashboardPage(page);

  //     // go to Attendance Punch In Out page
  //     await dasboardPage.gotoAttendancePunchInOut();

  //     const timePage = new TimePage(page);
  //     await expect(timePage.titlePage).toHaveText("Attendance");
  //     await expect(timePage.titleItemPunchInOut).toHaveText("Punch");
  //   });
});
