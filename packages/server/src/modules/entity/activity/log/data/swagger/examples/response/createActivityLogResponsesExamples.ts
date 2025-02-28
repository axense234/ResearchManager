// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { createActivityLogResponsesMockData } from '../../../mock';

type CreateActivityLogResponsesExamplesType = {
  '201': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
};

export const createActivityLogResponsesExamples: CreateActivityLogResponsesExamplesType =
  {
    '201': createActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 201,
    ),
    '400': createActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': createActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
  };
