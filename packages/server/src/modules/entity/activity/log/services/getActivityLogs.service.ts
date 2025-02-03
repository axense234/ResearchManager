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
  ActivityLogFindManyObject,
  GetActivityLogsQueryParams,
} from '../types';

@Injectable()
export class GetActivityLogsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getActivityLogs(
    queryParams: GetActivityLogsQueryParams,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const {
        searchByKey,
        searchByValue,
        sortByKeys,
        sortByOrders,
        includeValues,
        selectValues,
        chosenOptionType,
      } = queryParams;

      const additionalNotes: string[] = [];

      const findManyObject: ActivityLogFindManyObject = {};

      const { optionObject, additionalNotes: additionalOptionNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'activityLog',
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
          entityType: 'activityLog',
          queryParams: { searchByKey, searchByValue },
        });

      if (additionalQueryNotes) {
        additionalNotes.push(additionalQueryNotes);
      }

      findManyObject.where = queryObject;

      const { orderByObject, additionalNotes: additionalOrderByNotes } =
        this.objectBuilder.buildOrderByObject({
          entityType: 'activityLog',
          queryParams: { sortByKeys, sortByOrders },
        });

      if (additionalOrderByNotes) {
        additionalNotes.push(additionalOrderByNotes);
      }

      if (orderByObject.length > 0) {
        findManyObject.orderBy = orderByObject;
      }

      const foundActivityLogs = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityLogs =
            await this.prisma.activityLog.findMany(findManyObject);
          return activityLogs;
        },
      );

      if (foundActivityLogs.length < 1) {
        throw new NotFoundException(
          'Could not find any Research Activities given the input.',
        );
      }

      return this.objectBuilder.buildReturnObject({
        actionType: 'GET MULTIPLE',
        entity: foundActivityLogs,

        message: `Successfully found ${foundActivityLogs.length} Activity Logs!`,
        nbHits: foundActivityLogs.length,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
