// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Mock Data
import { updateUserResponsesMockData } from '../../../mock';

type UpdateUserResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '400': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '401': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '403': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '404': ReturnObjectBuilderReturnObjectSwaggerWrapper;
};

export const updateUserResponsesExamples: UpdateUserResponsesExamplesType = {
  '200': updateUserResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': updateUserResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': updateUserResponsesMockData.find((mock) => mock.statusCode === 401),
  '403': updateUserResponsesMockData.find((mock) => mock.statusCode === 403),
  '404': updateUserResponsesMockData.find((mock) => mock.statusCode === 404),
};
