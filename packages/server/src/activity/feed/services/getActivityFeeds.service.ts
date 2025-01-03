// NestJS
import { Injectable } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/prisma/prisma.service';
// Types
import GetActivityFeedsQueryParams from '../types/GetActivityFeedsQueryParams';
// Redis
import { RedisService } from 'src/redis/services/redis.service';

@Injectable()
export class GetActivityFeedsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getActivityFeeds(
    queryParams: GetActivityFeedsQueryParams,
    url: string,
  ) {
    try {
      const foundActivityFeeds = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityFeeds = await this.prisma.activityFeed.findMany({
            where: {
              AND: [
                { userId: queryParams.userId },
                { researchActivityId: queryParams.researchActivityId },
              ],
              type: queryParams.type,
            },
          });
          return activityFeeds;
        },
      );

      if (foundActivityFeeds.length < 1) {
        return {
          nbHits: 0,
          message: `Could not find any Activity Feeds given the params.`,
          activityFeeds: [],
        };
      }

      return {
        nbHits: foundActivityFeeds.length,
        message: `Successfully found ${foundActivityFeeds.length} Activity Feeds given the params.`,
        activityFeeds: foundActivityFeeds,
      };
    } catch (error) {
      throw error;
    }
  }
}
