// NestJS
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiBody } from '@nestjs/swagger';
// Types
import { EntityType, ActionType } from 'src/modules/util/builder/types';
// Data
import {
  signInApiBodyOptions,
  signUpApiBodyOptions,
} from 'src/modules/entity/auth/data/swagger';

export const SwaggerBody = (entityType: EntityType, actionType: ActionType) => {
  switch (entityType) {
    case 'user':
      switch (actionType) {
        case 'CREATE':
          return applyDecorators(ApiBody(signUpApiBodyOptions));
        case 'SIGNIN':
          return applyDecorators(ApiBody(signInApiBodyOptions));
      }
      break;
  }
};
