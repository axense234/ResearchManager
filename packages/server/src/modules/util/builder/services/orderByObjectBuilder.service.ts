// NestJS
import { Injectable } from '@nestjs/common';
// Types
import {
  OrderByObjectBuilderOrderByObject,
  OrderByObjectBuilderParams,
  OrderByObjectBuilderReturnObject,
} from '../types';
import type { EntityTypePlural } from '@researchmanager/shared/types';
// Data
import { entityValues } from '../data';
// Util Service
import { ChooseAllowedBuilderValuesService } from './chooseAllowedBuilderValues.service';

@Injectable()
export class OrderByObjectBuilderService {
  constructor(
    private chooseAllowedBuilderValuesService: ChooseAllowedBuilderValuesService,
  ) {}

  buildOrderByObject({
    entityType,
    queryParams,
  }: OrderByObjectBuilderParams): OrderByObjectBuilderReturnObject {
    let additionalNotes: string = '';
    const { sortByKeys, sortByOrders } = queryParams;
    const orderByObject: OrderByObjectBuilderOrderByObject[] = [];
    const { allowedSortByKeysValues } =
      this.chooseAllowedBuilderValuesService.chooseAllowedBuilderValues(
        entityType,
      );

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
        console.log(orderByObject);
      }
    } else if (sortByKeys && !sortByOrders) {
      additionalNotes = `No sortByOrders query parameter provided even tho sortByKeys were given`;
    } else if (!sortByKeys && sortByOrders) {
      additionalNotes = `No sortByKeys query parameter provided even tho sortByOrders were given`;
    }

    return { additionalNotes, orderByObject };
  }
}
