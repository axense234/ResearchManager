// NestJS
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiResponse } from '@nestjs/swagger';
// Data
import { signUpResponsesOptions } from '../options/route/response/signUpResponsesOptions';

export const SwaggerResponses = () => {
  return applyDecorators(
    ApiResponse(signUpResponsesOptions['201']),
    ApiResponse(signUpResponsesOptions['400']),
    ApiResponse(signUpResponsesOptions['403']),
  );
};
