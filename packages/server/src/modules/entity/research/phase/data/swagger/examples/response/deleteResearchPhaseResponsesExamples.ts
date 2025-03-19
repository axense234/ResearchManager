// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { deleteResearchPhaseResponsesMockData } from '../../../mock';

type DeleteResearchPhaseResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const deleteResearchPhaseResponsesExamples: DeleteResearchPhaseResponsesExamplesType =
  {
    '200': deleteResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': deleteResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': deleteResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': deleteResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
