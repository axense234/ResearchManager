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
export class GetActivityLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getActivityLog(activityLogId: string, url: string) {
    try {
      if (!activityLogId) {
        throw new BadRequestException('Please provide an Activity Log Id!');
      }

      const foundActivityLog = await this.redis.getOrSetCache(url, async () => {
        const activityLog = await this.prisma.activityLog.findUnique({
          where: { id: activityLogId },
        });
        return activityLog;
      });

      if (!foundActivityLog) {
        throw new NotFoundException(
          'Could not find any Activity Log matching the given data.',
        );
      }

      return {
        message: `Successfully found Activity Log!`,
        activityLog: foundActivityLog,
      };
    } catch (error) {
      throw error;
    }
  }
}
