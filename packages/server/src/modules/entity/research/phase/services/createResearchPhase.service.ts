// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Dtos
import type { CreateResearchPhaseDto } from '@researchmanager/shared/types';
// Types
import {
  CreateResearchPhaseQueryParams,
  ResearchPhaseCreateDataObject,
  ResearchPhaseCreateObject,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class CreateResearchPhaseService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async createResearchPhase(
    queryParams: CreateResearchPhaseQueryParams,
    dto: CreateResearchPhaseDto,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        entityType: 'researchPhase',
        dto,
        actionType: 'CREATE',
        options: {},
      })) as ResearchPhaseCreateDataObject;

      const createObject: ResearchPhaseCreateObject = { data: dataObject };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchPhase',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        createObject[chosenOptionType] = optionObject;
      }

      const createdResearchPhase =
        await this.prisma.researchPhase.create(createObject);

      if (!createdResearchPhase) {
        throw new BadRequestException(
          'Could not create Research Phase with the given information.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'researchPhase',
        base: 'researchPhases',
        actionType: 'CREATE',
        specifiers: [
          {
            label: 'researchActivityId',
            value: createdResearchPhase.researchActivityId,
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        entity: createdResearchPhase,
        message: `Successfully created Research Phase named ${createdResearchPhase.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
