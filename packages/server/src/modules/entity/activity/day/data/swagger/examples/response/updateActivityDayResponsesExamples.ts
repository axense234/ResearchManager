// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { updateActivityDayResponsesMockData } from '../../../mock';

type UpdateActivityDayResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const updateActivityDayResponsesExamples: UpdateActivityDayResponsesExamplesType =
  {
    '200': updateActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': updateActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': updateActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': updateActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
