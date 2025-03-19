// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getTagResponsesMockData } from '../../../mock';

type GetTagResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getTagResponsesExamples: GetTagResponsesExamplesType = {
  '200': getTagResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': getTagResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': getTagResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': getTagResponsesMockData.find((mock) => mock.statusCode === 404),
};
