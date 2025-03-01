// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type CreateTagDtoOptionsType = {
  title: ApiPropertyOptions;
  backgroundColorOrImageSrc: ApiPropertyOptions;
  fontSize: ApiPropertyOptions;
  fontFamily: ApiPropertyOptions;
  researchActivities: ApiPropertyOptions;
  researchPhases: ApiPropertyOptions;
  researchLogs: ApiPropertyOptions;
  researchSessions: ApiPropertyOptions;
  userIdForArchivePurposes: ApiPropertyOptions;
  userId: ApiPropertyOptions;
};

export const createTagDtoOptions: CreateTagDtoOptionsType = {
  title: {
    example: 'Goofy',
    description: 'The title of the Tag you want to create.',
  },
  backgroundColorOrImageSrc: {
    example:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1688815596/Highschool%20Site%20App/library_cgocde.jpg',
    description: 'The src of the background image or the color of your Tag.',
  },
  fontSize: {
    example: 24,
    description: 'The font size of your Tag title.',
  },
  fontFamily: {
    example: 'GEORGIA',
    description:
      'The font family of your Tag title. Available families: ARIAL, HELVETICA, TIMES_NEW_ROMAN, VERDANA, GEORGIA, COURIER_NEW, TAHOMA, TREBUCHET_MS, IMPACT, COMIC_SANS_MS, LUCIDA, MONACO, BRADLEY_HAND, LUMINARY.',
  },
  researchActivities: {
    description:
      "The Research Activities of your Tag. Input the respective Research Activities UUID/UUID's in the array.",
  },
  researchPhases: {
    description:
      "The Research Phases of your Tag. Input the respective Research Phases UUID/UUID's in the array.",
  },
  researchLogs: {
    description:
      "The Research Logs of your Tag. Input the respective Research Logs UUID/UUID's in the array.",
  },
  researchSessions: {
    description:
      "The Research Sessions of your Tag. Input the respective Research Sessions UUID/UUID's in the array.",
  },
  userId: {
    description:
      'The id of the User that will be connected to the newly created Tag. Input the respective User UUID as the value.',
  },
  userIdForArchivePurposes: {
    description:
      'The id of the User that will be connected to the newly created Tag. Input the respective User UUID as the value. This is done for potential archive purposes.',
  },
};
