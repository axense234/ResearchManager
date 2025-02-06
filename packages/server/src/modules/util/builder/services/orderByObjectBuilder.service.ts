// NestJS
import { Injectable } from '@nestjs/common';
// Types
import {
  EntityType,
  EntityTypePlural,
  OrderByObjectBuilderOrderByObject,
  OrderByObjectBuilderParams,
  OrderByObjectBuilderReturnObject,
} from '../types';
// Data
import { researchActivitiesAllowedSortByKeysValues } from 'src/modules/entity/research/activity/data/options/allowedSortByKeysValues';
import { researchLogsAllowedSortByKeysValues } from 'src/modules/entity/research/log/data/options/allowedSortByKeysValues';
import { researchPhaseAllowedSortByKeysValues } from 'src/modules/entity/research/phase/data/options/allowedSortByKeysValues';
import { researchSessionAllowedSortByKeysValues } from 'src/modules/entity/research/session/data/options/allowedSortByKeysValues';
import { settingsAllowedSortByKeysValues } from 'src/modules/entity/settings/data/options/allowedSortByKeysValues';
import { activityFeedAllowedSortByKeysValues } from 'src/modules/entity/activity/feed/data/options/allowedSortByKeysValues';
import { activityDayAllowedSortByKeysValues } from 'src/modules/entity/activity/day/data/options/allowedSortByKeysValues';
import { activityLogAllowedSortByKeysValues } from 'src/modules/entity/activity/log/data/options/allowedSortByKeysValues';
import { tagAllowedSortByKeysValues } from 'src/modules/entity/tag/data/options/allowedSortByKeysValues';
import { entityValues } from '../data/entityValues';
import { userAllowedSortByKeysValues } from 'src/modules/entity/user/data/options/allowedSortByKeysValues';

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
        break;
      case 'researchSession':
        allowedSortByKeysValues = researchSessionAllowedSortByKeysValues;
        break;
      case 'researchLog':
        allowedSortByKeysValues = researchLogsAllowedSortByKeysValues;
        break;
      case 'settings':
        allowedSortByKeysValues = settingsAllowedSortByKeysValues;
        break;
      case 'tag':
        allowedSortByKeysValues = tagAllowedSortByKeysValues;
        break;
      case 'activityFeed':
        allowedSortByKeysValues = activityFeedAllowedSortByKeysValues;
        break;
      case 'activityDay':
        allowedSortByKeysValues = activityDayAllowedSortByKeysValues;
        break;
      case 'activityLog':
        allowedSortByKeysValues = activityLogAllowedSortByKeysValues;
        break;
      case 'user':
        allowedSortByKeysValues = userAllowedSortByKeysValues;
        break;
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
          if (entityValues.includes(sortByKey as EntityTypePlural)) {
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
