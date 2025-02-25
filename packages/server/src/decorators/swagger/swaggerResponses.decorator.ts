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
import {
  createResearchPhaseResponsesOptions,
  deleteResearchPhaseResponsesOptions,
  getResearchPhaseResponsesOptions,
  getResearchPhasesResponsesOptions,
  updateResearchPhaseResponsesOptions,
} from 'src/modules/entity/research/phase/data';
import {
  createResearchLogResponsesOptions,
  deleteResearchLogResponsesOptions,
  getResearchLogResponsesOptions,
  getResearchLogsResponsesOptions,
} from 'src/modules/entity/research/log/data';
import { updateResearchLogResponsesOptions } from 'src/modules/entity/research/log/data/swagger/options/route/response/updateResearchLogResponsesOptions';

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
    case 'researchPhase':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiResponse(getResearchPhasesResponsesOptions['200']),
            ApiResponse(getResearchPhasesResponsesOptions['401']),
            ApiResponse(getResearchPhasesResponsesOptions['404']),
          );
        case 'CREATE':
          return applyDecorators(
            ApiResponse(createResearchPhaseResponsesOptions['201']),
            ApiResponse(createResearchPhaseResponsesOptions['400']),
            ApiResponse(createResearchPhaseResponsesOptions['401']),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiResponse(getResearchPhaseResponsesOptions['200']),
            ApiResponse(getResearchPhaseResponsesOptions['400']),
            ApiResponse(getResearchPhaseResponsesOptions['401']),
            ApiResponse(getResearchPhaseResponsesOptions['404']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiResponse(updateResearchPhaseResponsesOptions['200']),
            ApiResponse(updateResearchPhaseResponsesOptions['400']),
            ApiResponse(updateResearchPhaseResponsesOptions['401']),
            ApiResponse(updateResearchPhaseResponsesOptions['404']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiResponse(deleteResearchPhaseResponsesOptions['200']),
            ApiResponse(deleteResearchPhaseResponsesOptions['400']),
            ApiResponse(deleteResearchPhaseResponsesOptions['401']),
            ApiResponse(deleteResearchPhaseResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchLog':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiResponse(getResearchLogsResponsesOptions['200']),
            ApiResponse(getResearchLogsResponsesOptions['401']),
            ApiResponse(getResearchLogsResponsesOptions['404']),
          );
        case 'CREATE':
          return applyDecorators(
            ApiResponse(createResearchLogResponsesOptions['201']),
            ApiResponse(createResearchLogResponsesOptions['400']),
            ApiResponse(createResearchLogResponsesOptions['401']),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiResponse(getResearchLogResponsesOptions['200']),
            ApiResponse(getResearchLogResponsesOptions['400']),
            ApiResponse(getResearchLogResponsesOptions['401']),
            ApiResponse(getResearchLogResponsesOptions['404']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiResponse(updateResearchLogResponsesOptions['200']),
            ApiResponse(updateResearchLogResponsesOptions['400']),
            ApiResponse(updateResearchLogResponsesOptions['401']),
            ApiResponse(updateResearchLogResponsesOptions['404']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiResponse(deleteResearchLogResponsesOptions['200']),
            ApiResponse(deleteResearchLogResponsesOptions['400']),
            ApiResponse(deleteResearchLogResponsesOptions['401']),
            ApiResponse(deleteResearchLogResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
