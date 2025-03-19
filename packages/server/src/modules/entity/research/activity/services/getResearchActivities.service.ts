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
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class GetResearchActivitiesService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getResearchActivities(
    queryParams: GetResearchActivitiesQueryParams,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
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

      const findManyObject: ResearchActivityFindManyObject = {};

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

      const { queryObject, additionalNotes: additionalQueryNotes } =
        this.objectBuilder.buildQueryObject({
          entityType: 'researchActivity',
          queryParams: { userId, searchByKey, searchByValue },
        });

      if (additionalQueryNotes) {
        additionalNotes.push(additionalQueryNotes);
      }

      findManyObject.where = queryObject;

      const { orderByObject, additionalNotes: additionalOrderByNotes } =
        this.objectBuilder.buildOrderByObject({
          entityType: 'researchActivity',
          queryParams: { sortByKeys, sortByOrders },
        });

      if (additionalOrderByNotes) {
        additionalNotes.push(additionalOrderByNotes);
      }

      if (orderByObject.length > 0) {
        findManyObject.orderBy = orderByObject;
      }

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

      return await this.objectBuilder.buildReturnObject({
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
