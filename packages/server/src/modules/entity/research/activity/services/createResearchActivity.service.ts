// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Dtos
import { CreateResearchActivityDto } from '@researchmanager/shared/types';
// Types
import {
  CreateResearchActivityQueryParams,
  ResearchActivityCreateDataObject,
  ResearchActivityCreateObject,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class CreateResearchActivityService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async createResearchActivity(
    queryParams: CreateResearchActivityQueryParams,
    dto: CreateResearchActivityDto,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const {
        includeValues,
        selectValues,
        chosenOptionType,
        createActivityFeed,
        createDefaultResearchPhase,
      } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        dto,
        entityType: 'researchActivity',
        actionType: 'CREATE',
        options: { createActivityFeed, createDefaultResearchPhase },
      })) as ResearchActivityCreateDataObject;

      const createObject: ResearchActivityCreateObject = { data: dataObject };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchActivity',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        createObject[chosenOptionType] = optionObject;
      }

      const createdResearchActivity =
        await this.prisma.researchActivity.create(createObject);

      if (!createdResearchActivity) {
        throw new BadRequestException(
          'Could not create Research Activity with the data provided.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'researchActivity',
        base: 'researchActivities',
        actionType: 'CREATE',
        specifiers: [
          {
            label: 'userId',
            possibleValues: [createdResearchActivity.userId],
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        entity: createdResearchActivity,
        message: `Successfully created Research Activity: ${createdResearchActivity.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
