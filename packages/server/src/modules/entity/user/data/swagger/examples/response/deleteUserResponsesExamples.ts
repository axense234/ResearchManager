// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Mock Data
import { deleteUserResponsesMockData } from '../../../mock';

type DeleteUserResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '400': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '401': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '404': ReturnObjectBuilderReturnObjectSwaggerWrapper;
};

export const deleteUserResponsesExamples: DeleteUserResponsesExamplesType = {
  '200': deleteUserResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': deleteUserResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': deleteUserResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': deleteUserResponsesMockData.find((mock) => mock.statusCode === 404),
};
