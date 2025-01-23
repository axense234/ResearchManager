// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Dtos
import { UpdateActivityDayDto } from '../dto';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';

@Injectable()
export class UpdateActivityDayService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async updateActivityDay(dto: UpdateActivityDayDto, activityDayId: string) {
    try {
      if (!activityDayId) {
        throw new BadRequestException('No Activity Day Id provided.');
      }

      const foundActivityDayToBeUpdated =
        await this.prisma.activityDay.findUnique({
          where: { id: activityDayId },
        });

      if (!foundActivityDayToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Activity Day to be updated with the given data.',
        );
      }

      const updatedActivityDay = await this.prisma.activityDay.update({
        where: { id: activityDayId },
        data: { ...dto },
      });

      if (!updatedActivityDay) {
        throw new BadRequestException(
          'Could not update Activity Day with the given data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'activityDays',
        specifiers: [
          {
            label: 'activityFeedId',
            value: updatedActivityDay.activityFeedId,
          },
        ],
        type: 'modify',
      });

      return {
        message: `Successfully updated Activity Day!`,
        dayActivity: updatedActivityDay,
      };
    } catch (error) {
      throw error;
    }
  }
}
