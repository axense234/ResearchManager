// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/prisma/prisma.service';
// Dtos
import { UpdateActivityFeedDto } from '../dto';
// Redis
import { RedisService } from 'src/redis/services/redis.service';

@Injectable()
export class UpdateActivityFeedService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async updateActivityFeed(dto: UpdateActivityFeedDto, activityFeedId: string) {
    try {
      if (!activityFeedId) {
        throw new BadRequestException('No Activity Feed Id provided.');
      }

      const foundActivityFeedToBeUpdated =
        await this.prisma.activityFeed.findUnique({
          where: { id: activityFeedId },
        });

      if (!foundActivityFeedToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Activity Feed to update with the provided information.',
        );
      }

      const updatedActivityFeed = await this.prisma.activityFeed.update({
        where: { id: activityFeedId },
        data: { ...dto },
      });

      if (!updatedActivityFeed) {
        throw new BadRequestException(
          'Could not update Activity Feed with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'activityFeeds',
        specifiers: [
          {
            label: 'userId',
            value: updatedActivityFeed.userId,
          },
          {
            label: 'researchActivityId',
            value: updatedActivityFeed.researchActivityId,
          },
        ],
        type: 'modify',
      });

      return {
        message: `Succesfully updated ${updatedActivityFeed.type} Activity Feed!`,
        activityFeed: updatedActivityFeed,
      };
    } catch (error) {
      throw error;
    }
  }
}
