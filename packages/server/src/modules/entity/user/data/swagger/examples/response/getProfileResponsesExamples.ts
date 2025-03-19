// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Mock Data
import { getProfileResponsesMockData } from '../../../mock';

type GetProfileResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '401': ReturnObjectBuilderReturnObjectSwaggerWrapper;
};

export const getProfileResponsesExamples: GetProfileResponsesExamplesType = {
  '200': getProfileResponsesMockData.find((mock) => mock.statusCode === 200),
  '401': getProfileResponsesMockData.find((mock) => mock.statusCode === 401),
};
