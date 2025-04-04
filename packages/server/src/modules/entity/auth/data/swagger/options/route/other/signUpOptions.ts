// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { SignUpDtoSwaggerWrapper } from '../../../dto';
// Data
import { signUpExamples } from '../../../examples';

export const signUpApiOperationOptions: ApiOperationOptions = {
  summary: 'Creates an User then Signs In the respective User.',
  description:
    'Route for creating an User, then Signing In the respective User. Available query params: includeValues, selectValues, chosenOptionType, createSettings. Available user examples: 3. Available return responses: 3(201, 400, 403). NOTE: For Swagger JWT Auth, copy the received token and paste in into the Authorize(top right) value field.',
};

export const signUpApiBodyOptions: ApiBodyOptions = {
  type: SignUpDtoSwaggerWrapper,
  description:
    'The request body containing the properties of the User you want to Create.',
  examples: signUpExamples,
};
