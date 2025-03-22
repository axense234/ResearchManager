// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { createResearchActivityResponsesMockData } from '../../../mock';

type CreateResearchActivityResponsesExamplesType = {
  '201': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
};

export const createResearchActivityResponsesExamples: CreateResearchActivityResponsesExamplesType =
  {
    '201': createResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 201,
    ),
    '400': createResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': createResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
  };
