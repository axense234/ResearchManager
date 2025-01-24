// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Dtos
import { CreateResearchActivityDto } from '../dto';
// Types
import {
  CreateResearchActivityQueryParams,
  ResearchActivityCreateObject,
} from '../types';
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';

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
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = this.objectBuilder.buildDataObject({
        dto,
        entityType: 'researchActivity',
      });

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

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'researchActivities',
        specifiers: [
          { label: 'userId', value: createdResearchActivity.userId },
        ],
        type: 'create',
      });

      return this.objectBuilder.buildReturnObject({
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
