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
} from 'src/modules/entity/auth/data';
import { updateUserApiBodyOptions } from 'src/modules/entity/user/data';
import { createResearchActivityApiBodyOptions } from 'src/modules/entity/research/activity/data';

export const SwaggerBody = (entityType: EntityType, actionType: ActionType) => {
  switch (entityType) {
    case 'user':
      switch (actionType) {
        case 'CREATE':
          return applyDecorators(ApiBody(signUpApiBodyOptions));
        case 'SIGNIN':
          return applyDecorators(ApiBody(signInApiBodyOptions));
        case 'UPDATE':
          return applyDecorators(ApiBody(updateUserApiBodyOptions));
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchActivity':
      switch (actionType) {
        case 'CREATE':
          return applyDecorators(ApiBody(createResearchActivityApiBodyOptions));
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
