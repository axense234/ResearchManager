// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Dtos
import { UpdateActivityDayDto } from '../dto';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import {
  ActivityDayUpdateDataObject,
  ActivityDayUpdateObject,
  UpdateActivityDayQueryParams,
} from '../types';

@Injectable()
export class UpdateActivityDayService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async updateActivityDay(
    queryParams: UpdateActivityDayQueryParams,
    dto: UpdateActivityDayDto,
    activityDayId: string,
  ) {
    try {
      if (!activityDayId) {
        throw new BadRequestException('No Activity Day Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        dto,
        entityType: 'activityDay',
      })) as ActivityDayUpdateDataObject;

      const updateObject: ActivityDayUpdateObject = {
        where: { id: activityDayId },
        data: dataObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'activityDay',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        updateObject[chosenOptionType] = optionObject;
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

      const updatedActivityDay =
        await this.prisma.activityDay.update(updateObject);

      if (!updatedActivityDay) {
        throw new BadRequestException(
          'Could not update Activity Day with the given data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'activityDays',
        specifiers: [
          {
            label: 'activityFeedId',
            value: updatedActivityDay.activityFeedId,
          },
        ],
        type: 'modify',
      });

      return this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedActivityDay,
        message: `Successfully updated Activity Day!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
