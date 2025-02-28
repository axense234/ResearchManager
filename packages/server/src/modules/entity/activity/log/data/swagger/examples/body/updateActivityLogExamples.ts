// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { updateActivityLogMockData } from '../../../mock';

type UpdateActivityLogResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const updateActivityLogExamples: UpdateActivityLogResponsesExamplesType =
  {
    Create_Example: {
      summary: 'Updating Activity Log with the subject CREATE.',
      value: updateActivityLogMockData[0],
    },
    Update_Example: {
      summary: 'Updating Activity Log with the subject UPDATE.',
      value: updateActivityLogMockData[1],
    },
  };
