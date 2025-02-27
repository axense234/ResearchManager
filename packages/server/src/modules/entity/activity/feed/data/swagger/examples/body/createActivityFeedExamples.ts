// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { createActivityFeedMockData } from '../../../mock';

type CreateActivityFeedResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const createActivityFeedExamples: CreateActivityFeedResponsesExamplesType =
  {
    Project1: {
      summary: 'Activity Feed example for a Research Activity.',
      value: createActivityFeedMockData.find(
        (mock) => mock.type == 'RESEARCH_ACTIVITY',
      ),
    },
    Algebra: {
      summary: 'Activity Feed example for an User.',
      value: createActivityFeedMockData.find((mock) => mock.type == 'USER'),
    },
  };
