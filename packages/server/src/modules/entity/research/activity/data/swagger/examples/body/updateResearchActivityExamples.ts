// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { updateResearchActivityMockData } from '@researchmanager/shared/mock';

type UpdateResearchActivityResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const updateResearchActivityExamples: UpdateResearchActivityResponsesExamplesType =
  {
    Reading: {
      summary: 'Updating Research Activity named Reading.',
      value: updateResearchActivityMockData[0],
    },
  };
