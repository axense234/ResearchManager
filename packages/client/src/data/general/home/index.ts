// Types
import { HomeSectionTitleProps } from "@/core/interfaces";
// Data
import { homeContactEmail, homeContactPhoneNumber } from "../data";

export const homeIntroData: HomeSectionTitleProps = {
  title: "Research Manager",
  description:
    "Research Manager is an app focused around creating and managing Research Activities. Research Activities could be hobbies, or other activities, each one of them having Research Points and Logs. Research Points equal to the time spent in minutes on an and Logs are frequent journals that describe in detail a Session.",
};

export const homeExamplesData: HomeSectionTitleProps = {
  title: "Research Activity Examples",
  description: [
    "A Research Activity mainly consists of Research Points and Research Logs, tho for viewing purposes some Tags, Images and other cosmetic stuff can be assigned to a Research Activity, like on the examples shown.",
    "Research Activities are also split in Research Phases. By default, when creating a Research Activity a base Research Phase is created with the name of the Research Activity. Research Phases help with organizing the whole researching purposes, like having different phases for different projects.",
  ],
};

export const homeRankingsData: HomeSectionTitleProps = {
  title: "Research Points Ranking",
  description:
    "Here you can observe the distribution of the Research Points of your Research Activities, from the most researched to the least.",
};

export const homeContactData: HomeSectionTitleProps = {
  title: "Contact Us",
  description:
    "You can contact us by giving us Feedback, sending us an Email or calling us using our Phone Number.",
};

export const homeContactEmailData: HomeSectionTitleProps = {
  title: "Email",
  description: homeContactEmail,
};

export const homeContactPhoneNumberData: HomeSectionTitleProps = {
  title: "Phone Number",
  description: homeContactPhoneNumber,
};

export const homeAboutInfoData: HomeSectionTitleProps = {
  title: "About",
  description: [
    "This website has been developed with the intention of practicing my design/coding skills. Especially NestJS since at this point i only watched a tutorial on it and followed it along. I have also focused on testing since i only tested things manually up to this point.",
    "I got inspiration from the way i actually “research” stuff i like(for example, Web Development) tho i do it using normal text files. So basically this website is basically taking that concept i have been using and turning the practical approach from text files to an actual website app. ",
  ],
};

export const homeAboutTechnologiesData: HomeSectionTitleProps = {
  title: "Technologies Used",
  description:
    "Additional information about the technologies used when creating the website. Contains information about Frontend Technologies, Backend Technologies, Cloud Services, Media Management, Version Control System.",
};
