// Dto
import { SignUpDto } from "../../types";

export const signUpMockData: SignUpDto[] = [
  {
    username: "John",
    email: "john123@gmail.com",
    password: "john123",
    backgroundImageSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1742654520/Research%20Manager/signupwallpaper_w7sbnz.jpg",
    profileImageSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1742654706/Research%20Manager/defaultprofileimage_tzrh3w_mqkmrr.jpg",
  },
  {
    username: "Bob",
    email: "bob123@gmail.com",
    password: "bob123",
    backgroundImageSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1688815596/Highschool%20Site%20App/library_cgocde.jpg",
    profileImageSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1677753040/Highschool%20Site%20App/t2_e0ihsb.jpg",
  },
  {
    username: "Lucy",
    email: "lucy123@gmail.com",
    password: "lucy123",
    backgroundImageSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1688815596/Highschool%20Site%20App/library_cgocde.jpg",
    profileImageSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1677753040/Highschool%20Site%20App/t5_bkblwl.jpg",
    researchActivities: [],
  },
];
