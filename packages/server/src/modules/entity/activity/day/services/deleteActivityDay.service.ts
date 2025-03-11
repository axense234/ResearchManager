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
import { DeleteActivityDayQueryParams } from '../types/params/DeleteActivityDayQueryParams';
import { ActivityDayFindUniqueObject } from '../types';

@Injectable()
export class DeleteActivityDayService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async deleteActivityDay(
    queryParams: DeleteActivityDayQueryParams,
    activityDayId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!activityDayId) {
        throw new BadRequestException('No Activity Day Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const deleteObject: ActivityDayFindUniqueObject = {
        where: { id: activityDayId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'activityDay',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        deleteObject[chosenOptionType] = optionObject;
      }

      const foundActivityDayToBeDeleted =
        await this.prisma.activityDay.findUnique({
          where: { id: activityDayId },
        });

      if (!foundActivityDayToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Activity Day with the given data.',
        );
      }

      const deletedActivityDay =
        await this.prisma.activityDay.delete(deleteObject);

      if (!deletedActivityDay) {
        throw new BadRequestException(
          'Could not delete Activity Day with the provided information.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'activityDay',
        base: 'activityDays',
        actionType: 'DELETE',
        specifiers: [
          {
            label: 'activityFeedId',
            value: deletedActivityDay.activityFeedId,
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'DELETE',
        entity: deletedActivityDay,
        message: `Successfully deleted Activity Day!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
