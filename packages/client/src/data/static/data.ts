// Types
import {
  AboutTechnologyType,
  OAuthOptionContent,
  SidebarButtonContentType,
} from "@/core/types";
import SocialMediaIconProps from "@/core/interfaces/shared/general/SocialMediaIconsProps";
// React Icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaHome, FaUser } from "react-icons/fa";
import { MdDashboard, MdContactPhone, MdContactSupport } from "react-icons/md";
import { FaRankingStar, FaBookOpenReader } from "react-icons/fa6";
import { IoMdCreate, IoMdSettings } from "react-icons/io";
import { RiShutDownLine } from "react-icons/ri";

export const homePageUrl = "/home";

export const homeContactEmail = "researchmanager@gmail.com(fake)";
export const homeContactPhoneNumber = "0721 123 456(fake)";

export const mainBlackColor = "#110608";
export const mainWhiteColor = "#d8e5e4";
export const mainLightBlueColor = "#83cec8";
export const mainPastelRedColor = "#d54e5d";

export const formErrorInputBorder = `3px solid ${mainPastelRedColor}`;

export const homeAboutFrontendTechnologies: AboutTechnologyType[] = [
  {
    id: 1,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063331/Icons%20and%20Stuff/typescript_logo_png_kl85ny.webp",
    technologyDest: "https://www.typescriptlang.org/",
    technologyLabel: "Typescript",
    technologySub: "Javascript Superset",
  },
  {
    id: 2,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764549/Icons%20and%20Stuff/react_js_logo_icon512_b7nzgm.webp",
    technologyDest: "https://react.dev/",
    technologyLabel: "React",
    technologySub: "Frontend Framework",
  },
  {
    id: 3,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063415/Icons%20and%20Stuff/sass-logo-2_xkltmh.webp",
    technologyDest: "https://sass-lang.com/",
    technologyLabel: "SCSS",
    technologySub: "CSS Preprocessor",
  },
  {
    id: 4,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764511/Icons%20and%20Stuff/redux-logo_ejnmb7.webp",
    technologyDest: "https://redux.js.org/",
    technologyLabel: "Redux & Redux Toolkit",
    technologySub: "State Management",
  },
  {
    id: 5,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674571532/Icons%20and%20Stuff/nextjs_logo_hdppif.png",
    technologyDest: "https://nextjs.org/",
    technologyLabel: "NextJS ",
    technologySub: "React Framework",
  },
];

export const homeAboutBackendTechnologies: AboutTechnologyType[] = [
  {
    id: 1,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063331/Icons%20and%20Stuff/typescript_logo_png_kl85ny.webp",
    technologyDest: "https://www.typescriptlang.org/",
    technologyLabel: "Typescript",
    technologySub: "Javascript Superset",
  },
  {
    id: 2,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764542/Icons%20and%20Stuff/nodejs-logo-png--435_xz77cw.webp",
    technologyDest: "https://nodejs.org/en",
    technologyLabel: "NodeJS",
    technologySub: "Javascript Runtime",
  },
  {
    id: 3,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764524/Icons%20and%20Stuff/express-js-icon-20_onazqf.webp",
    technologyDest: "https://expressjs.com/",
    technologyLabel: "ExpressJS",
    technologySub: "NodeJS Web Framework",
  },
  {
    id: 4,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743790385/Icons%20and%20Stuff/nestjs.256x255_eqznbg.png",
    technologyDest: "https://nestjs.com/",
    technologyLabel: "NestJS",
    technologySub: "Progresive NodeJS Web Framework",
  },
  {
    id: 5,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063477/Icons%20and%20Stuff/postgresql-logo-png-transparent_zxfyrt.webp",
    technologyDest: "https://www.postgresql.org/",
    technologyLabel: "PostgreSQL",
    technologySub: "Relational Database",
  },
  {
    id: 6,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063521/Icons%20and%20Stuff/redis-logo_i8mudb.webp",
    technologyDest: "https://redis.io/",
    technologyLabel: "Redis",
    technologySub: "Cache Database",
  },
  {
    id: 7,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063501/Icons%20and%20Stuff/prisma-logo-3805665B69-seeklogo.com_cj8pk8.webp",
    technologyDest: "https://www.prisma.io/",
    technologyLabel: "Prisma",
    technologySub: "Database ORM",
  },
];

export const homeAboutCloudServices: AboutTechnologyType[] = [
  {
    id: 1,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764538/Icons%20and%20Stuff/netlify-logo-png-transparent_f4eya5.webp",
    technologyDest: "https://www.netlify.com/",
    technologyLabel: "Netlify",
    technologySub: "Frontend Host",
  },
  {
    id: 2,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063547/Icons%20and%20Stuff/render_logo_fu2pxk.webp",
    technologyDest: "https://render.com/",
    technologyLabel: "Render",
    technologySub: "Backend, DB and Cron Jobs Host",
  },
];

export const homeAboutOtherTechnologies: AboutTechnologyType[] = [
  {
    id: 1,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1713861293/Icons%20and%20Stuff/cloudinary_cloud_glyph_512x512_qgwst5.png",
    technologyDest: "https://cloudinary.com/",
    technologyLabel: "Cloudinary",
    technologySub: "Media Management(images)",
  },
  {
    id: 2,
    logoUrlSrc:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1713861987/Icons%20and%20Stuff/25231_xybfm1.png",
    technologyDest: "https://github.com/",
    technologyLabel: "Github",
    technologySub: "Version Control System(VCS)",
  },
];

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

export const sidebarButtonsContent: SidebarButtonContentType[] = [
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
    icon: RiShutDownLine({}),
  },
];

export const homeIntroDescription =
  "Research Manager is an app focused around creating and managing Research Activities. Research Activities could be hobbies, or other activities, each one of them having Research Points and Logs. Research Points equal to the time spent in minutes on an and Logs are frequent journals that describe in detail a Session.";

export const homeExamplesDescriptions = [
  "A Research Activity mainly consists of Research Points and Research Logs, tho for viewing purposes some Tags, Images and other cosmetic stuff can be assigned to a Research Activity, like on the examples shown.",
  "Research Activities are also split in Research Phases. By default, when creating a Research Activity a base Research Phase is created with the name of the Research Activity. Research Phases help with organizing the whole researching purposes, like having different phases for different projects.",
];

export const homeRankingsDescription =
  "Here you can observe the distribution of the Research Points of your Research Activities, from the most researched to the least.";

export const homeContactDescription =
  "You can contact us by giving us Feedback, sending us an Email or calling us using our Phone Number.";

export const homeAboutInfoDescriptions = [
  "This website has been developed with the intention of practicing my design/coding skills. Especially NestJS since at this point i only watched a tutorial on it and followed it along. I have also focused on testing since i only tested things manually up to this point.",
  "I got inspiration from the way i actually “research” stuff i like(for example, Web Development) tho i do it using normal text files. So basically this website is basically taking that concept i have been using and turning the practical approach from text files to an actual website app. ",
];

export const homeAboutTechnologiesDescription =
  "Additional information about the technologies used when creating the website. Contains information about Frontend Technologies, Backend Technologies, Cloud Services, Media Management, Version Control System.";

export const DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN = 6;
export const MAX_ENTITY_CONTAINER_TAGS_SHOWN = 20;

export const AUTO_CLOSE_MODAL = 5000;

export const AUTO_SLIDER_DELAY = 4000;
export const AUTO_SLIDER_RESTART = 6000;
export const AUTO_SLIDER_FREQUENCY = 8000;

export const APP_NAME = "Research Manager";
export const APP_DEFAULT_TITLE = "Research Manager - Systemize your Research";
export const APP_TITLE_TEMPLATE = "%s - PWA App";
export const APP_DESCRIPTION =
  "Research Manager is a simple web app that helps user create systems that make their research process a lot more coordinated and organized.";
export const APP_KEYWORDS =
  "monorepo, html, css, typescript, next, react, express, node, nestjs, systemize, organize, research, simple";
export const APP_ICON =
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1743796637/Research%20Manager/brandmark-design-16x16_hk86bc.png";
