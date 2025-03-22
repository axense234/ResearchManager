// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { createActivityDayMockData } from '@researchmanager/shared/mock';

type CreateActivityDayResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const createActivityDayExamples: CreateActivityDayResponsesExamplesType =
  {
    Example: {
      summary: 'Activity Day standard Example.',
      value: createActivityDayMockData[0],
    },
  };
