// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getManySettingsResponsesMockData } from '../../../mock';

type GetManySettingsResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getManySettingsResponsesExamples: GetManySettingsResponsesExamplesType =
  {
    '200': getManySettingsResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '401': getManySettingsResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getManySettingsResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
