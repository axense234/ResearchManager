// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Dtos
import { CreateActivityDayDto } from '../dto';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  ActivityDayCreateDataObject,
  ActivityDayCreateObject,
  CreateActivityDayQueryParams,
} from '../types';

@Injectable()
export class CreateActivityDayService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async createActivityDay(
    queryParams: CreateActivityDayQueryParams,
    dto: CreateActivityDayDto,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        entityType: 'activityDay',
        dto,
        actionType: 'CREATE',
        options: {},
      })) as ActivityDayCreateDataObject;

      const createObject: ActivityDayCreateObject = {
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
        createObject[chosenOptionType] = optionObject;
      }

      const createdActivityDay =
        await this.prisma.activityDay.create(createObject);

      if (!createdActivityDay) {
        throw new BadRequestException(
          'Could not create Activity Day with the data provided.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'activityDays',
        specifiers: [
          {
            label: 'activityFeedId',
            value: createdActivityDay.activityFeedId,
          },
        ],
        type: 'create',
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        entity: createdActivityDay,
        message: `Successfully created Activity Day!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
