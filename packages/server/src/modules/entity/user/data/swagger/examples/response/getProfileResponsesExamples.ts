// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { getProfileResponsesMockData } from '../../../mock';

type GetProfileResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
};

export const getProfileResponsesExamples: GetProfileResponsesExamplesType = {
  '200': getProfileResponsesMockData.find((mock) => mock.statusCode === 200),
  '401': getProfileResponsesMockData.find((mock) => mock.statusCode === 401),
};
