// NestJS
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiOperation } from '@nestjs/swagger';
// Data
import {
  createActivityFeedApiOperationOptions,
  getActivityFeedApiOperationOptions,
  getActivityFeedsApiOperationOptions,
} from 'src/modules/entity/activity/feed/data';
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
  createResearchLogApiOperationOptions,
  deleteResearchLogApiOperationOptions,
  getResearchLogApiOperationOptions,
  getResearchLogsApiOperationOptions,
  updateResearchLogApiOperationOptions,
} from 'src/modules/entity/research/log/data';
import {
  createResearchPhaseApiOperationOptions,
  deleteResearchPhaseApiOperationOptions,
  getResearchPhaseApiOperationOptions,
  getResearchPhasesApiOperationOptions,
  updateResearchPhaseApiOperationOptions,
} from 'src/modules/entity/research/phase/data';
import {
  createResearchSessionApiOperationOptions,
  deleteResearchSessionApiOperationOptions,
  getResearchSessionApiOperationOptions,
  getResearchSessionsApiOperationOptions,
  updateResearchSessionApiOperationOptions,
} from 'src/modules/entity/research/session/data';
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
    case 'researchPhase':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiOperation(getResearchPhasesApiOperationOptions),
          );
        case 'CREATE':
          return applyDecorators(
            ApiOperation(createResearchPhaseApiOperationOptions),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiOperation(getResearchPhaseApiOperationOptions),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiOperation(updateResearchPhaseApiOperationOptions),
          );
        case 'DELETE':
          return applyDecorators(
            ApiOperation(deleteResearchPhaseApiOperationOptions),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchLog':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiOperation(getResearchLogsApiOperationOptions),
          );
        case 'CREATE':
          return applyDecorators(
            ApiOperation(createResearchLogApiOperationOptions),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiOperation(getResearchLogApiOperationOptions),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiOperation(updateResearchLogApiOperationOptions),
          );
        case 'DELETE':
          return applyDecorators(
            ApiOperation(deleteResearchLogApiOperationOptions),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchSession':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiOperation(getResearchSessionsApiOperationOptions),
          );
        case 'CREATE':
          return applyDecorators(
            ApiOperation(createResearchSessionApiOperationOptions),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiOperation(getResearchSessionApiOperationOptions),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiOperation(updateResearchSessionApiOperationOptions),
          );
        case 'DELETE':
          return applyDecorators(
            ApiOperation(deleteResearchSessionApiOperationOptions),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'activityFeed':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiOperation(getActivityFeedsApiOperationOptions),
          );
        case 'CREATE':
          return applyDecorators(
            ApiOperation(createActivityFeedApiOperationOptions),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiOperation(getActivityFeedApiOperationOptions),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
