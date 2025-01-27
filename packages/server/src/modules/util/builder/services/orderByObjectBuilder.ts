// NestJS
import { Injectable } from '@nestjs/common';
// Types
import {
  EntityType,
  OrderByObjectBuilderOrderByObject,
  OrderByObjectBuilderParams,
  OrderByObjectBuilderReturnObject,
} from '../types';
// Data
import { researchActivitiesAllowedSortByKeysValues } from 'src/modules/entity/research/activity/data/options/allowedSortByKeysValues';
import { researchLogsAllowedSortByKeysValues } from 'src/modules/entity/research/log/data/options/allowedSortByKeysValues';
import { researchPhaseAllowedSortByKeysValues } from 'src/modules/entity/research/phase/data/options/allowedSortByKeysValues';

@Injectable()
export class OrderByObjectBuilderService {
  constructor() {}

  chooseAllowedSortByKeysValues(entityType: EntityType) {
    let allowedSortByKeysValues: string[] = [];
    switch (entityType) {
      case 'researchActivity':
        allowedSortByKeysValues = researchActivitiesAllowedSortByKeysValues;
        break;
      case 'researchPhase':
        allowedSortByKeysValues = researchPhaseAllowedSortByKeysValues;
      case 'researchLog':
        allowedSortByKeysValues = researchLogsAllowedSortByKeysValues;
      default:
        break;
    }
    return allowedSortByKeysValues;
  }

  buildOrderByObject({
    entityType,
    queryParams,
  }: OrderByObjectBuilderParams): OrderByObjectBuilderReturnObject {
    let additionalNotes: string = '';
    const { sortByKeys, sortByOrders } = queryParams;
    const orderByObject: OrderByObjectBuilderOrderByObject[] = [];
    const allowedSortByKeysValues =
      this.chooseAllowedSortByKeysValues(entityType);

    if (sortByKeys && sortByOrders) {
      const sortByKeysArray = sortByKeys.replace(/\s+/g, '').split(',');
      const sortByOrdersArray = sortByOrders.replace(/\s+/g, '').split(',');

      const filteredSortByKeysArray = sortByKeysArray.filter((sortByKey) =>
        allowedSortByKeysValues.includes(sortByKey),
      );

      const isSortByOrdersArrayValid = sortByOrdersArray.every((order) =>
        ['asc', 'desc'].includes(order),
      );

      if (sortByKeysArray.length !== sortByOrdersArray.length) {
        additionalNotes = `Given sortByKeys keys number does not match the sortByOrders orders number.`;
      } else if (filteredSortByKeysArray.length === 0) {
        additionalNotes = `Given sortByKeys are not valid.`;
      } else if (!isSortByOrdersArrayValid) {
        additionalNotes = `Given sortByOrders are not valid.`;
      } else {
        filteredSortByKeysArray.forEach((sortByKey, index) => {
          if (
            sortByKey === 'tags' ||
            sortByKey === 'researchPhases' ||
            sortByKey === 'researchSessions' ||
            sortByKey === 'researchLogs'
          ) {
            orderByObject.push({
              [sortByKey]: {
                _count: sortByOrdersArray[index] as 'asc' | 'desc',
              },
            });
          } else {
            orderByObject.push({
              [sortByKey]: sortByOrdersArray[index] as 'asc' | 'desc',
            });
          }
        });
      }
    } else if (sortByKeys && !sortByOrders) {
      additionalNotes = `No sortByOrders query parameter provided even tho sortByKeys were given`;
    } else if (!sortByKeys && sortByOrders) {
      additionalNotes = `No sortByKeys query parameter provided even tho sortByOrders were given`;
    }

    return { additionalNotes, orderByObject };
  }
}
