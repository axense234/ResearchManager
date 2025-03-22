// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { createResearchActivityMockData } from '@researchmanager/shared/mock';

type CreateResearchActivityResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const createResearchActivityExamples: CreateResearchActivityResponsesExamplesType =
  {
    Coding: {
      summary: 'Research Activity example, focused on a Coding activity.',
      value: createResearchActivityMockData.find(
        (mock) => mock.name == 'Coding',
      ),
    },
    Math: {
      summary: 'Research Activity example, focused on a Math study activity.',
      value: createResearchActivityMockData.find((mock) => mock.name == 'Math'),
    },
    Reading: {
      summary: 'Research Activity example, focused on a Reading activity.',
      value: createResearchActivityMockData.find(
        (mock) => mock.name == 'Reading',
      ),
    },
  };
