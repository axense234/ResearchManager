// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
import { User } from '@prisma/client';
// Data
import { signUpMockData } from '../body/signUpMock';

export const signUpResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: `Successfully created user John.`,
    payload: signUpMockData.find(
      (mock) => mock.username === 'John',
    ) as unknown as User,
    access_token: 'token',
    statusCode: 201,
  },
  {
    message: `Successfully created user Bob.`,
    payload: signUpMockData.find(
      (mock) => mock.username === 'Bob',
    ) as unknown as User,
    access_token: 'token',
    statusCode: 201,
  },
  {
    message: `Successfully created user Lucy.`,
    payload: signUpMockData.find(
      (mock) => mock.username === 'Lucy',
    ) as unknown as User,
    access_token: 'token',
    statusCode: 201,
  },
];

export const signUpResponsesErrorMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: ['password should not be empty', 'password must be a string'],
    error: 'Bad Request',
    statusCode: 400,
  },
  {
    message: 'Credentials taken.',
    error: 'Forbidden',
    statusCode: 403,
  },
];
