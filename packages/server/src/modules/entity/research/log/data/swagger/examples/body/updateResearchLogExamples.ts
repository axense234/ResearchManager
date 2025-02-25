// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { updateResearchLogMockData } from '../../../mock';

type UpdateResearchLogResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const updateResearchLogExamples: UpdateResearchLogResponsesExamplesType =
  {
    Log1: {
      summary: 'Updating Research Phase named Log1.',
      value: updateResearchLogMockData[0],
    },
  };
