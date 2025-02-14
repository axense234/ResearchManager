// NestJS
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiResponse } from '@nestjs/swagger';
// Types
import { ActionType, EntityType } from 'src/modules/util/builder/types';
// Data
import {
  logOutResponsesOptions,
  signInResponsesOptions,
  signUpResponsesOptions,
} from 'src/modules/entity/auth/data/swagger';
import { getUsersResponsesOptions } from 'src/modules/entity/user/data/swagger';

export const SwaggerResponses = (
  entityType: EntityType,
  actionType: ActionType,
) => {
  switch (entityType) {
    case 'user':
      switch (actionType) {
        case 'CREATE':
          return applyDecorators(
            ApiResponse(signUpResponsesOptions['201']),
            ApiResponse(signUpResponsesOptions['400']),
            ApiResponse(signUpResponsesOptions['403']),
          );
        case 'SIGNIN':
          return applyDecorators(
            ApiResponse(signInResponsesOptions['200']),
            ApiResponse(signInResponsesOptions['400']),
            ApiResponse(signInResponsesOptions['401']),
            ApiResponse(signInResponsesOptions['404']),
          );
        case 'LOGOUT':
          return applyDecorators(
            ApiResponse(logOutResponsesOptions['200']),
            ApiResponse(logOutResponsesOptions['400']),
          );
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiResponse(getUsersResponsesOptions['200']),
            ApiResponse(getUsersResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
