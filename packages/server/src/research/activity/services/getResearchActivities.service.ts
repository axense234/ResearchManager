// NestJS
import { Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';
// Types
import GetResearchActivitiesQueryParams from '../types/GetResearchActivitiesQueryParams';
import GetResearchActivitiesQueryObject from '../types/GetResearchActivitiesQueryCustomObject';

@Injectable()
export class GetResearchActivitiesService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getResearchActivities(
    queryParams: GetResearchActivitiesQueryParams,
    url?: string,
  ) {
    try {
      const { userId, searchByKey, searchByValue, sortByKey, sortByOrder } =
        queryParams;

      const queryObject: GetResearchActivitiesQueryObject = {};
      const orderByObject = {};

      if (userId) {
        queryObject.userId = userId;
      }

      if (searchByKey) {
        queryObject[searchByKey] = {
          contains: searchByValue,
        };
      }

      if (sortByKey) {
        orderByObject[sortByKey] = sortByOrder;
      }

      const foundResearchActivities = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchActivities =
            await this.prisma.researchActivity.findMany({
              where: queryObject,
              orderBy: orderByObject,
            });
          return researchActivities;
        },
      );

      if (foundResearchActivities.length < 1) {
        return {
          nbHits: 0,
          message: 'No Research Activities found given the input.',
          researchActivities: [],
        };
      }

      return {
        nbHits: foundResearchActivities.length,
        message: `Successfully found ${foundResearchActivities.length} Research Activities given the input!`,
        researchActivities: foundResearchActivities,
      };
    } catch (error) {
      throw error;
    }
  }
}
