// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getResearchActivityResponsesMockData } from '../../../mock';

type GetResearchActivityResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getResearchActivityResponsesExamples: GetResearchActivityResponsesExamplesType =
  {
    '200': getResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': getResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': getResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
