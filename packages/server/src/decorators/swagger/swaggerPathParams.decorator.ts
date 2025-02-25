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
import {
  deleteResearchActivityPathParamsApiOptions,
  getResearchActivityPathParamsApiParamOptions,
  updateResearchActivityPathParamsApiOptions,
} from 'src/modules/entity/research/activity/data';
import {
  deleteResearchPhasePathParamsApiOptions,
  getResearchPhasePathParamsApiOptions,
  updateResearchPhasePathParamsApiOptions,
} from 'src/modules/entity/research/phase/data';
import {
  deleteResearchLogPathParamsApiOptions,
  getResearchLogPathParamsApiOptions,
  updateResearchLogPathParamsApiOptions,
} from 'src/modules/entity/research/log/data';

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
    case 'researchActivity':
      switch (actionType) {
        case 'GET SINGLE':
          return applyDecorators(
            ApiParam(
              getResearchActivityPathParamsApiParamOptions[
                'researchActivityId'
              ],
            ),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiParam(
              updateResearchActivityPathParamsApiOptions['researchActivityId'],
            ),
          );
        case 'DELETE':
          return applyDecorators(
            ApiParam(
              deleteResearchActivityPathParamsApiOptions['researchActivityId'],
            ),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchPhase':
      switch (actionType) {
        case 'GET SINGLE': {
          return applyDecorators(
            ApiParam(getResearchPhasePathParamsApiOptions['researchPhaseId']),
          );
        }
        case 'UPDATE':
          return applyDecorators(
            ApiParam(
              updateResearchPhasePathParamsApiOptions['researchPhaseId'],
            ),
          );
        case 'DELETE':
          return applyDecorators(
            ApiParam(
              deleteResearchPhasePathParamsApiOptions['researchPhaseId'],
            ),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchLog':
      switch (actionType) {
        case 'GET SINGLE':
          return applyDecorators(
            ApiParam(getResearchLogPathParamsApiOptions['researchLogId']),
          );
        case 'UPDATE':
          return applyDecorators(
            ApiParam(updateResearchLogPathParamsApiOptions['researchLogId']),
          );
        case 'DELETE':
          return applyDecorators(
            ApiParam(deleteResearchLogPathParamsApiOptions['researchLogId']),
          );
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
