// NestJS
import { Injectable, NotFoundException } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  ActivityDayFindManyObject,
  GetActivityDaysQueryParams,
} from '../types';

@Injectable()
export class GetActivityDaysService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getActivityDays(
    queryParams: GetActivityDaysQueryParams,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const {
        activityFeedId,
        searchByKey,
        searchByValue,
        sortByKeys,
        sortByOrders,
        includeValues,
        selectValues,
        chosenOptionType,
      } = queryParams;

      const additionalNotes: string[] = [];

      const findManyObject: ActivityDayFindManyObject = {};

      const { optionObject, additionalNotes: additionalOptionNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'activityDay',
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

      const { queryObject, additionalNotes: additionalQueryNotes } =
        this.objectBuilder.buildQueryObject({
          entityType: 'activityDay',
          queryParams: { activityFeedId, searchByKey, searchByValue },
        });

      if (additionalQueryNotes) {
        additionalNotes.push(additionalQueryNotes);
      }

      findManyObject.where = queryObject;

      const { orderByObject, additionalNotes: additionalOrderByNotes } =
        this.objectBuilder.buildOrderByObject({
          entityType: 'activityDay',
          queryParams: { sortByKeys, sortByOrders },
        });

      if (additionalOrderByNotes) {
        additionalNotes.push(additionalOrderByNotes);
      }

      if (orderByObject.length > 0) {
        findManyObject.orderBy = orderByObject;
      }

      const foundActivityDays = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityDays =
            await this.prisma.activityDay.findMany(findManyObject);
          return activityDays;
        },
      );

      if (foundActivityDays.length < 1) {
        throw new NotFoundException(
          'Could not find any Activity Days given the input.',
        );
      }

      return this.objectBuilder.buildReturnObject({
        actionType: 'GET MULTIPLE',
        entity: foundActivityDays,
        message: `Successfully found ${foundActivityDays.length} Activity Days given the data`,
        nbHits: foundActivityDays.length,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
