// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Dtos
import { UpdateActivityFeedDto } from '../dto';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  ActivityFeedUpdateDataObject,
  ActivityFeedUpdateObject,
  UpdateActivityFeedQueryParams,
} from '../types';

@Injectable()
export class UpdateActivityFeedService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async updateActivityFeed(
    queryParams: UpdateActivityFeedQueryParams,
    dto: UpdateActivityFeedDto,
    activityFeedId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!activityFeedId) {
        throw new BadRequestException('No Activity Feed Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = this.objectBuilder.buildDataObject({
        dto,
        entityType: 'activityFeed',
      }) as ActivityFeedUpdateDataObject;

      const updateObject: ActivityFeedUpdateObject = {
        where: { id: activityFeedId },
        data: dataObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'activityFeed',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        updateObject[chosenOptionType] = optionObject;
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

      return this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedActivityFeed,
        message: `Succesfully updated ${updatedActivityFeed.type} Activity Feed!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
