// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { getUserResponsesMockData } from '../../../mock';

type GetUserResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getUserResponsesExamples: GetUserResponsesExamplesType = {
  '200': getUserResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': getUserResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': getUserResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': getUserResponsesMockData.find((mock) => mock.statusCode === 404),
};
