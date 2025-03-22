// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getActivityFeedsResponsesMockData } from '../../../mock';

type GetActivityFeedsResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getActivityFeedsResponsesExamples: GetActivityFeedsResponsesExamplesType =
  {
    '200': getActivityFeedsResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '401': getActivityFeedsResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getActivityFeedsResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
