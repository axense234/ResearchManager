// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { createResearchSessionMockData } from '@researchmanager/shared/mock';

type CreateResearchSessionResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const createResearchSessionExamples: CreateResearchSessionResponsesExamplesType =
  {
    Log1: {
      summary: 'Research Session example for the Research Phase: Project1.',
      value: createResearchSessionMockData.find((mock) => mock.name == 'Log1'),
    },
    Polynomial_Equations_1: {
      summary: 'Research Session example for the Research Phase: Algebra.',
      value: createResearchSessionMockData.find(
        (mock) => mock.name == 'Polynomial Equations 1',
      ),
    },
    First_Part: {
      summary:
        'Research Session example for the Research Phase: Fahrenheit451.',
      value: createResearchSessionMockData.find(
        (mock) => mock.name == 'First Part',
      ),
    },
  };
