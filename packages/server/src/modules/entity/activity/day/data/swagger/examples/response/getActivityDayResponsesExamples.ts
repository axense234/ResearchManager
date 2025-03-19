// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getActivityDayResponsesMockData } from '../../../mock';

type GetActivityDayResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getActivityDayResponsesExamples: GetActivityDayResponsesExamplesType =
  {
    '200': getActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': getActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': getActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
