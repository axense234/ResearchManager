// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { createResearchPhaseMockData } from '@researchmanager/shared/mock';

type CreateResearchPhaseResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const createResearchPhaseExamples: CreateResearchPhaseResponsesExamplesType =
  {
    Project1: {
      summary: 'Research Phase example for the Research Activity: Coding.',
      value: createResearchPhaseMockData.find(
        (mock) => mock.name == 'Project1',
      ),
    },
    Algebra: {
      summary: 'Research Phase example for the Research Activity: Math.',
      value: createResearchPhaseMockData.find((mock) => mock.name == 'Algebra'),
    },
    Fahrenheit451: {
      summary: 'Research Phase example for the Research Activity: Reading.',
      value: createResearchPhaseMockData.find(
        (mock) => mock.name == 'Fahrenheit451',
      ),
    },
  };
