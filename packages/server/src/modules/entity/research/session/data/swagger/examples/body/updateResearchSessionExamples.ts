// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { updateResearchSessionMockData } from '@researchmanager/shared/mock';

type UpdateResearchSessionResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const updateResearchSessionExamples: UpdateResearchSessionResponsesExamplesType =
  {
    Log1: {
      summary: 'Updating Research Session named Log1.',
      value: updateResearchSessionMockData[0],
    },
  };
