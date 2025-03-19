// NestJS
import { Injectable, NotFoundException } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import {
  ActivityFeedFindManyObject,
  GetActivityFeedsQueryParams,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class GetActivityFeedsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getActivityFeeds(
    queryParams: GetActivityFeedsQueryParams,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const {
        userId,
        researchActivityId,
        searchByKey,
        searchByValue,
        sortByKeys,
        sortByOrders,
        includeValues,
        selectValues,
        chosenOptionType,
      } = queryParams;

      const additionalNotes: string[] = [];

      const findManyObject: ActivityFeedFindManyObject = {};

      const { optionObject, additionalNotes: additionalOptionNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'activityFeed',
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
          entityType: 'activityFeed',
          queryParams: {
            researchActivityId,
            userId,
            searchByKey,
            searchByValue,
          },
        });

      if (additionalQueryNotes) {
        additionalNotes.push(additionalQueryNotes);
      }

      findManyObject.where = queryObject;

      const { orderByObject, additionalNotes: additionalOrderByNotes } =
        this.objectBuilder.buildOrderByObject({
          entityType: 'activityFeed',
          queryParams: { sortByKeys, sortByOrders },
        });

      if (additionalOrderByNotes) {
        additionalNotes.push(additionalOrderByNotes);
      }

      if (orderByObject.length > 0) {
        findManyObject.orderBy = orderByObject;
      }

      const foundActivityFeeds = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityFeeds =
            await this.prisma.activityFeed.findMany(findManyObject);
          return activityFeeds;
        },
      );

      if (foundActivityFeeds.length < 1) {
        throw new NotFoundException(
          'Could not find any Activity Feeds given the input.',
        );
      }

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET MULTIPLE',
        entity: foundActivityFeeds,
        message: `Successfully found ${foundActivityFeeds.length} Activity Feeds given the params.`,
        nbHits: foundActivityFeeds.length,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
