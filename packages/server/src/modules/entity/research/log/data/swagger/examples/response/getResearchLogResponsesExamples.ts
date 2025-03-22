// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getResearchLogResponsesMockData } from '../../../mock';

type GetResearchLogResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getResearchLogResponsesExamples: GetResearchLogResponsesExamplesType =
  {
    '200': getResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': getResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': getResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
