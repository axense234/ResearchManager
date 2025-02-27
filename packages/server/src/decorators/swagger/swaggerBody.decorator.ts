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
import {
  createResearchActivityApiBodyOptions,
  updateResearchActivityApiBodyOptions,
} from 'src/modules/entity/research/activity/data';
import {
  createResearchPhaseApiBodyOptions,
  updateResearchPhaseApiBodyOptions,
} from 'src/modules/entity/research/phase/data';
import {
  createResearchLogApiBodyOptions,
  updateResearchLogApiBodyOptions,
} from 'src/modules/entity/research/log/data';
import {
  createResearchSessionApiBodyOptions,
  updateResearchSessionApiBodyOptions,
} from 'src/modules/entity/research/session/data';

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
        case 'UPDATE':
          return applyDecorators(ApiBody(updateResearchActivityApiBodyOptions));
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchPhase':
      switch (actionType) {
        case 'CREATE':
          return applyDecorators(ApiBody(createResearchPhaseApiBodyOptions));
        case 'UPDATE':
          return applyDecorators(ApiBody(updateResearchPhaseApiBodyOptions));
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchLog':
      switch (actionType) {
        case 'CREATE':
          return applyDecorators(ApiBody(createResearchLogApiBodyOptions));
        case 'UPDATE':
          return applyDecorators(ApiBody(updateResearchLogApiBodyOptions));
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    case 'researchSession':
      switch (actionType) {
        case 'CREATE':
          return applyDecorators(ApiBody(createResearchSessionApiBodyOptions));
        case 'UPDATE':
          return applyDecorators(ApiBody(updateResearchSessionApiBodyOptions));
        default:
          throw new Error(`Unsupported actionType: ${actionType}`);
      }
    default:
      throw new Error(`Unsupported entityType: ${entityType}`);
  }
};
