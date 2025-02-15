// NestJS
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiParam } from '@nestjs/swagger';
// Types
import { EntityType, ActionType } from 'src/modules/util/builder/types';
// Data
import {
  deleteUserPathParamsApiParamOptions,
  getUserPathParamsApiParamOptions,
  updateUserPathParamsApiParamOptions,
} from 'src/modules/entity/user/data';

export const SwaggerPathParams = (
  entityType: EntityType,
  actionType: ActionType,
) => {
  switch (entityType) {
    case 'user':
      switch (actionType) {
        case 'GET SINGLE':
          return applyDecorators(
            ApiParam(getUserPathParamsApiParamOptions['uniqueIdentifier']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiParam(updateUserPathParamsApiParamOptions['uniqueIdentifier']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiParam(deleteUserPathParamsApiParamOptions['uniqueIdentifier']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
