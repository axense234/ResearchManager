// Types
import {
  CreateResearchActivityDto,
  CreateResearchPhaseDto,
  CreateTagDto,
  SignInDto,
  SignUpDto,
} from "@researchmanager/shared/types";
import { UserRedux } from "@/core/types";
// Mock Data
import {
  createResearchActivityMockData,
  createResearchPhaseMockData,
  createTagMockData,
} from "@researchmanager/shared/mock";
import { TagFontFamily } from "@prisma/client";

export const signInMockDataRedux: SignInDto = { email: "", password: "" };
export const signUpMockDataRedux: SignUpDto = {
  username: "",
  email: "",
  password: "",
};

export const defaultCreateResearchActivityDto: CreateResearchActivityDto = {
  ...createResearchActivityMockData[0],
  tags: [],
  researchPhases: [],
};

export const defaultCreateResearchPhaseDto: CreateResearchPhaseDto = {
  ...createResearchPhaseMockData[0],
  tags: [],
  researchLogs: [],
  researchSessions: [],
  researchActivityId: "",
};

export const defaultCreateTagDto: CreateTagDto = {
  ...createTagMockData[0],
};

export const userProfileMockDataRedux: UserRedux = {
  id: "",
  email: "defaultemail@provider.com",
  hash: "",
  username: "Default User",
  profileImageSrc:
    "https://res.cloudinary.com/birthdayreminder/image/upload/v1742654706/Research%20Manager/defaultprofileimage_tzrh3w_mqkmrr.jpg",
  backgroundImageSrc:
    "https://res.cloudinary.com/birthdayreminder/image/upload/v1732365146/Research%20Manager/users/backgroundImages/signupwallpaper_der2zw.jpg",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  activityFeedId: "",
  researchActivitiesIds: [],
  settingsId: "",
  tagsIds: [],
};

export const availableTagFontFamilies: TagFontFamily[] = [
  "ARIAL",
  "BRADLEY_HAND",
  "COMIC_SANS_MS",
  "COURIER_NEW",
  "GEORGIA",
  "HELVETICA",
  "IMPACT",
  "LUCIDA",
  "LUMINARY",
  "MONACO",
  "TAHOMA",
  "TIMES_NEW_ROMAN",
  "TREBUCHET_MS",
  "VERDANA",
];
