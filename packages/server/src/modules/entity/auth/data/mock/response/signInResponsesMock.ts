// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import { User } from '@prisma/client';
// Data
import { signUpMockData } from '../body/signUpMock';

export const signInResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: `Successfully signed in user John.`,
    payload: signUpMockData.find((mock) =>
      mock.email.startsWith('john'),
    ) as unknown as User,
    access_token: 'token',
    statusCode: 200,
  },
  {
    message: `Successfully signed in user Bob.`,
    payload: signUpMockData.find((mock) =>
      mock.email.startsWith('bob'),
    ) as unknown as User,
    access_token: 'token',
    statusCode: 200,
  },
  {
    message: `Successfully signed in user Lucy.`,
    payload: signUpMockData.find((mock) =>
      mock.email.startsWith('lucy'),
    ) as unknown as User,
    access_token: 'token',
    statusCode: 200,
  },
];
