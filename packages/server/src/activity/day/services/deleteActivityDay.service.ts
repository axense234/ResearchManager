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
export class DeleteActivityDayService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async deleteActivityDay(dayActivityId: string) {
    try {
      if (!dayActivityId) {
        throw new BadRequestException('No Activity Day Id provided.');
      }

      const foundActivityDayToBeDeleted =
        await this.prisma.activityDay.findUnique({
          where: { id: dayActivityId },
        });

      if (!foundActivityDayToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Activity Day with the given data.',
        );
      }

      const deletedActivityDay = await this.prisma.activityDay.delete({
        where: { id: dayActivityId },
      });

      if (!deletedActivityDay) {
        throw new BadRequestException(
          'Could not delete Activity Day with the provided information.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'activityDays',
        [
          {
            label: 'activityFeedId',
            value: deletedActivityDay.activityFeedId,
          },
        ],
        'modify',
      );

      return {
        message: `Successfully deleted Activity Day!`,
        dayActivity: deletedActivityDay,
      };
    } catch (error) {
      throw error;
    }
  }
}
