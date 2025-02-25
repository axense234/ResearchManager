// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type UpdateResearchLogDtoOptionsType = {
  name: ApiPropertyOptions;
  backgroundColorOrImageSrc: ApiPropertyOptions;
  researchPoints: ApiPropertyOptions;
  content: ApiPropertyOptions;
  imagesSrc: ApiPropertyOptions;
  tags: ApiPropertyOptions;
  userIdForArchivePurposes: ApiPropertyOptions;
  researchPhaseId: ApiPropertyOptions;
};

export const updateResearchLogDtoOptions: UpdateResearchLogDtoOptionsType = {
  name: {
    example: 'Log1',
    description: 'The name of the Research Log you want to update.',
  },
  backgroundColorOrImageSrc: {
    example:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1688815596/Highschool%20Site%20App/library_cgocde.jpg',
    description:
      'The src of the background image or the color of your Research Log.',
  },
  researchPoints: {
    example: 115,
    description:
      'The research points of your Research Log. They represent the length of the research session in minutes.',
  },
  content: {
    example: "Suddenly, one day, a horse walked into the village's brewery.",
    description:
      'The content of your Research Log. Should be descriptive enough to explain in detail the research session.',
  },
  imagesSrc: {
    example: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1716464249/pistachio_a7zad1.png',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1716464248/beef_antblp.png',
    ],
    description:
      'The array of images src of your Research Log. The images should be relevant to the research session.',
  },
  tags: {
    description:
      "The Tags of your Research Log. Input the respective Tags UUID/UUID's in the array.",
  },
  researchPhaseId: {
    description:
      'The id of the Research Phase that will be connected to the newly updated Research Log. Input the respective Research Phase UUID as the value.',
  },
  userIdForArchivePurposes: {
    description:
      'The id of the User that will be connected to the newly updated Research Log. Input the respective User UUID as the value. This is done for potential archive purposes.',
  },
};
