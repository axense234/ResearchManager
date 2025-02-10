// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type SignUpDtoOptionsType = {
  username: ApiPropertyOptions;
  password: ApiPropertyOptions;
  email: ApiPropertyOptions;
  backgroundImageSrc: ApiPropertyOptions;
  profileImageSrc: ApiPropertyOptions;
  settings: ApiPropertyOptions;
  activityFeeds: ApiPropertyOptions;
  archivedResearchActivities: ApiPropertyOptions;
  archivedResearchLogs: ApiPropertyOptions;
  archivedResearchPhases: ApiPropertyOptions;
  archivedResearchSessions: ApiPropertyOptions;
  archivedTags: ApiPropertyOptions;
  researchActivities: ApiPropertyOptions;
  tags: ApiPropertyOptions;
};

export const signUpDtoOptions: SignUpDtoOptionsType = {
  username: {
    example: 'John',
    description: 'The username of the user you want to create.',
  },
  password: {
    example: 'john123',
    description:
      'The password of the user you want to create. Please DO NOT use the example one for reasons other than testing.',
  },
  email: {
    example: 'john123@gmail.com',
    description: 'The email of the user you want to create.',
  },
  backgroundImageSrc: {
    example:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1688815596/Highschool%20Site%20App/library_cgocde.jpg',
    description: "The src of the background image of your user's profile.",
  },
  profileImageSrc: {
    example:
      "'https://res.cloudinary.com/birthdayreminder/image/upload/v1677753040/Highschool%20Site%20App/t5_bkblwl.jpg'",
    description: "The src of your user's profile image.",
  },
  settings: {
    description:
      'The Settings of your user. Input the respective Settings UUID as a value in the string.',
  },
  activityFeeds: {
    description:
      "The Activity Feeds of your user. Input the respective Activity Feeds UUID/UUID's in the array.",
  },
  archivedResearchActivities: {
    description:
      "The Archived Research Activities of your user. Input the respective Archived Research Activities UUID/UUID's in the array.",
  },
  archivedResearchLogs: {
    description:
      "The Archived Research Logs of your user. Input the respective Archived Research Logs UUID/UUID's in the array.",
  },
  archivedResearchPhases: {
    description:
      "The Archived Research Phases of your user. Input the respective Archived Research Phases UUID/UUID's in the array.",
  },
  archivedResearchSessions: {
    description:
      "The Archived Research Sessions of your user. Input the respective Archived Research Sessions UUID/UUID's in the array.",
  },
  archivedTags: {
    description:
      "The Archived Tags of your user. Input the respective Archived Tags UUID/UUID's in the array.",
  },
  researchActivities: {
    description:
      "The Archived Research Activities of your user. Input the respectiveArchived Research Activities UUID/UUID's in the array.",
  },
  tags: {
    description:
      "The Tags of your user. Input the respective Tags UUID/UUID's in the array.",
  },
};
