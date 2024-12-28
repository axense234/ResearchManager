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
export class DeleteActivityLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async deleteActivityLog(activityLogId: string) {
    try {
      if (!activityLogId) {
        throw new BadRequestException('No Activity Log Id provided.');
      }

      const foundActivityLogToBeDeleted =
        await this.prisma.activityLog.findUnique({
          where: { id: activityLogId },
        });

      if (!foundActivityLogToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Activity Log matching the given data.',
        );
      }

      const deletedActivityLog = await this.prisma.activityLog.delete({
        where: { id: activityLogId },
      });

      if (!deletedActivityLog) {
        throw new BadRequestException(
          'Could not delete Activity Log with the given data.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'activityLogs',
        [],
        'modify',
      );

      return {
        message: `Successfully deleted Activity Log!`,
        activityLog: deletedActivityLog,
      };
    } catch (error) {
      throw error;
    }
  }
}
