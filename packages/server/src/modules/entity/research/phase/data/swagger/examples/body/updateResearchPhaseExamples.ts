// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { updateResearchPhaseMockData } from '@researchmanager/shared/mock';

type UpdateResearchPhaseResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const updateResearchPhaseExamples: UpdateResearchPhaseResponsesExamplesType =
  {
    Project1: {
      summary: 'Updating Research Phase named Project1.',
      value: updateResearchPhaseMockData[0],
    },
  };
