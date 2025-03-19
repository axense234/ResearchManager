// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { updateResearchSessionResponsesMockData } from '../../../mock';

type UpdateResearchSessionResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const updateResearchSessionResponsesExamples: UpdateResearchSessionResponsesExamplesType =
  {
    '200': updateResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': updateResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': updateResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': updateResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
