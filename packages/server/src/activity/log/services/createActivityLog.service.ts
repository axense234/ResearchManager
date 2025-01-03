// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/prisma/prisma.service';
// Dtos
import { CreateActivityLogDto } from '../dto';
// Redis
import { RedisService } from 'src/redis/services/redis.service';

@Injectable()
export class CreateActivityLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async createActivityLog(dto: CreateActivityLogDto) {
    try {
      const createdActivityLog = await this.prisma.activityLog.create({
        data: { ...dto },
      });

      if (!createdActivityLog) {
        throw new BadRequestException(
          'Could not create Activity Log with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'activityLogs',
        specifiers: [],
        type: 'create',
      });

      return {
        message: `Successfully created Activity Log!`,
        activityLog: createdActivityLog,
      };
    } catch (error) {
      throw error;
    }
  }
}
