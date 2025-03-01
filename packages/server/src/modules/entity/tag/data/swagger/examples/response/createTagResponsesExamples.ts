// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { createTagResponsesMockData } from '../../../mock';

type CreateTagResponsesExamplesType = {
  '201': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
};

export const createTagResponsesExamples: CreateTagResponsesExamplesType = {
  '201': createTagResponsesMockData.find((mock) => mock.statusCode === 201),
  '400': createTagResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': createTagResponsesMockData.find((mock) => mock.statusCode === 401),
};
