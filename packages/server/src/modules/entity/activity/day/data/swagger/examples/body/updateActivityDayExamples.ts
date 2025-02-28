// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { updateActivityDayMockData } from '../../../mock';

type UpdateActivityDayResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const updateActivityDayExamples: UpdateActivityDayResponsesExamplesType =
  {
    Example: {
      summary: 'Updating Activity Day standard Example.',
      value: updateActivityDayMockData[0],
    },
  };
