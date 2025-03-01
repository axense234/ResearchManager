// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { createSettingsMockData } from '../../../mock';

type CreateSettingsResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const createSettingsExamples: CreateSettingsResponsesExamplesType = {
  Example: {
    summary: 'Some random Example idk.',
    value: createSettingsMockData[0],
  },
};
