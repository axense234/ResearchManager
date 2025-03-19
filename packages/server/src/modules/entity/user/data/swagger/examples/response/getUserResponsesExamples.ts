// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Mock Data
import { getUserResponsesMockData } from '../../../mock';

type GetUserResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '400': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '401': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '404': ReturnObjectBuilderReturnObjectSwaggerWrapper;
};

export const getUserResponsesExamples: GetUserResponsesExamplesType = {
  '200': getUserResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': getUserResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': getUserResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': getUserResponsesMockData.find((mock) => mock.statusCode === 404),
};
