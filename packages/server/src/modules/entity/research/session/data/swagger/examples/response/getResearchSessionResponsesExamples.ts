// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getResearchSessionResponsesMockData } from '../../../mock';

type GetResearchSessionResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getResearchSessionResponsesExamples: GetResearchSessionResponsesExamplesType =
  {
    '200': getResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': getResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': getResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
