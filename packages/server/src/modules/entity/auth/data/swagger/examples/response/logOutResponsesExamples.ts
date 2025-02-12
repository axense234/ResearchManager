// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import { logOutResponsesMockData } from '../../../mock/response/logOutResponsesMock';

type LogOutResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
};

export const logOutResponsesExamples: LogOutResponsesExamplesType = {
  '200': logOutResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': logOutResponsesMockData.find((mock) => mock.statusCode === 400),
};
