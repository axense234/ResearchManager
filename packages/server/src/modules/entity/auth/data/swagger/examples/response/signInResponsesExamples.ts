// Types
import { User } from '@prisma/client';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';
// Data
import {
  signInResponsesErrorMockData,
  signInResponsesMockData,
} from '../../../mock';

type SignInResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

type SignInResponsesErrorExamplesType = {
  '400': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '401': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '404': ReturnObjectBuilderReturnObjectSwaggerWrapper;
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

export const signInResponsesErrorExamples: SignInResponsesErrorExamplesType = {
  '400': signInResponsesErrorMockData.find((mock) => mock.statusCode === 400),
  '401': signInResponsesErrorMockData.find((mock) => mock.statusCode === 401),
  '404': signInResponsesErrorMockData.find((mock) => mock.statusCode === 404),
};
