// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Dtos
import { CreateActivityFeedDto } from '../dto';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';

@Injectable()
export class CreateActivityFeedService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

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
      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'activityFeeds',
        specifiers: [
          {
            label: 'userId',
            value: createdActivityFeed.userId,
          },
          {
            label: 'researchActivityId',
            value: createdActivityFeed.researchActivityId,
          },
        ],
        type: 'create',
      });

      return {
        message: `Successfully created Activity Feed of type ${createdActivityFeed.type}!`,
        activityFeed: createdActivityFeed,
      };
    } catch (error) {
      throw error;
    }
  }
}
