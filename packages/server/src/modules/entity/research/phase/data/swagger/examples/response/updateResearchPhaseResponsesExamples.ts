// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { updateResearchPhaseResponsesMockData } from '../../../mock';

type UpdateResearchPhaseResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const updateResearchPhaseResponsesExamples: UpdateResearchPhaseResponsesExamplesType =
  {
    '200': updateResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': updateResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': updateResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': updateResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
