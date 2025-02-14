// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { getUsersResponsesMockData } from '../../../mock';

type GetUsersResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getUsersResponsesExamples: GetUsersResponsesExamplesType = {
  '200': getUsersResponsesMockData.find((mock) => mock.statusCode === 200),
  '401': getUsersResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': getUsersResponsesMockData.find((mock) => mock.statusCode === 404),
};
