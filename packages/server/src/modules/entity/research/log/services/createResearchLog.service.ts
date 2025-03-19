// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Dtos
import type { CreateResearchLogDto } from '@researchmanager/shared/types';
// Types
import {
  CreateResearchLogQueryParams,
  ResearchLogCreateDataObject,
  ResearchLogCreateObject,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class CreateResearchLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async createResearchLog(
    queryParams: CreateResearchLogQueryParams,
    dto: CreateResearchLogDto,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        dto,
        entityType: 'researchLog',
        actionType: 'CREATE',
        options: {},
      })) as ResearchLogCreateDataObject;

      const createObject: ResearchLogCreateObject = {
        data: dataObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchLog',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        createObject[chosenOptionType] = optionObject;
      }

      const createdResearchLog =
        await this.prisma.researchLog.create(createObject);

      if (!createdResearchLog) {
        throw new BadRequestException(
          'Could not create Research Log with the provided information.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'researchLog',
        base: 'researchLogs',
        actionType: 'CREATE',
        specifiers: [
          {
            label: 'researchPhaseId',
            value: createdResearchLog.researchPhaseId,
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        entity: createdResearchLog,
        message: `Successfully created Research Log named ${createdResearchLog.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
