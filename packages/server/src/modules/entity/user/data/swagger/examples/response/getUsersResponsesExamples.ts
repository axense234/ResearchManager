// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Mock Data
import { getUsersResponsesMockData } from '../../../mock';

type GetUsersResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '401': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '404': ReturnObjectBuilderReturnObjectSwaggerWrapper;
};

export const getUsersResponsesExamples: GetUsersResponsesExamplesType = {
  '200': getUsersResponsesMockData.find((mock) => mock.statusCode === 200),
  '401': getUsersResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': getUsersResponsesMockData.find((mock) => mock.statusCode === 404),
};
