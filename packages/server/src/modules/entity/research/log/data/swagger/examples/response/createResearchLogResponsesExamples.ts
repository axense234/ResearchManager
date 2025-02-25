// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { createResearchLogResponsesMockData } from '../../../mock';

type CreateResearchLogResponsesExamplesType = {
  '201': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
};

export const createResearchLogResponsesExamples: CreateResearchLogResponsesExamplesType =
  {
    '201': createResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 201,
    ),
    '400': createResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': createResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
  };
