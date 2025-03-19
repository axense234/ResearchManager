// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Mock
import { logOutResponsesMockData } from '../../../mock';

type LogOutResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '400': ReturnObjectBuilderReturnObjectSwaggerWrapper;
};

export const logOutResponsesExamples: LogOutResponsesExamplesType = {
  '200': logOutResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': logOutResponsesMockData.find((mock) => mock.statusCode === 400),
};
