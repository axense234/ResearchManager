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
export class DeleteActivityFeedService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async deleteActivityFeed(activityFeedId: string) {
    try {
      if (!activityFeedId) {
        throw new BadRequestException('No Activity Feed Id provided.');
      }

      const foundActivityFeedToBeDeleted =
        await this.prisma.activityFeed.findUnique({
          where: { id: activityFeedId },
        });

      if (!foundActivityFeedToBeDeleted) {
        throw new NotFoundException(
          'Could not find Activity Feed to delete with the matching data.',
        );
      }

      const deletedActivityFeed = await this.prisma.activityFeed.delete({
        where: { id: activityFeedId },
      });

      if (!deletedActivityFeed) {
        throw new BadRequestException(
          'Could not delete Activity Feed with the provided data.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'activityFeeds',
        [
          {
            label: 'userId',
            value: deletedActivityFeed.userId,
          },
          {
            label: 'researchActivityId',
            value: deletedActivityFeed.researchActivityId,
          },
        ],
        'modify',
      );

      return {
        message: `Successfully deleted ${deletedActivityFeed.type} Activity Feed!`,
        activityFeed: deletedActivityFeed,
      };
    } catch (error) {
      throw error;
    }
  }
}
