// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getResearchSessionsResponsesMockData } from '../../../mock';

type GetResearchSessionsResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getResearchSessionsResponsesExamples: GetResearchSessionsResponsesExamplesType =
  {
    '200': getResearchSessionsResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '401': getResearchSessionsResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getResearchSessionsResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
