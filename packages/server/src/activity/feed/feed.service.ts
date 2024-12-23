// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Types
import GetActivityFeedsQueryParams from './types/GetActivityFeedsQueryParams';
// Dtos
import { CreateActivityFeedDto, UpdateActivityFeedDto } from './dto';
// Redis
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class ActivityFeedService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getActivityFeeds(
    queryParams: GetActivityFeedsQueryParams,
    url: string,
  ) {
    try {
      const foundActivityFeeds = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityFeeds = await this.prisma.activityFeed.findMany({
            where: {
              AND: [
                { userId: queryParams.userId },
                { researchActivityId: queryParams.researchActivityId },
              ],
              type: queryParams.type,
            },
          });
          return activityFeeds;
        },
      );

      if (foundActivityFeeds.length < 1) {
        return {
          nbHits: 0,
          message: `Could not find any Activity Feeds given the params.`,
          activityFeeds: [],
        };
      }

      return {
        nbHits: foundActivityFeeds.length,
        message: `Successfully found ${foundActivityFeeds.length} Activity Feeds given the params.`,
        activityFeeds: foundActivityFeeds,
      };
    } catch (error) {
      throw error;
    }
  }

  async getActivityFeed(activityFeedId: string, url: string) {
    try {
      if (!activityFeedId) {
        throw new BadRequestException('No Activity Feed Id provided.');
      }

      const foundActivityFeed = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityFeed = await this.prisma.activityFeed.findUnique({
            where: { id: activityFeedId },
          });
          return activityFeed;
        },
      );

      if (!foundActivityFeed) {
        throw new NotFoundException(
          'Could not find any Activity Feed matching the id.',
        );
      }

      return {
        message: `Successfully found ${foundActivityFeed.type} Activity Feed.`,
        activityFeed: foundActivityFeed,
      };
    } catch (error) {
      throw error;
    }
  }

  async createActivityFeed(dto: CreateActivityFeedDto) {
    try {
      const createdActivityFeed = await this.prisma.activityFeed.create({
        data: { ...dto },
      });

      if (!createdActivityFeed) {
        throw new BadRequestException(
          'Could not create Activity Feed with the data provided.',
        );
      }

      //   NOTE: create multiple conditions

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
        'activityFeeds',
        [
          {
            label: 'userId',
            value: createdActivityFeed.userId,
          },
          {
            label: 'researchActivityId',
            value: createdActivityFeed.researchActivityId,
          },
        ],
        'create',
      );

      return {
        message: `Successfully created Activity Feed of type ${createdActivityFeed.type}!`,
        activityFeed: createdActivityFeed,
      };
    } catch (error) {
      throw error;
    }
  }

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

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
        'activityFeeds',
        [
          {
            label: 'userId',
            value: updatedActivityFeed.userId,
          },
          {
            label: 'researchActivityId',
            value: updatedActivityFeed.researchActivityId,
          },
        ],
        'modify',
      );

      return {
        message: `Succesfully updated ${updatedActivityFeed.type} Activity Feed!`,
        activityFeed: updatedActivityFeed,
      };
    } catch (error) {
      throw error;
    }
  }

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

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
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
