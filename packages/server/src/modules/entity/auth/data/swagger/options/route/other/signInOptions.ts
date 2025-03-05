// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { SignInDto } from 'src/modules/entity/auth/dto';
// Data
import { signInExamples } from '../../../examples/body/signInExamples';

export const signInApiOperationOptions: ApiOperationOptions = {
  summary: 'Signs In the User with the provided Credentials.',
  description:
    'Route for Signing In the User with the provided credentials. Available query params: includeValues, selectValues, chosenOptionType. Available credentials examples: 3. Available return responses: 3(200, 401, 404). Available return responses: 3(201, 400, 403). NOTE: For Swagger JWT Auth, copy the received token and paste in into the Authorize(top right) value field.',
};

export const signInApiBodyOptions: ApiBodyOptions = {
  type: SignInDto,
  description:
    'The request body containing the credentials necessary for a User to Sign In.',
  examples: signInExamples,
};
