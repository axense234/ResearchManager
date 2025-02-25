// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type UpdateResearchPhaseDtoOptionsType = {
  name: ApiPropertyOptions;
  backgroundColorOrImageSrc: ApiPropertyOptions;
  researchActivityId: ApiPropertyOptions;
  userIdForArchivePurposes: ApiPropertyOptions;
  researchLogs: ApiPropertyOptions;
  researchSessions: ApiPropertyOptions;
  tags: ApiPropertyOptions;
};

export const updateResearchPhaseDtoOptions: UpdateResearchPhaseDtoOptionsType =
  {
    name: {
      example: 'Project1, 2, 3',
      description: 'The name of the Research Phase you want to update.',
    },
    backgroundColorOrImageSrc: {
      example:
        'https://res.cloudinary.com/birthdayreminder/image/upload/v1688815596/Highschool%20Site%20App/library_cgocde.jpg',
      description:
        'The src of the background image or the color of your Research Phase.',
    },
    researchActivityId: {
      description:
        'The id of the Research Activity that will be connected to the newly updated Research Phase. Input the respective Research Activity UUID as the value.',
    },
    userIdForArchivePurposes: {
      description:
        'The id of the User that will be connected to the newly updated Research Phase. Input the respective User UUID as the value. This is done for potential archive purposes.',
    },
    tags: {
      description:
        "The Tags of your Research Phase. Input the respective Tags UUID/UUID's in the array.",
    },
    researchLogs: {
      description:
        "The Research Logs of your Research Phase. Input the respective Research Logs UUID/UUID's in the array.",
    },
    researchSessions: {
      description:
        "The Research Sessions of your Research Phase. Input the respective Research Sessions UUID/UUID's in the array.",
    },
  };
