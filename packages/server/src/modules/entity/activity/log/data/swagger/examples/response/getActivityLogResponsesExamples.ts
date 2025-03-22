// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getActivityLogResponsesMockData } from '../../../mock';

type GetActivityLogResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getActivityLogResponsesExamples: GetActivityLogResponsesExamplesType =
  {
    '200': getActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': getActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': getActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
