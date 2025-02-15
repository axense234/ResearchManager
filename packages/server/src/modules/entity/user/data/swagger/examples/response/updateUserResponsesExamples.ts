// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { updateUserResponsesMockData } from '../../../mock';

type UpdateUserResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const updateUserResponsesExamples: UpdateUserResponsesExamplesType = {
  '200': updateUserResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': updateUserResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': updateUserResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': updateUserResponsesMockData.find((mock) => mock.statusCode === 404),
};
