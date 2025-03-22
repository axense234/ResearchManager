// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { deleteResearchLogResponsesMockData } from '../../../mock';

type DeleteResearchLogResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const deleteResearchLogResponsesExamples: DeleteResearchLogResponsesExamplesType =
  {
    '200': deleteResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': deleteResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': deleteResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': deleteResearchLogResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
