// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';

export const logOutResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: 'Successfully logged out the User.',
    statusCode: 200,
  },
  {
    message: ['userId must be a UUID'],
    error: 'Bad Request',
    statusCode: 400,
  },
];
