// NestJS
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiOperation } from '@nestjs/swagger';
// Data
import {
  logOutApiOperationOptions,
  signInApiOperationOptions,
  signUpApiOperationOptions,
} from 'src/modules/entity/auth/data';
import {
  createResearchActivityApiOperationOptions,
  deleteResearchActivityApiOperationOptions,
  getResearchActivitiesApiOperationOptions,
  getResearchActivityApiOperationOptions,
  updateResearchActivityApiOperationOptions,
} from 'src/modules/entity/research/activity/data';
import {
  deleteUserApiOperationOptions,
  getProfileApiOperationOptions,
  getUserApiOperationOptions,
  getUsersApiOperationOptions,
  updateUserApiOperationOptions,
} from 'src/modules/entity/user/data';
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
        case 'UPDATE':
          return applyDecorators(ApiOperation(updateUserApiOperationOptions));
        case 'DELETE':
          return applyDecorators(ApiOperation(deleteUserApiOperationOptions));
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchActivity':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiOperation(getResearchActivitiesApiOperationOptions),
          );
        case 'CREATE':
          return applyDecorators(
            ApiOperation(createResearchActivityApiOperationOptions),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiOperation(getResearchActivityApiOperationOptions),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiOperation(updateResearchActivityApiOperationOptions),
          );
        case 'DELETE':
          return applyDecorators(
            ApiOperation(deleteResearchActivityApiOperationOptions),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
