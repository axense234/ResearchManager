// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { updateActivityFeedMockData } from '../../../mock';

type UpdateActivityFeedResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const updateActivityFeedExamples: UpdateActivityFeedResponsesExamplesType =
  {
    Example1: {
      summary: 'Updating Activity Feed of type RESEARCH_ACTIVITY.',
      value: updateActivityFeedMockData[0],
    },
  };
