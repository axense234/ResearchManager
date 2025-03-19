// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { deleteResearchSessionResponsesMockData } from '../../../mock';

type DeleteResearchSessionResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const deleteResearchSessionResponsesExamples: DeleteResearchSessionResponsesExamplesType =
  {
    '200': deleteResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': deleteResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': deleteResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': deleteResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
