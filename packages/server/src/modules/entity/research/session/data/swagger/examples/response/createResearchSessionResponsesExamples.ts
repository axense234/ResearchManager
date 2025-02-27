// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { createResearchSessionResponsesMockData } from '../../../mock';

type CreateResearchSessionResponsesExamplesType = {
  '201': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
};

export const createResearchSessionResponsesExamples: CreateResearchSessionResponsesExamplesType =
  {
    '201': createResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 201,
    ),
    '400': createResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': createResearchSessionResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
  };
