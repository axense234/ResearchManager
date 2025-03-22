// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { updateResearchActivityResponsesMockData } from '../../../mock';

type UpdateResearchActivityResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const updateResearchActivityResponsesExamples: UpdateResearchActivityResponsesExamplesType =
  {
    '200': updateResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': updateResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': updateResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': updateResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
