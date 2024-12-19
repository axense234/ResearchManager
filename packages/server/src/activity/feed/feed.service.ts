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
import { CreateActivityFeedDto, UpdateActivityFeedDto } from './dto';

@Injectable()
export class ActivityFeedService {
  constructor(private prisma: PrismaService) {}

  async getActivityFeeds(queryParams: GetActivityFeedsQueryParams) {
    try {
      const foundActivityFeeds = await this.prisma.activityFeed.findMany({
        where: {
          AND: [
            { userId: queryParams.userId },
            { researchActivityId: queryParams.researchActivityId },
          ],
          type: queryParams.type,
        },
      });

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

  async getActivityFeed(activityFeedId: string) {
    try {
      if (!activityFeedId) {
        throw new BadRequestException('No Activity Feed Id provided.');
      }

      const foundActivityFeed = await this.prisma.activityFeed.findUnique({
        where: { id: activityFeedId },
      });

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

      return {
        message: `Successfully deleted ${deletedActivityFeed.type} Activity Feed!`,
        activityFeed: deletedActivityFeed,
      };
    } catch (error) {
      throw error;
    }
  }
}
