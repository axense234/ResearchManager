// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Dtos
import { CreateResearchSessionDto } from '@researchmanager/shared/types';
// Types
import {
  CreateResearchSessionQueryParams,
  ResearchSessionCreateDataObject,
  ResearchSessionCreateObject,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class CreateResearchSessionService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async createResearchSession(
    queryParams: CreateResearchSessionQueryParams,
    dto: CreateResearchSessionDto,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        entityType: 'researchSession',
        dto,
        actionType: 'CREATE',
        options: {},
      })) as ResearchSessionCreateDataObject;

      const createObject: ResearchSessionCreateObject = {
        data: dataObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchSession',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        createObject[chosenOptionType] = optionObject;
      }

      const createdResearchSession =
        await this.prisma.researchSession.create(createObject);

      if (!createdResearchSession) {
        throw new BadRequestException(
          'Could not create Research Session with the provided information.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'researchSession',
        base: 'researchSessions',
        actionType: 'CREATE',
        specifiers: [
          {
            label: 'researchPhaseId',
            possibleValues: [createdResearchSession.researchPhaseId],
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        entity: createdResearchSession,
        message: `Successfully created Research Session ${createdResearchSession.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
