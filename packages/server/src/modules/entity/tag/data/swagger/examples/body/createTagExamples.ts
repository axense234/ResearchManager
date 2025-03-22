// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { createTagMockData } from '@researchmanager/shared/mock';

type CreateTagResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const createTagExamples: CreateTagResponsesExamplesType = {
  Goofy: {
    summary: 'Tag Example with the title: Goofy.',
    value: createTagMockData.find((mock) => mock.title === 'Goofy'),
  },
  Serious: {
    summary: 'Tag Example with the title: Serious.',
    value: createTagMockData.find((mock) => mock.title === 'Serious'),
  },
  Mischievious: {
    summary: 'Tag Example with the title: Mischievious.',
    value: createTagMockData.find((mock) => mock.title === 'Mischievious'),
  },
};
