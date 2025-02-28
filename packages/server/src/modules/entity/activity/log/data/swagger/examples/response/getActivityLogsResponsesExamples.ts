// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { getActivityLogsResponsesMockData } from '../../../mock';

type GetActivityLogsResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getActivityLogsResponsesExamples: GetActivityLogsResponsesExamplesType =
  {
    '200': getActivityLogsResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '401': getActivityLogsResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getActivityLogsResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
