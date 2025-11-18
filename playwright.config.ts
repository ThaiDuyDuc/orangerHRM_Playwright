import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // thư mục chứa các file test
  timeout: 60000, // timeout cho mỗi test là 60 giây
  expect: {
    timeout: 5000, // timeout cho các expect assertions
  },
  reporter: [
    ["list"], // hiển thị kết quả trên terminal
    ["html", { open: "never", outputFolder: "playwright-report" }], // tạo report html
  ],
  retries: 0, // số lần retry nếu test fail
  use: {
    headless: false, // chạy browser có GUI
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true, // bỏ qua lỗi https
    video: "on-first-retry", // quay video nếu test fail
    screenshot: "only-on-failure", // chụp screenshot khi test fail
    actionTimeout: 10000, // timeout cho các action như click, fill
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "Desktop Firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
    // {
    //   name: "Mobile Safari",
    //   use: { ...devices["iPhone 13"] },
    // },
  ],
});
