// NestJS
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Prisma
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
// Dtos
import { UpdateActivityFeedDto } from '@researchmanager/shared/types';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import {
  ActivityFeedUpdateDataObject,
  ActivityFeedUpdateObject,
  UpdateActivityFeedQueryParams,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

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
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      if (!activityFeedId) {
        throw new BadRequestException('No Activity Feed Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        dto,
        entityType: 'activityFeed',
        actionType: 'UPDATE',
        options: {},
      })) as ActivityFeedUpdateDataObject;

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

      const updatedActivityFeed =
        await this.prisma.activityFeed.update(updateObject);

      if (!updatedActivityFeed) {
        throw new BadRequestException(
          'Could not update Activity Feed with the provided information.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'activityFeed',
        base: 'activityFeeds',
        actionType: 'UPDATE',
        specifiers: [
          {
            label: 'userId',
            possibleValues: [updatedActivityFeed.userId],
            ignoreIfFalse: true,
          },
          {
            label: 'researchActivityId',
            possibleValues: [updatedActivityFeed.researchActivityId],
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedActivityFeed,
        message: `Succesfully updated ${updatedActivityFeed.type} Activity Feed!`,
        additionalNotes,
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ForbiddenException(
          'Research Activity with the provided id already has an Activity Feed!.',
        );
      } else {
        throw error;
      }
    }
  }
}
