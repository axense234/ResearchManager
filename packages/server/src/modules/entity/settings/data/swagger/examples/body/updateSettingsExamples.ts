// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Mock Data
import { updateSettingsMockData } from '@researchmanager/shared/mock';

type UpdateSettingsResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const updateSettingsExamples: UpdateSettingsResponsesExamplesType = {
  Example: {
    summary: 'Update some random Example idk.',
    value: updateSettingsMockData[0],
  },
};
