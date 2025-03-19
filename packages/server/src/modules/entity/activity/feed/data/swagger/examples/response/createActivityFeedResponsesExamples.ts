// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { createActivityFeedResponsesMockData } from '../../../mock';

type CreateActivityFeedResponsesExamplesType = {
  '201': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '403': ReturnObjectBuilderReturnObject;
};

export const createActivityFeedResponsesExamples: CreateActivityFeedResponsesExamplesType =
  {
    '201': createActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 201,
    ),
    '400': createActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': createActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '403': createActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 403,
    ),
  };
