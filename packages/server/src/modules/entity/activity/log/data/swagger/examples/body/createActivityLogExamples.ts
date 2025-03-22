// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { createActivityLogMockData } from '@researchmanager/shared/mock';

type CreateActivityLogResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const createActivityLogExamples: CreateActivityLogResponsesExamplesType =
  {
    Create_Log: {
      summary: 'Activity Log example with a Create Subject.',
      value: createActivityLogMockData.find(
        (mock) => mock.subject === 'CREATE',
      ),
    },
    Update_Log: {
      summary: 'Activity Log example with an Update Subject.',
      value: createActivityLogMockData.find(
        (mock) => mock.subject === 'UPDATE',
      ),
    },
  };
