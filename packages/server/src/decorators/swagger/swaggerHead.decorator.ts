// NestJS
import { applyDecorators } from '@nestjs/common';
// Swagger
import { ApiOperation } from '@nestjs/swagger';
// Data
import {
  createActivityDayApiOperationOptions,
  deleteActivityDayApiOperationOptions,
  getActivityDayApiOperationOptions,
  getActivityDaysApiOperationOptions,
  updateActivityDayApiOperationOptions,
} from 'src/modules/entity/activity/day/data';
import {
  createActivityFeedApiOperationOptions,
  deleteActivityFeedApiOperationOptions,
  getActivityFeedApiOperationOptions,
  getActivityFeedsApiOperationOptions,
  updateActivityFeedApiOperationOptions,
} from 'src/modules/entity/activity/feed/data';
import {
  createActivityLogApiOperationOptions,
  deleteActivityLogApiOperationOptions,
  getActivityLogApiOperationOptions,
  getActivityLogsApiOperationOptions,
  updateActivityLogApiOperationOptions,
} from 'src/modules/entity/activity/log/data';
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
  createSettingsApiOperationOptions,
  deleteSettingsApiOperationOptions,
  getManySettingsApiOperationOptions,
  getSettingsApiOperationOptions,
  updateSettingsApiOperationOptions,
} from 'src/modules/entity/settings/data';
import {
  createTagApiOperationOptions,
  deleteTagApiOperationOptions,
  getTagApiOperationOptions,
  getTagsApiOperationOptions,
  updateTagApiOperationOptions,
} from 'src/modules/entity/tag/data';
import {
  deleteUserApiOperationOptions,
  getProfileApiOperationOptions,
  getUserApiOperationOptions,
  getUsersApiOperationOptions,
  updateUserApiOperationOptions,
} from 'src/modules/entity/user/data';
// Types
import { EntityType, ActionType } from 'src/modules/util/builder/types';

export const SwaggerHead = (
  entityType: EntityType | 'health',
  actionType: ActionType,
) => {
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
        case 'UPDATE':
          return applyDecorators(
            ApiOperation(updateActivityFeedApiOperationOptions),
          );
        case 'DELETE':
          return applyDecorators(
            ApiOperation(deleteActivityFeedApiOperationOptions),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'activityDay':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiOperation(getActivityDaysApiOperationOptions),
          );
        case 'CREATE':
          return applyDecorators(
            ApiOperation(createActivityDayApiOperationOptions),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiOperation(getActivityDayApiOperationOptions),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiOperation(updateActivityDayApiOperationOptions),
          );
        case 'DELETE':
          return applyDecorators(
            ApiOperation(deleteActivityDayApiOperationOptions),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'activityLog':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiOperation(getActivityLogsApiOperationOptions),
          );
        case 'CREATE':
          return applyDecorators(
            ApiOperation(createActivityLogApiOperationOptions),
          );
        case 'GET SINGLE':
          return applyDecorators(
            ApiOperation(getActivityLogApiOperationOptions),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiOperation(updateActivityLogApiOperationOptions),
          );
        case 'DELETE':
          return applyDecorators(
            ApiOperation(deleteActivityLogApiOperationOptions),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'tag':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(ApiOperation(getTagsApiOperationOptions));
        case 'CREATE':
          return applyDecorators(ApiOperation(createTagApiOperationOptions));
        case 'GET SINGLE':
          return applyDecorators(ApiOperation(getTagApiOperationOptions));
        case 'UPDATE':
          return applyDecorators(ApiOperation(updateTagApiOperationOptions));
        case 'DELETE':
          return applyDecorators(ApiOperation(deleteTagApiOperationOptions));
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'settings':
      switch (actionType) {
        case 'GET MULTIPLE':
          return applyDecorators(
            ApiOperation(getManySettingsApiOperationOptions),
          );
        case 'CREATE':
          return applyDecorators(
            ApiOperation(createSettingsApiOperationOptions),
          );
        case 'GET SINGLE':
          return applyDecorators(ApiOperation(getSettingsApiOperationOptions));
        case 'UPDATE':
          return applyDecorators(
            ApiOperation(updateSettingsApiOperationOptions),
          );
        case 'DELETE':
          return applyDecorators(
            ApiOperation(deleteSettingsApiOperationOptions),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'health':
      return applyDecorators(
        ApiOperation({
          summary: 'Checks the server Health.',
          description:
            'Route for checking the server Health. Any response other than 200 it means the server is NOT healthy.',
        }),
      );
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
