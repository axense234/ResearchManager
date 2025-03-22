// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data <3
import { createActivityDayResponsesMockData } from '../../../mock';

type CreateActivityDayResponsesExamplesType = {
  '201': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
};

export const createActivityDayResponsesExamples: CreateActivityDayResponsesExamplesType =
  {
    '201': createActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 201,
    ),
    '400': createActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': createActivityDayResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
  };
