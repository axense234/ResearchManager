// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  ActivityFeedFindUniqueObject,
  GetActivityFeedQueryParams,
} from '../types';

@Injectable()
export class GetActivityFeedService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getActivityFeed(
    queryParams: GetActivityFeedQueryParams,
    activityFeedId: string,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!activityFeedId) {
        throw new BadRequestException('No Activity Feed Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const findUniqueObject: ActivityFeedFindUniqueObject = {
        where: { id: activityFeedId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          chosenOptionType,
          entityType: 'activityFeed',
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        findUniqueObject[chosenOptionType] = optionObject;
      }

      const foundActivityFeed = await this.redis.getOrSetCache(
        url,
        async () => {
          const activityFeed =
            await this.prisma.activityFeed.findUnique(findUniqueObject);
          return activityFeed;
        },
      );

      if (!foundActivityFeed) {
        throw new NotFoundException(
          'Could not find any Activity Feed matching the id.',
        );
      }

      return this.objectBuilder.buildReturnObject({
        actionType: 'GET SINGLE',
        entity: foundActivityFeed,
        message: `Successfully found ${foundActivityFeed.type} Activity Feed.`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
