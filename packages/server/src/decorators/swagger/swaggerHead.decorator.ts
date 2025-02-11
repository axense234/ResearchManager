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
      }
      break;
  }
};
