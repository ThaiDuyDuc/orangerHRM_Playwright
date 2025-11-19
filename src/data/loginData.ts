import { commonData } from "./baseData/commonData";

export const loginData = {
  ...commonData,

  user1: { email: "Admin", password: "admin123" },
  user2: { email: "admin", password: "admin123" },
  user3: { email: "", password: "admin123" },
  user4: { email: "   Admin   ", password: "admin123" },
  user5: { email: "Admin", password: "" },
  user6: { email: "", password: "" },
  user7: { email: "NguyenvanA", password: "admin123" },
  user8: { email: "Admin", password: "123456" },
  user9: { email: "NguyenVanA", password: "123456" },
  user10: { email: "   Admin", password: "admin123" },
  user11: { email: "Admin   ", password: "admin123" },
};
