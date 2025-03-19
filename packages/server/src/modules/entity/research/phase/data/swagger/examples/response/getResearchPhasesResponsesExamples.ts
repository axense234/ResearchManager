// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getResearchPhasesResponsesMockData } from '../../../mock';

type GetResearchPhasesResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getResearchPhasesResponsesExamples: GetResearchPhasesResponsesExamplesType =
  {
    '200': getResearchPhasesResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '401': getResearchPhasesResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getResearchPhasesResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
