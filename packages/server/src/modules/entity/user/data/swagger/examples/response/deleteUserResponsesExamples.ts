// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { deleteUserResponsesMockData } from '../../../mock';

type DeleteUserResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const deleteUserResponsesExamples: DeleteUserResponsesExamplesType = {
  '200': deleteUserResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': deleteUserResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': deleteUserResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': deleteUserResponsesMockData.find((mock) => mock.statusCode === 404),
};
