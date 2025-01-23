// NestJS
import { Injectable, NotFoundException } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import {
  GetResearchActivitiesQueryParams,
  ResearchActivityFindManyObject,
  ResearchActivityOrderByObject,
  ResearchActivityQueryObject,
} from '../types';
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import { researchActivitiesAllowedSearchByKeyValues } from '../data/options/allowedSearchByKeyValues';
import { researchActivitiesAllowedSortByKeysValues } from '../data/options/allowedSortByKeysValues';

@Injectable()
export class GetResearchActivitiesService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getResearchActivities(
    queryParams: GetResearchActivitiesQueryParams,
    url?: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const {
        userId,
        searchByKey,
        searchByValue,
        sortByKeys,
        sortByOrders,
        includeValues,
        selectValues,
        chosenOptionType,
      } = queryParams;

      const additionalNotes: string[] = [];

      const queryObject: ResearchActivityQueryObject = {};
      const orderByObject: ResearchActivityOrderByObject[] = [];
      const findManyObject: ResearchActivityFindManyObject = {};

      // Include Object
      const { optionObject, additionalNotes: additionalOptionNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchActivity',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (additionalOptionNotes) {
        additionalNotes.push(additionalOptionNotes);
      }

      if (chosenOptionType && optionObject) {
        findManyObject[chosenOptionType] = optionObject;
      }

      // QUERY OBJECT

      if (userId) {
        queryObject.userId = userId;
      }

      if (!searchByKey && searchByValue) {
        const message = `No searchByKey query parameter provided even tho searchByValue was given.`;
        additionalNotes.push(message);
      } else if (searchByKey && !searchByValue) {
        const message = `No searchByValue query parameter provided even tho searchByKey was given.`;
        additionalNotes.push(message);
      } else if (searchByKey && searchByValue) {
        if (researchActivitiesAllowedSearchByKeyValues.includes(searchByKey)) {
          queryObject[searchByKey] = { contains: searchByValue };
        } else {
          const message = `Invalid searchByKey given.`;
          additionalNotes.push(message);
        }
      }

      findManyObject.where = queryObject;

      // ORDER BY OBJECT

      if (sortByKeys && sortByOrders) {
        const sortByKeysArray = sortByKeys.replace(/\s+/g, '').split(',');
        const sortByOrdersArray = sortByOrders.replace(/\s+/g, '').split(',');

        const filteredSortByKeysArray = sortByKeysArray.filter((sortByKey) =>
          researchActivitiesAllowedSortByKeysValues.includes(sortByKey),
        );

        const isSortByOrdersArrayValid = sortByOrdersArray.every((order) =>
          ['asc', 'desc'].includes(order),
        );

        if (sortByKeysArray.length !== sortByOrdersArray.length) {
          const message = `Given sortByKeys keys number does not match the sortByOrders orders number.`;
          additionalNotes.push(message);
        } else if (filteredSortByKeysArray.length === 0) {
          const message = `Given sortByKeys are not valid.`;
          additionalNotes.push(message);
        } else if (!isSortByOrdersArrayValid) {
          const message = `Given sortByOrders are not valid.`;
          additionalNotes.push(message);
        } else {
          filteredSortByKeysArray.forEach((sortByKey, index) => {
            if (sortByKey === 'tags' || sortByKey === 'researchPhases') {
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
        const message = `No sortByOrders query parameter provided even tho sortByKeys were given`;
        additionalNotes.push(message);
      } else if (!sortByKeys && sortByOrders) {
        const message = `No sortByKeys query parameter provided even tho sortByOrders were given`;
        additionalNotes.push(message);
      }

      findManyObject.orderBy = orderByObject;

      // INCLUDE/SELECT OBJECTS

      const foundResearchActivities = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchActivities =
            await this.prisma.researchActivity.findMany(findManyObject);
          return researchActivities;
        },
      );

      if (foundResearchActivities.length < 1) {
        throw new NotFoundException(
          'Could not find any Research Activities given the input.',
        );
      }

      return this.objectBuilder.buildReturnObject({
        actionType: 'GET MULTIPLE',
        entity: foundResearchActivities,
        message: `Successfully found ${foundResearchActivities.length} Research Activities given the input!`,
        nbHits: foundResearchActivities.length,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
