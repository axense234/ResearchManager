// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type CreateResearchActivityDtoOptionsType = {
  name: ApiPropertyOptions;
  backgroundColorOrImageSrc: ApiPropertyOptions;
  researchPhases: ApiPropertyOptions;
  activityFeed: ApiPropertyOptions;
  tags: ApiPropertyOptions;
  userId: ApiPropertyOptions;
  userIdForArchivePurposes: ApiPropertyOptions;
};

export const createResearchActivityDtoOptions: CreateResearchActivityDtoOptionsType =
  {
    name: {
      example: 'Reading',
      description: 'The name of the Research Activity you want to create.',
    },
    backgroundColorOrImageSrc: {
      example:
        'https://res.cloudinary.com/birthdayreminder/image/upload/v1688815596/Highschool%20Site%20App/library_cgocde.jpg',
      description:
        'The src of the background image or the color of your Research Activity.',
    },
    researchPhases: {
      description:
        "The Research Phases of your Research Activity. Input the respective Research Phases UUID/UUID's in the array.",
    },
    activityFeed: {
      description:
        'The Activity Feed of your Research Activity. Input the respective Activity Feed UUID in the array.',
    },
    tags: {
      description:
        "The Tags of your Research Activity. Input the respective Tags UUID/UUID's in the array.",
    },
    userId: {
      description:
        'The id of the User that will be connected to the newly created Research Activity. Input the respective User UUID as the value.',
    },
    userIdForArchivePurposes: {
      description:
        'The id of the User that will be connected to the newly created Research Activity. Input the respective User UUID as the value. This is done for potential archive purposes.',
    },
  };
