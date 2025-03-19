// Types
import { User } from '@prisma/client';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Data
import {
  signUpResponsesErrorMockData,
  signUpResponsesMockData,
} from '../../../mock';
// Swagger
import { ApiResponseExamples } from '@nestjs/swagger';

type SignUpResponsesExamplesType = {
  [key: string]: ApiResponseExamples;
};

type SignUpResponsesErrorExamplesType = {
  '400': ReturnObjectBuilderReturnObjectSwaggerWrapper;
  '403': ReturnObjectBuilderReturnObjectSwaggerWrapper;
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

export const signUpResponsesErrorExamples: SignUpResponsesErrorExamplesType = {
  '400': signUpResponsesErrorMockData.find((mock) => mock.statusCode === 400),
  '403': signUpResponsesErrorMockData.find((mock) => mock.statusCode === 403),
};
