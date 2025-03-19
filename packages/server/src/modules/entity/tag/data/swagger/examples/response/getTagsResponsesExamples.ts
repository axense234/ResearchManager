// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getTagsResponsesMockData } from '../../../mock';

type GetTagsResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getTagsResponsesExamples: GetTagsResponsesExamplesType = {
  '200': getTagsResponsesMockData.find((mock) => mock.statusCode === 200),
  '401': getTagsResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': getTagsResponsesMockData.find((mock) => mock.statusCode === 404),
};
