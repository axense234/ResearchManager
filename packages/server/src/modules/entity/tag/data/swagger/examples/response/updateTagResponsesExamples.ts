// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock DATA
import { updateTagResponsesMockData } from '../../../mock';

type UpdateTagResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const updateTagResponsesExamples: UpdateTagResponsesExamplesType = {
  '200': updateTagResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': updateTagResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': updateTagResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': updateTagResponsesMockData.find((mock) => mock.statusCode === 404),
};
