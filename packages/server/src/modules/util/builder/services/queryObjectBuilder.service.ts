// NestJS
import { Injectable } from '@nestjs/common';
// Types
import {
  EntityType,
  QueryObjectBuilderParams,
  QueryObjectBuilderQueryObject,
  QueryObjectBuilderReturnObject,
} from '../types';
// Data
import { researchActivitiesAllowedSearchByKeyValues } from 'src/modules/entity/research/activity/data/options/allowedSearchByKeyValues';
import { researchLogsAllowedSearchByKeyValues } from 'src/modules/entity/research/log/data/options/allowedSearchByKeyValues';
import { researchPhasesAllowedSearchByKeyValues } from 'src/modules/entity/research/phase/data/options/allowedSearchByKeyValues';
import { researchSessionsAllowedSearchByKeyValues } from 'src/modules/entity/research/session/data/options/allowedSearchByKeyValues';
import { settingsAllowedSearchByKeyValues } from 'src/modules/entity/settings/data/options/allowedSearchByKeyValues';
import { activityFeedsAllowedSearchByKeyValues } from 'src/modules/entity/activity/feed/data/options/allowedSearchByKeyValues';
import { activityDaysAllowedSearchByKeyValues } from 'src/modules/entity/activity/day/data/options/allowedSearchByKeyValues';

@Injectable()
export class QueryObjectBuilderService {
  constructor() {}

  chooseAllowedSearchByKeyValues(entityType: EntityType) {
    let allowedSearchByKeyValues: string[] = [];
    switch (entityType) {
      case 'researchActivity':
        allowedSearchByKeyValues = researchActivitiesAllowedSearchByKeyValues;
        break;
      case 'researchPhase':
        allowedSearchByKeyValues = researchPhasesAllowedSearchByKeyValues;
        break;
      case 'researchSession':
        allowedSearchByKeyValues = researchSessionsAllowedSearchByKeyValues;
        break;
      case 'researchLog':
        allowedSearchByKeyValues = researchLogsAllowedSearchByKeyValues;
        break;
      case 'settings':
        allowedSearchByKeyValues = settingsAllowedSearchByKeyValues;
        break;
      case 'activityFeed':
        allowedSearchByKeyValues = activityFeedsAllowedSearchByKeyValues;
        break;
      case 'activityDay':
        allowedSearchByKeyValues = activityDaysAllowedSearchByKeyValues;
        break;
      default:
        break;
    }
    return allowedSearchByKeyValues;
  }

  buildQueryObject({
    entityType,
    queryParams,
  }: QueryObjectBuilderParams): QueryObjectBuilderReturnObject {
    let additionalNotes: string = '';
    const {
      searchByKey,
      searchByValue,
      userId,
      researchPhaseId,
      researchActivityId,
    } = queryParams;
    const allowedSearchByKeyValues =
      this.chooseAllowedSearchByKeyValues(entityType);
    const queryObject: QueryObjectBuilderQueryObject = {};

    if (userId) {
      queryObject.userId = userId;
    }

    if (researchPhaseId) {
      queryObject.researchPhaseId = researchPhaseId;
    }

    if (researchActivityId) {
      queryObject.researchActivityId = researchActivityId;
    }

    if (!searchByKey && searchByValue) {
      additionalNotes = `No searchByKey query parameter provided even tho searchByValue was given.`;
    } else if (searchByKey && !searchByValue) {
      additionalNotes = `No searchByValue query parameter provided even tho searchByKey was given.`;
    } else if (searchByKey && searchByValue) {
      if (allowedSearchByKeyValues.includes(searchByKey)) {
        queryObject[searchByKey] = { contains: searchByValue };
      } else {
        additionalNotes = `Invalid searchByKey given.`;
      }
    }

    return { additionalNotes, queryObject };
  }
}
