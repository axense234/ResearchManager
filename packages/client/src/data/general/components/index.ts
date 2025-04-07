// Types
import { SocialMediaIconProps } from "@/core/interfaces";
import { OAuthOptionContent, NavigationButtonContentType } from "@/core/types";
// React Icons
import { FaGithub, FaHome, FaUser } from "react-icons/fa";
import { FaRankingStar, FaBookOpenReader } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMdCreate, IoMdSettings, IoMdLogOut } from "react-icons/io";
import { MdDashboard, MdContactPhone, MdContactSupport } from "react-icons/md";

export const socialMediaIcons: SocialMediaIconProps[] = [
  {
    id: 1,
    linkIconUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1709127454/VitalPrep/Facebook_Logo_2023_1_tmhpp1.png",
    linkDest: "https://www.facebook.com",
    linkTitle: "Facebook",
  },
  {
    id: 2,
    linkIconUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1709127441/VitalPrep/1384060_1_uocfj1.png",
    linkDest: "https://www.youtube.com",
    linkTitle: "Youtube",
  },
  {
    id: 3,
    linkIconUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1709127467/VitalPrep/Instagram_icon_1_tghefy.png",
    linkDest: "https://instagram.com",
    linkTitle: "Instagram",
  },
  {
    id: 4,
    linkIconUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1709127466/VitalPrep/github_1_alafgo.png",
    linkDest: "https://github.com/axense234/ResearchManager",
    linkTitle: "Github",
  },
];

export const socialMediaIconReservedDimensions = 40;

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

export const navigationButtonsContent: NavigationButtonContentType[] = [
  {
    id: 1,
    buttonLabel: "Home",
    buttonType: "link",
    buttonDest: "/home",
    icon: FaHome({}),
  },
  {
    id: 2,
    buttonLabel: "Dashboard",
    buttonType: "link",
    buttonDest: "/dashboard",
    icon: MdDashboard({}),
  },
  {
    id: 3,
    buttonLabel: "Profile",
    buttonType: "link",
    buttonDest: "/profile",
    icon: FaUser({}),
  },
  {
    id: 4,
    buttonLabel: "Rankins",
    buttonType: "link",
    buttonDest: "/home#rankings",
    icon: FaRankingStar({}),
  },
  {
    id: 5,
    buttonLabel: "Contact Us",
    buttonType: "link",
    buttonDest: "/home#contact",
    icon: MdContactPhone({}),
  },
  {
    id: 6,
    buttonLabel: "About",
    buttonType: "link",
    buttonDest: "/home#about",
    icon: MdContactSupport({}),
  },
  {
    id: 7,
    buttonLabel: "Research",
    buttonType: "functional",
    icon: FaBookOpenReader({}),
  },
  {
    id: 8,
    buttonLabel: "Create",
    buttonType: "functional",
    icon: IoMdCreate({}),
  },
  {
    id: 9,
    buttonLabel: "Settings",
    buttonType: "functional",
    icon: IoMdSettings({}),
  },
  {
    id: 10,
    buttonLabel: "Logout",
    buttonType: "functional",
    icon: IoMdLogOut({}),
  },
];
