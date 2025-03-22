// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { updateTagMockData } from '@researchmanager/shared/mock';

type UpdateTagResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const updateTagExamples: UpdateTagResponsesExamplesType = {
  Goofy: {
    summary: 'Tag Example with the title: Goofy.',
    value: updateTagMockData[0],
  },
  Serious: {
    summary: 'Tag Example with the title: Serious.',
    value: updateTagMockData[1],
  },
  Mischievious: {
    summary: 'Tag Example with the title: Mischievious.',
    value: updateTagMockData[2],
  },
};
