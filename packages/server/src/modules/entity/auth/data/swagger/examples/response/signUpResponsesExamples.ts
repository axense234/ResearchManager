// Types
import { User } from '@prisma/client';
// Data
import { signUpResponsesMockData } from '../../../mock';
// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';

type SignUpResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const signUpResponsesExamples: SignUpResponsesExamplesType = {
  John: {
    summary: 'John',
    value: signUpResponsesMockData.find(
      (mock) => (mock.payload as User).username === 'John',
    ),
  },
  Bob: {
    summary: 'Bob',
    value: signUpResponsesMockData.find(
      (mock) => (mock.payload as User).username === 'Bob',
    ),
  },
  Lucy: {
    summary: 'Lucy',
    value: signUpResponsesMockData.find(
      (mock) => (mock.payload as User).username === 'Lucy',
    ),
  },
};
