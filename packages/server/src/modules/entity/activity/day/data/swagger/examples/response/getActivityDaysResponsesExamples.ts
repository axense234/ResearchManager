// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { getActivityDaysResponsesMockData } from '../../../mock';

type GetActivityDaysResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getActivityDaysResponsesExamples: GetActivityDaysResponsesExamplesType =
  {
    '200': getActivityDaysResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '401': getActivityDaysResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getActivityDaysResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
