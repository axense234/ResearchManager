// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { createResearchLogMockData } from '@researchmanager/shared/mock';

type CreateResearchLogResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const createResearchLogExamples: CreateResearchLogResponsesExamplesType =
  {
    Log1: {
      summary: 'Research Log example for the Research Phase: Project1.',
      value: createResearchLogMockData.find((mock) => mock.name == 'Log1'),
    },
    Polynomial_Equations_1: {
      summary: 'Research Log example for the Research Phase: Algebra.',
      value: createResearchLogMockData.find(
        (mock) => mock.name == 'Polynomial Equations 1',
      ),
    },
    First_Part: {
      summary: 'Research Log example for the Research Phase: Fahrenheit451.',
      value: createResearchLogMockData.find(
        (mock) => mock.name == 'First Part',
      ),
    },
  };
