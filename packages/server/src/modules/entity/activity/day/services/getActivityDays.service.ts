// NestJS
import { Injectable } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';

@Injectable()
export class GetActivityDaysService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getActivityDays(activityFeedId: string, url: string) {
    try {
      const foundActivityDays = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityDays = await this.prisma.activityDay.findMany({
            where: { AND: [{ activityFeedId }] },
          });
          return activityDays;
        },
      );

      if (foundActivityDays.length < 1) {
        return {
          nbHits: 0,
          message: 'Could not find any Activity Days given the data.',
          dayActivities: [],
        };
      }

      return {
        nbHits: foundActivityDays.length,
        message: `Successfully found ${foundActivityDays.length} Activity Days given the data`,
        dayActivities: foundActivityDays,
      };
    } catch (error) {
      throw error;
    }
  }
}
