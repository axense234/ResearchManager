// Swagger
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { deleteResearchActivityResponsesMockData } from '../../../mock';

type DeleteResearchActivityResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const deleteResearchActivityResponsesExamples: DeleteResearchActivityResponsesExamplesType =
  {
    '200': deleteResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': deleteResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': deleteResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': deleteResearchActivityResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
