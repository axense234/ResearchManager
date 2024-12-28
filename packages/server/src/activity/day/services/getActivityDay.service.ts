// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/index.service';

@Injectable()
export class GetActivityDayService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getActivityDay(activityDayId: string, url: string) {
    try {
      if (!activityDayId) {
        throw new BadRequestException('No Activity Day Id provided.');
      }

      const foundActivityDay =
        await this.redis.GetOrSetCacheService.getOrSetCache(url, async () => {
          const activityDay = await this.prisma.activityDay.findUnique({
            where: { id: activityDayId },
          });
          return activityDay;
        });

      if (!foundActivityDay) {
        throw new NotFoundException(
          'Could not find any Activity Day matching the provided information.',
        );
      }

      return {
        message: `Successfully found Activity Day!`,
        dayActivity: foundActivityDay,
      };
    } catch (error) {
      throw error;
    }
  }
}
