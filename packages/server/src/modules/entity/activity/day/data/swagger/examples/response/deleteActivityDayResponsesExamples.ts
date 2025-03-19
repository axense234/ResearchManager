// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { deleteActivityDayResponsesMockData } from '../../../mock';

type DeleteActivityDayResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const deleteActivityDayResponsesExamples: DeleteActivityDayResponsesExamplesType =
  {
    '200': deleteActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': deleteActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': deleteActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': deleteActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
