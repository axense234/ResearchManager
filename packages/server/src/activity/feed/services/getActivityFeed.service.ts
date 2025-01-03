// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';

@Injectable()
export class GetActivityFeedService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getActivityFeed(activityFeedId: string, url: string) {
    try {
      if (!activityFeedId) {
        throw new BadRequestException('No Activity Feed Id provided.');
      }

      const foundActivityFeed = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityFeed = await this.prisma.activityFeed.findUnique({
            where: { id: activityFeedId },
          });
          return activityFeed;
        },
      );

      if (!foundActivityFeed) {
        throw new NotFoundException(
          'Could not find any Activity Feed matching the id.',
        );
      }

      return {
        message: `Successfully found ${foundActivityFeed.type} Activity Feed.`,
        activityFeed: foundActivityFeed,
      };
    } catch (error) {
      throw error;
    }
  }
}
