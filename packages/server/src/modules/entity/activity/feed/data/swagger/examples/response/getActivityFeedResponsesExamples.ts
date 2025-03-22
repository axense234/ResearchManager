// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getActivityFeedResponsesMockData } from '../../../mock';

type GetActivityFeedResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getActivityFeedResponsesExamples: GetActivityFeedResponsesExamplesType =
  {
    '200': getActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': getActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': getActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
