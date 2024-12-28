// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/prisma/prisma.service';
// Dtos
import { UpdateActivityLogDto } from '../dto';
// Redis
import { RedisService } from 'src/redis/services/index.service';

@Injectable()
export class UpdateActivityLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async updateActivityLog(dto: UpdateActivityLogDto, activityLogId: string) {
    try {
      if (!activityLogId) {
        throw new BadRequestException('No Activity Log Id provided.');
      }

      const foundActivityLogToUpdated =
        await this.prisma.activityLog.findUnique({
          where: { id: activityLogId },
        });

      if (!foundActivityLogToUpdated) {
        throw new NotFoundException(
          'Could not find any Activity Log to be updated with the provided information.',
        );
      }

      const updatedActivityLog = await this.prisma.activityLog.update({
        where: { id: activityLogId },
        data: { ...dto },
      });

      if (!updatedActivityLog) {
        throw new BadRequestException(
          'Could not update Activity Log with the provided information.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'activityLogs',
        [],
        'modify',
      );

      return {
        message: `Successfully updated Activity Log!`,
        activityLog: updatedActivityLog,
      };
    } catch (error) {
      throw error;
    }
  }
}
