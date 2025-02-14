// NestJS
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiOperation } from '@nestjs/swagger';
// Data
import {
  logOutApiOperationOptions,
  signInApiOperationOptions,
  signUpApiOperationOptions,
} from 'src/modules/entity/auth/data/swagger';
import {
  getProfileApiOperationOptions,
  getUserApiOperationOptions,
  getUsersApiOperationOptions,
} from 'src/modules/entity/user/data/swagger';
// Types
import { EntityType, ActionType } from 'src/modules/util/builder/types';

export const SwaggerHead = (entityType: EntityType, actionType: ActionType) => {
  switch (entityType) {
    case 'user':
      switch (actionType) {
        case 'CREATE':
          return applyDecorators(ApiOperation(signUpApiOperationOptions));
        case 'SIGNIN':
          return applyDecorators(ApiOperation(signInApiOperationOptions));
        case 'LOGOUT':
          return applyDecorators(ApiOperation(logOutApiOperationOptions));
        case 'GET MULTIPLE':
          return applyDecorators(ApiOperation(getUsersApiOperationOptions));
        case 'GET PROFILE':
          return applyDecorators(ApiOperation(getProfileApiOperationOptions));
        case 'GET SINGLE':
          return applyDecorators(ApiOperation(getUserApiOperationOptions));
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
