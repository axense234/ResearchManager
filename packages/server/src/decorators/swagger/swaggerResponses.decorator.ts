// NestJS
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiResponse } from '@nestjs/swagger';
// Types
import { ActionType, EntityType } from '@researchmanager/shared/types';
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
  updateResearchLogResponsesOptions,
} from 'src/modules/entity/research/log/data';
import {
  createResearchSessionResponsesOptions,
  deleteResearchSessionResponsesOptions,
  getResearchSessionResponsesOptions,
  getResearchSessionsResponsesOptions,
  updateResearchSessionResponsesOptions,
} from 'src/modules/entity/research/session/data';
import {
  createActivityFeedResponsesOptions,
  deleteActivityFeedResponsesOptions,
  getActivityFeedResponsesOptions,
  getActivityFeedsResponsesOptions,
  updateActivityFeedResponsesOptions,
} from 'src/modules/entity/activity/feed/data';
import {
  createActivityDayResponsesOptions,
  deleteActivityDayResponsesOptions,
  getActivityDayResponsesOptions,
  getActivityDaysResponsesOptions,
  updateActivityDayResponsesOptions,
} from 'src/modules/entity/activity/day/data';
import {
  createActivityLogResponsesOptions,
  deleteActivityLogResponsesOptions,
  getActivityLogResponsesOptions,
  getActivityLogsResponsesOptions,
  updateActivityLogResponsesOptions,
} from 'src/modules/entity/activity/log/data';
import {
  createTagResponsesOptions,
  deleteTagResponsesOptions,
  getTagResponsesOptions,
  getTagsResponsesOptions,
  updateTagResponsesOptions,
} from 'src/modules/entity/tag/data';
import {
  createSettingsResponsesOptions,
  deleteSettingsResponsesOptions,
  getManySettingsResponsesOptions,
  getSettingsResponsesOptions,
  updateSettingsResponsesOptions,
} from 'src/modules/entity/settings/data';

export const SwaggerResponses = (
  entityType: EntityType | 'health',
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
    case 'researchSession':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiResponse(getResearchSessionsResponsesOptions['200']),
            ApiResponse(getResearchSessionsResponsesOptions['401']),
            ApiResponse(getResearchSessionsResponsesOptions['404']),
          );
        case 'CREATE':
          return applyDecorators(
            ApiResponse(createResearchSessionResponsesOptions['201']),
            ApiResponse(createResearchSessionResponsesOptions['400']),
            ApiResponse(createResearchSessionResponsesOptions['401']),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiResponse(getResearchSessionResponsesOptions['200']),
            ApiResponse(getResearchSessionResponsesOptions['400']),
            ApiResponse(getResearchSessionResponsesOptions['401']),
            ApiResponse(getResearchSessionResponsesOptions['404']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiResponse(updateResearchSessionResponsesOptions['200']),
            ApiResponse(updateResearchSessionResponsesOptions['400']),
            ApiResponse(updateResearchSessionResponsesOptions['401']),
            ApiResponse(updateResearchSessionResponsesOptions['404']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiResponse(deleteResearchSessionResponsesOptions['200']),
            ApiResponse(deleteResearchSessionResponsesOptions['400']),
            ApiResponse(deleteResearchSessionResponsesOptions['401']),
            ApiResponse(deleteResearchSessionResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'activityFeed':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiResponse(getActivityFeedsResponsesOptions['200']),
            ApiResponse(getActivityFeedsResponsesOptions['401']),
            ApiResponse(getActivityFeedsResponsesOptions['404']),
          );
        case 'CREATE':
          return applyDecorators(
            ApiResponse(createActivityFeedResponsesOptions['201']),
            ApiResponse(createActivityFeedResponsesOptions['400']),
            ApiResponse(createActivityFeedResponsesOptions['401']),
            ApiResponse(createActivityFeedResponsesOptions['403']),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiResponse(getActivityFeedResponsesOptions['200']),
            ApiResponse(getActivityFeedResponsesOptions['400']),
            ApiResponse(getActivityFeedResponsesOptions['401']),
            ApiResponse(getActivityFeedResponsesOptions['404']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiResponse(updateActivityFeedResponsesOptions['200']),
            ApiResponse(updateActivityFeedResponsesOptions['400']),
            ApiResponse(updateActivityFeedResponsesOptions['401']),
            ApiResponse(updateActivityFeedResponsesOptions['403']),
            ApiResponse(updateActivityFeedResponsesOptions['404']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiResponse(deleteActivityFeedResponsesOptions['200']),
            ApiResponse(deleteActivityFeedResponsesOptions['400']),
            ApiResponse(deleteActivityFeedResponsesOptions['401']),
            ApiResponse(deleteActivityFeedResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'activityDay':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiResponse(getActivityDaysResponsesOptions['200']),
            ApiResponse(getActivityDaysResponsesOptions['401']),
            ApiResponse(getActivityDaysResponsesOptions['404']),
          );
        case 'CREATE':
          return applyDecorators(
            ApiResponse(createActivityDayResponsesOptions['201']),
            ApiResponse(createActivityDayResponsesOptions['400']),
            ApiResponse(createActivityDayResponsesOptions['401']),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiResponse(getActivityDayResponsesOptions['200']),
            ApiResponse(getActivityDayResponsesOptions['400']),
            ApiResponse(getActivityDayResponsesOptions['401']),
            ApiResponse(getActivityDayResponsesOptions['404']),
          );
        case 'UPDATE': {
          return applyDecorators(
            ApiResponse(updateActivityDayResponsesOptions['200']),
            ApiResponse(updateActivityDayResponsesOptions['400']),
            ApiResponse(updateActivityDayResponsesOptions['401']),
            ApiResponse(updateActivityDayResponsesOptions['404']),
          );
        }
        case 'DELETE':
          return applyDecorators(
            ApiResponse(deleteActivityDayResponsesOptions['200']),
            ApiResponse(deleteActivityDayResponsesOptions['400']),
            ApiResponse(deleteActivityDayResponsesOptions['401']),
            ApiResponse(deleteActivityDayResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'activityLog':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiResponse(getActivityLogsResponsesOptions['200']),
            ApiResponse(getActivityLogsResponsesOptions['401']),
            ApiResponse(getActivityLogsResponsesOptions['404']),
          );
        case 'CREATE':
          return applyDecorators(
            ApiResponse(createActivityLogResponsesOptions['201']),
            ApiResponse(createActivityLogResponsesOptions['400']),
            ApiResponse(createActivityLogResponsesOptions['401']),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiResponse(getActivityLogResponsesOptions['200']),
            ApiResponse(getActivityLogResponsesOptions['400']),
            ApiResponse(getActivityLogResponsesOptions['401']),
            ApiResponse(getActivityLogResponsesOptions['404']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiResponse(updateActivityLogResponsesOptions['200']),
            ApiResponse(updateActivityLogResponsesOptions['400']),
            ApiResponse(updateActivityLogResponsesOptions['401']),
            ApiResponse(updateActivityLogResponsesOptions['404']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiResponse(deleteActivityLogResponsesOptions['200']),
            ApiResponse(deleteActivityLogResponsesOptions['400']),
            ApiResponse(deleteActivityLogResponsesOptions['401']),
            ApiResponse(deleteActivityLogResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'tag':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiResponse(getTagsResponsesOptions['200']),
            ApiResponse(getTagsResponsesOptions['401']),
            ApiResponse(getTagsResponsesOptions['404']),
          );
        case 'CREATE':
          return applyDecorators(
            ApiResponse(createTagResponsesOptions['201']),
            ApiResponse(createTagResponsesOptions['400']),
            ApiResponse(createTagResponsesOptions['401']),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiResponse(getTagResponsesOptions['200']),
            ApiResponse(getTagResponsesOptions['400']),
            ApiResponse(getTagResponsesOptions['401']),
            ApiResponse(getTagResponsesOptions['404']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiResponse(updateTagResponsesOptions['200']),
            ApiResponse(updateTagResponsesOptions['400']),
            ApiResponse(updateTagResponsesOptions['401']),
            ApiResponse(updateTagResponsesOptions['404']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiResponse(deleteTagResponsesOptions['200']),
            ApiResponse(deleteTagResponsesOptions['400']),
            ApiResponse(deleteTagResponsesOptions['401']),
            ApiResponse(deleteTagResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'settings':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiResponse(getManySettingsResponsesOptions['200']),
            ApiResponse(getManySettingsResponsesOptions['401']),
            ApiResponse(getManySettingsResponsesOptions['404']),
          );
        case 'CREATE':
          return applyDecorators(
            ApiResponse(createSettingsResponsesOptions['201']),
            ApiResponse(createSettingsResponsesOptions['400']),
            ApiResponse(createSettingsResponsesOptions['401']),
            ApiResponse(createSettingsResponsesOptions['403']),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiResponse(getSettingsResponsesOptions['200']),
            ApiResponse(getSettingsResponsesOptions['400']),
            ApiResponse(getSettingsResponsesOptions['401']),
            ApiResponse(getSettingsResponsesOptions['404']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiResponse(updateSettingsResponsesOptions['200']),
            ApiResponse(updateSettingsResponsesOptions['400']),
            ApiResponse(updateSettingsResponsesOptions['401']),
            ApiResponse(updateSettingsResponsesOptions['404']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiResponse(deleteSettingsResponsesOptions['200']),
            ApiResponse(deleteSettingsResponsesOptions['400']),
            ApiResponse(deleteSettingsResponsesOptions['401']),
            ApiResponse(deleteSettingsResponsesOptions['404']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'health':
      return applyDecorators(
        ApiResponse({
          status: 200,
          description: 'Server is Healthy.',
          example: 'Healthy.',
        }),
      );
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
