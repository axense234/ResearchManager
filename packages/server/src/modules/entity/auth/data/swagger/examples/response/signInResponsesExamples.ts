// Types
import { User } from '@prisma/client';
// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Data
import { signInResponsesMockData } from '../../../mock';

type SignInResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

export const signInResponsesExamples: SignInResponsesExamplesType = {
  John: {
    summary: 'John',
    value: signInResponsesMockData.find((mock) =>
      (mock.payload as User).email.startsWith('john'),
    ),
  },
  Bob: {
    summary: 'Bob',
    value: signInResponsesMockData.find((mock) =>
      (mock.payload as User).email.startsWith('bob'),
    ),
  },
  Lucy: {
    summary: 'Lucy',
    value: signInResponsesMockData.find((mock) =>
      (mock.payload as User).email.startsWith('lucy'),
    ),
  },
};
