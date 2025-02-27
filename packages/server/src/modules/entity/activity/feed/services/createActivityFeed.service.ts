// NestJS
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Dtos
import { CreateActivityFeedDto } from '../dto';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import {
  ActivityFeedCreateDataObject,
  ActivityFeedCreateObject,
  CreateActivityFeedQueryParams,
} from '../types';

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
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        entityType: 'activityFeed',
        dto,
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

      const foundActivityFeedToBeCheckedForType =
        await this.prisma.activityFeed.findFirst({
          where: { AND: [{ userId: dto.userId }, { type: 'USER' }] },
        });

      if (foundActivityFeedToBeCheckedForType && dto.type === 'USER') {
        throw new BadRequestException(
          'Could not create Activity Feed with the userId provided AND type USER since one already exists with those properties.',
        );
      }

      const createdActivityFeed =
        await this.prisma.activityFeed.create(createObject);

      if (!createdActivityFeed) {
        throw new BadRequestException(
          'Could not create Activity Feed with the data provided.',
        );
      }

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
