// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
import { User } from '@prisma/client';
// Data
import { signUpMockData } from '@researchmanager/shared/mock';

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

export const signInResponsesErrorMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: ['password should not be empty', 'password must be a string'],
    error: 'Bad Request',
    statusCode: 400,
  },
  {
    message: 'Passwords do not match.',
    error: 'Unauthorized',
    statusCode: 401,
  },
  {
    message: 'Could not find an user with such an email.',
    error: 'Not Found',
    statusCode: 404,
  },
];
