// Types
import { OAuthOptionContent } from "@/core/types";
// React Icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const homePageUrl = "/home";

export const mainBlackColor = "#110608";
export const mainWhiteColor = "#d8e5e4";

export const logoImageUrl = {
  light:
    "https://res.cloudinary.com/birthdayreminder/image/upload/v1742642023/Research%20Manager/brandmark-design-1024x0g2_ded5w3.png",
  dark: "https://res.cloudinary.com/birthdayreminder/image/upload/v1742642023/Research%20Manager/brandmark-design-1024x0g1_ekxcnm.png",
};

export const langFlagsImages = [
  {
    id: 1,
    imageSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1716043250/Flag_of_Romania_bcoghi.png",
    imageLabel: "Romanian",
    value: "ro",
  },
  {
    id: 2,
    imageSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1716043251/18165_bswuth.jpg",
    imageLabel: "English",
    value: "en",
  },
  {
    id: 3,
    imageSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1716454499/Flag_of_France_wl0boq.png",
    imageLabel: "French",
    value: "fr",
  },
  {
    id: 4,
    imageSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1716455526/Flag_of_Germany__3-2_.svg_jxwz7r.png",
    imageLabel: "German",
    value: "de",
  },
];

export const authCarouselContent = [
  {
    id: 1,
    title: "Systemize your Research",
    description:
      "Create Research Activities with Research Phases that match your desired purposes. We give you the tools and freedom to create your own preferred system.",
  },
  {
    id: 2,
    title: "Document your Activities",
    description:
      "Start Researching by using Research Sessions with the intent of documenting your Research. Eventually, those Research Sessions will be archived into Research Logs.",
  },
  {
    id: 3,
    title: "Organize your System",
    description:
      "Add custom Tags to your Research Activities, Phases, Sessions, Logs in order to improve the organization of your created System.You can also organize your system by modifying said Research Entities to your liking.",
  },
  {
    id: 4,
    title: "Be Notified",
    description:
      "Receive notifications in case you forgot to finish a Research Session, and in many other customizable cases.",
  },
];

export const OAuthOptionsContent: OAuthOptionContent[] = [
  {
    id: 1,
    reactIcon: FcGoogle({}),
    optionType: "google",
  },
  {
    id: 2,
    reactIcon: FaGithub({}),
    optionType: "github",
  },
];
