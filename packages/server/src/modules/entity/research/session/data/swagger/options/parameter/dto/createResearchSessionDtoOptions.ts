// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type CreateResearchSessionDtoOptionsType = {
  name: ApiPropertyOptions;
  backgroundColorOrImageSrc: ApiPropertyOptions;
  researchPoints: ApiPropertyOptions;
  content: ApiPropertyOptions;
  imagesSrc: ApiPropertyOptions;
  currentStatusType: ApiPropertyOptions;
  currentStatusDate: ApiPropertyOptions;
  tags: ApiPropertyOptions;
  userIdForArchivePurposes: ApiPropertyOptions;
  researchPhaseId: ApiPropertyOptions;
};

export const createResearchSessionDtoOptions: CreateResearchSessionDtoOptionsType =
  {
    name: {
      example: 'Log1',
      description: 'The name of the Research Session you want to create.',
    },
    backgroundColorOrImageSrc: {
      example:
        'https://res.cloudinary.com/birthdayreminder/image/upload/v1688815596/Highschool%20Site%20App/library_cgocde.jpg',
      description:
        'The src of the background image or the color of your Research Session.',
    },
    researchPoints: {
      example: 115,
      description:
        'The research points of your Research Log.SessionThey represent the length of the research session in minutes.',
    },
    content: {
      example: "Suddenly, one day, a horse walked into the village's brewery.",
      description:
        'The content of your Research Session. Should be descriptive enough to explain in detail the research session.',
    },
    imagesSrc: {
      example: [
        'https://res.cloudinary.com/birthdayreminder/image/upload/v1716464249/pistachio_a7zad1.png',
        'https://res.cloudinary.com/birthdayreminder/image/upload/v1716464248/beef_antblp.png',
      ],
      description:
        'The array of images src of your Research Session. The images should be relevant to the research session.',
    },
    currentStatusType: {
      example: 'STARTED',
      description:
        'The current status type of your Research Session. Available options: STARTED, PAUSED, FINISHED, RESUMED.',
    },
    currentStatusDate: {
      description:
        'The current status date of your Research Session. It represents the current date that this research session current status type changed at.',
    },
    tags: {
      description:
        "The Tags of your Research Session. Input the respective Tags UUID/UUID's in the array.",
    },
    researchPhaseId: {
      description:
        'The id of the Research Phase that will be connected to the newly created Research Session. Input the respective Research Phase UUID as the value.',
    },
    userIdForArchivePurposes: {
      description:
        'The id of the User that will be connected to the newly created Research Session. Input the respective User UUID as the value. This is done for potential archive purposes.',
    },
  };
