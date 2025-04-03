// NestJS
import { Injectable } from '@nestjs/common';
// Types
import {
  QueryObjectBuilderParams,
  QueryObjectBuilderQueryObject,
  QueryObjectBuilderReturnObject,
} from '../types';
// Util
import { chooseAllowedBuilderValues } from 'src/util/func/chooseAllowedBuilderValues';

@Injectable()
export class QueryObjectBuilderService {
  constructor() {}

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
    const { allowedSearchByKeyValues } = chooseAllowedBuilderValues(entityType);
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
        queryObject[searchByKey] = {
          contains: searchByValue,
          mode: 'insensitive',
        };
      } else {
        additionalNotes = `Invalid searchByKey given.`;
      }
    }

    return { additionalNotes, queryObject };
  }
}
