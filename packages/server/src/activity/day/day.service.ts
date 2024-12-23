// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Dtos
import { CreateActivityDayDto, UpdateActivityDayDto } from './dto/day.dto';
// Redis
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class ActivityDayService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getActivityDays(activityFeedId: string, url: string) {
    try {
      const foundActivityDays = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityDays = await this.prisma.activityDay.findMany({
            where: { AND: [{ activityFeedId }] },
          });
          return activityDays;
        },
      );

      if (foundActivityDays.length < 1) {
        return {
          nbHits: 0,
          message: 'Could not find any Activity Days given the data.',
          dayActivities: [],
        };
      }

      return {
        nbHits: foundActivityDays.length,
        message: `Successfully found ${foundActivityDays.length} Activity Days given the data`,
        dayActivities: foundActivityDays,
      };
    } catch (error) {
      throw error;
    }
  }

  async getActivityDay(activityDayId: string, url: string) {
    try {
      if (!activityDayId) {
        throw new BadRequestException('No Activity Day Id provided.');
      }

      const foundActivityDay = await this.redis.getOrSetCache(url, async () => {
        const activityDay = await this.prisma.activityDay.findUnique({
          where: { id: activityDayId },
        });
        return activityDay;
      });

      if (!foundActivityDay) {
        throw new NotFoundException(
          'Could not find any Activity Day matching the provided information.',
        );
      }

      return {
        message: `Successfully found Activity Day!`,
        dayActivity: foundActivityDay,
      };
    } catch (error) {
      throw error;
    }
  }

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

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
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

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
        'activityDays',
        [
          {
            label: 'activityFeedId',
            value: updatedActivityDay.activityFeedId,
          },
        ],
        'modify',
      );

      return {
        message: `Successfully updated Activity Day!`,
        dayActivity: updatedActivityDay,
      };
    } catch (error) {
      throw error;
    }
  }

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

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
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
