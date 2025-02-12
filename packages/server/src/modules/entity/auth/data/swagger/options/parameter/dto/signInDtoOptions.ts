// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

export type SignInDtoOptionsType = {
  password: ApiPropertyOptions;
  email: ApiPropertyOptions;
};

export const signInDtoOptions: SignInDtoOptionsType = {
  password: {
    example: 'john123',
    description:
      'The password of the user you sign in. Please DO NOT use the example one for reasons other than testing.',
  },
  email: {
    example: 'john123@gmail.com',
    description: 'The email of the user you want to sign into.',
  },
};
