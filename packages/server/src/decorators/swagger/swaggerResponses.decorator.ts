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
} from 'src/modules/entity/auth/data';
import {
  deleteUserResponsesOptions,
  getProfileResponsesOptions,
  getUserResponsesOptions,
  getUsersResponsesOptions,
  updateUserResponsesOptions,
} from 'src/modules/entity/user/data';
import {
  createResearchActivityResponsesOptions,
  deleteResearchActivityResponsesOptions,
  getResearchActivitiesResponsesOptions,
  getResearchActivityResponsesOptions,
  updateResearchActivityResponsesOptions,
} from 'src/modules/entity/research/activity/data';

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
            ApiResponse(getUsersResponsesOptions['401']),
            ApiResponse(getUsersResponsesOptions['404']),
          );
        case 'GET PROFILE':
          return applyDecorators(
            ApiResponse(getProfileResponsesOptions['200']),
            ApiResponse(getProfileResponsesOptions['401']),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiResponse(getUserResponsesOptions['200']),
            ApiResponse(getUserResponsesOptions['400']),
            ApiResponse(getUserResponsesOptions['401']),
            ApiResponse(getUserResponsesOptions['404']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiResponse(updateUserResponsesOptions['200']),
            ApiResponse(updateUserResponsesOptions['400']),
            ApiResponse(updateUserResponsesOptions['401']),
            ApiResponse(updateUserResponsesOptions['404']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiResponse(deleteUserResponsesOptions['200']),
            ApiResponse(deleteUserResponsesOptions['400']),
            ApiResponse(deleteUserResponsesOptions['401']),
            ApiResponse(deleteUserResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchActivity':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiResponse(getResearchActivitiesResponsesOptions['200']),
            ApiResponse(getResearchActivitiesResponsesOptions['401']),
            ApiResponse(getResearchActivitiesResponsesOptions['404']),
          );
        case 'CREATE':
          return applyDecorators(
            ApiResponse(createResearchActivityResponsesOptions['201']),
            ApiResponse(createResearchActivityResponsesOptions['400']),
            ApiResponse(createResearchActivityResponsesOptions['401']),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiResponse(getResearchActivityResponsesOptions['200']),
            ApiResponse(getResearchActivityResponsesOptions['400']),
            ApiResponse(getResearchActivityResponsesOptions['401']),
            ApiResponse(getResearchActivityResponsesOptions['404']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiResponse(updateResearchActivityResponsesOptions['200']),
            ApiResponse(updateResearchActivityResponsesOptions['400']),
            ApiResponse(updateResearchActivityResponsesOptions['401']),
            ApiResponse(updateResearchActivityResponsesOptions['404']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiResponse(deleteResearchActivityResponsesOptions['200']),
            ApiResponse(deleteResearchActivityResponsesOptions['400']),
            ApiResponse(deleteResearchActivityResponsesOptions['401']),
            ApiResponse(deleteResearchActivityResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
