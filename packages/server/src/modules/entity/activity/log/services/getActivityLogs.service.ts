// NestJS
import { Injectable } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';

@Injectable()
export class GetActivityLogsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getActivityLogs(url: string) {
    try {
      const foundActivityLogs = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityLogs = await this.prisma.activityLog.findMany({});
          return activityLogs;
        },
      );

      if (foundActivityLogs.length < 1) {
        return {
          nbHits: 0,
          message: 'Could not find any Activity Logs matching the given data.',
          activityLogs: [],
        };
      }

      return {
        nbHits: foundActivityLogs.length,
        message: `Successfully found ${foundActivityLogs.length} Activity Logs!`,
        activityLogs: foundActivityLogs,
      };
    } catch (error) {
      throw error;
    }
  }
}
