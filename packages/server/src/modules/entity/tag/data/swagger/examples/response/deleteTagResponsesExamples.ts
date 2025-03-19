// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { deleteTagResponsesMockData } from '../../../mock';

type DeleteTagResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const deleteTagResponsesExamples: DeleteTagResponsesExamplesType = {
  '200': deleteTagResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': deleteTagResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': deleteTagResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': deleteTagResponsesMockData.find((mock) => mock.statusCode === 404),
};
