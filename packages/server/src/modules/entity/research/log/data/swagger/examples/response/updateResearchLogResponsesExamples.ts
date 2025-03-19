// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { updateResearchLogResponsesMockData } from '../../../mock';

type UpdateResearchLogResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const updateResearchLogResponsesExamples: UpdateResearchLogResponsesExamplesType =
  {
    '200': updateResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': updateResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': updateResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': updateResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
