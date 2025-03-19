// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { updateActivityLogResponsesMockData } from '../../../mock';

type UpdateActivityLogResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const updateActivityLogResponsesExamples: UpdateActivityLogResponsesExamplesType =
  {
    '200': updateActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': updateActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': updateActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': updateActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
