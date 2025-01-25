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

@Injectable()
export class QueryObjectBuilderService {
  constructor() {}

  chooseAllowedSearchByKeyValues(entityType: EntityType) {
    let allowedSearchByKeyValues: string[] = [];
    switch (entityType) {
      case 'researchActivity':
        allowedSearchByKeyValues = researchActivitiesAllowedSearchByKeyValues;
        break;
      case 'researchLog':
        allowedSearchByKeyValues = researchLogsAllowedSearchByKeyValues;
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
    const { searchByKey, searchByValue, userId, researchPhaseId } = queryParams;
    const allowedSearchByKeyValues =
      this.chooseAllowedSearchByKeyValues(entityType);
    const queryObject: QueryObjectBuilderQueryObject = {};

    if (userId) {
      queryObject.userId = userId;
    }

    if (researchPhaseId) {
      queryObject.researchPhaseId = researchPhaseId;
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
