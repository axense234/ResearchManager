// Types
import { ReduxEntityWrapper } from "@/core/types";
import { User } from "@prisma/client";
import { SignInDto, SignUpDto } from "@researchmanager/shared/types";

export const signInMockDataRedux: SignInDto = { email: "", password: "" };
export const signUpMockDataRedux: SignUpDto = {
  username: "",
  email: "",
  password: "",
};
export const userProfileMockDataRedux: ReduxEntityWrapper<User> = {
  id: "",
  email: "",
  hash: "",
  username: "",
  backgroundImageSrc:
    "https://res.cloudinary.com/birthdayreminder/image/upload/v1732365178/Research%20Manager/users/profileImages/abstract-user-flat-4_fimqzi.png",
  profileImageSrc:
    "https://res.cloudinary.com/birthdayreminder/image/upload/v1732365146/Research%20Manager/users/backgroundImages/signupwallpaper_der2zw.jpg",
  createdAt: "",
  updatedAt: "",
};
