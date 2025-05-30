// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Dtos
import { CreateActivityDayDto } from '@researchmanager/shared/types';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import {
  ActivityDayCreateDataObject,
  ActivityDayCreateObject,
  CreateActivityDayQueryParams,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

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
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const {
        includeValues,
        selectValues,
        chosenOptionType,
        createActivityLog,
        createActivityLogDto,
        includeDepth,
      } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        entityType: 'activityDay',
        dto,
        actionType: 'CREATE',
        options: {
          createActivityLog,
          createActivityLogDto: JSON.parse(
            decodeURIComponent(createActivityLogDto),
          ),
        },
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
          includeDepth: Number(includeDepth),
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

      await this.redis.deleteCacheDeep({
        entityType: 'activityDay',
        base: 'activityDays',
        actionType: 'CREATE',
        specifiers: [
          {
            label: 'activityFeedId',
            possibleValues: [createdActivityDay.activityFeedId],
            ignoreIfFalse: true,
          },
        ],
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
