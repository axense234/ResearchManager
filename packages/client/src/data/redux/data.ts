// Types
import {
  CreateResearchActivityDto,
  CreateResearchLogDto,
  CreateResearchPhaseDto,
  CreateResearchSessionDto,
  CreateTagDto,
  SignInDto,
  SignUpDto,
} from "@researchmanager/shared/types";
import { ActivityLogsDataType, UserRedux } from "@/core/types";
// Mock Data
import {
  createResearchActivityMockData,
  createResearchLogMockData,
  createResearchPhaseMockData,
  createResearchSessionMockData,
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

export const defaultCreateResearchSessionDto: CreateResearchSessionDto = {
  ...createResearchSessionMockData[0],
  tags: [],
  imagesSrc: [],
};

export const defaultCreateResearchLogDto: CreateResearchLogDto = {
  ...createResearchLogMockData[0],
  tags: [],
  imagesSrc: [],
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

export const activityLogsMessages = (
  entityName: string,
  entityLabel: string,
  entityTime: string,
  activityDayId?: string,
): ActivityLogsDataType => {
  return {
    CREATE: {
      subject: "CREATE",
      message: `Successfully created ${entityLabel} named ${entityName}.`,
      activityDays: [activityDayId],
    },
    UPDATE: {
      subject: "UPDATE",
      message: `Successfully updated ${entityLabel} named ${entityName}.`,
      activityDays: [activityDayId],
    },
    PURGE: {
      subject: "PURGE",
      message: `Successfully permanently deleted ${entityLabel} named ${entityName}.`,
      activityDays: [activityDayId],
    },
    ARCHIVE: {
      subject: "ARCHIVE",
      message: `Successfully archived ${entityLabel} named ${entityName}.`,
      activityDays: [activityDayId],
    },
    RESEARCH_START: {
      subject: "RESEARCH_START",
      message: `Started ${entityLabel} named ${entityName} at ${entityTime}.`,
      activityDays: [activityDayId],
    },
    RESEARCH_PAUSE: {
      subject: "RESEARCH_PAUSE",
      message: `Paused ${entityLabel} named ${entityName} at ${entityTime}.`,
      activityDays: [activityDayId],
    },
    RESEARCH_RESUME: {
      subject: "RESEARCH_RESUME",
      message: `Resumed ${entityLabel} named ${entityName} at ${entityTime}.`,
      activityDays: [activityDayId],
    },
    RESEARCH_END: {
      subject: "RESEARCH_END",
      message: `Finished ${entityLabel} named ${entityName} at ${entityTime}.`,
      activityDays: [activityDayId],
    },
  };
};
