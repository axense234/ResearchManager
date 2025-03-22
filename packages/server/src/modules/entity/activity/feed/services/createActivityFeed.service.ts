// NestJS
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Dtos
import { CreateActivityFeedDto } from '@researchmanager/shared/types';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import {
  ActivityFeedCreateDataObject,
  ActivityFeedCreateObject,
  CreateActivityFeedQueryParams,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class CreateActivityFeedService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async createActivityFeed(
    queryParams: CreateActivityFeedQueryParams,
    dto: CreateActivityFeedDto,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        entityType: 'activityFeed',
        dto,
        actionType: 'CREATE',
        options: {},
      })) as ActivityFeedCreateDataObject;

      const createObject: ActivityFeedCreateObject = {
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
        createObject[chosenOptionType] = optionObject;
      }

      const createdActivityFeed =
        await this.prisma.activityFeed.create(createObject);

      if (!createdActivityFeed) {
        throw new BadRequestException(
          'Could not create Activity Feed with the data provided.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'activityFeed',
        base: 'activityFeeds',
        actionType: 'CREATE',
        specifiersType: 'either',
        specifiers: [
          {
            label: 'userId',
            value: createdActivityFeed.userId,
            ignoreIfFalse: true,
          },
          {
            label: 'researchActivityId',
            value: createdActivityFeed.researchActivityId,
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        entity: createdActivityFeed,
        message: `Successfully created Activity Feed of type ${createdActivityFeed.type}!`,
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
