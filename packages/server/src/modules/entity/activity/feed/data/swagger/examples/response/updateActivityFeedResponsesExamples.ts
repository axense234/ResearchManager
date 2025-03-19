// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { updateActivityFeedResponsesMockData } from '../../../mock';

type UpdateActivityFeedResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '403': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const updateActivityFeedResponsesExamples: UpdateActivityFeedResponsesExamplesType =
  {
    '200': updateActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': updateActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': updateActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '403': updateActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 403,
    ),
    '404': updateActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
