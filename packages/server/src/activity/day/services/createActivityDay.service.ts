// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/prisma/prisma.service';
// Dtos
import { CreateActivityDayDto } from '../dto';
// Redis
import { RedisService } from 'src/redis/services/index.service';

@Injectable()
export class CreateActivityDayService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async createActivityDay(dto: CreateActivityDayDto) {
    try {
      const createdActivityDay = await this.prisma.activityDay.create({
        data: { ...dto },
      });

      if (!createdActivityDay) {
        throw new BadRequestException(
          'Could not create Activity Day with the data provided.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'activityDays',
        [
          {
            label: 'activityFeedId',
            value: createdActivityDay.activityFeedId,
          },
        ],
        'create',
      );

      return {
        message: `Successfully created Activity Day!`,
        dayActivity: createdActivityDay,
      };
    } catch (error) {
      throw error;
    }
  }
}
