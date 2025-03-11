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
  DeleteActivityFeedQueryParams,
} from '../types';

@Injectable()
export class DeleteActivityFeedService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async deleteActivityFeed(
    queryParams: DeleteActivityFeedQueryParams,
    activityFeedId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!activityFeedId) {
        throw new BadRequestException('No Activity Feed Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const deleteObject: ActivityFeedFindUniqueObject = {
        where: { id: activityFeedId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'activityFeed',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        deleteObject[chosenOptionType] = optionObject;
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

      const deletedActivityFeed =
        await this.prisma.activityFeed.delete(deleteObject);

      if (!deletedActivityFeed) {
        throw new BadRequestException(
          'Could not delete Activity Feed with the provided data.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'activityFeed',
        base: 'activityFeeds',
        actionType: 'DELETE',
        specifiers: [
          {
            label: 'userId',
            value: deletedActivityFeed.userId,
            ignoreIfFalse: true,
          },
          {
            label: 'researchActivityId',
            value: deletedActivityFeed.researchActivityId,
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'DELETE',
        entity: deletedActivityFeed,
        message: `Successfully deleted ${deletedActivityFeed.type} Activity Feed!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
