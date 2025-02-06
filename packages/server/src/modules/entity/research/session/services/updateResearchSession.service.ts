// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Dtos
import { UpdateResearchSessionDto } from '../dto';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  ResearchSessionUpdateDataObject,
  ResearchSessionUpdateObject,
  UpdateResearchSessionQueryParams,
} from '../types';

@Injectable()
export class UpdateResearchSessionService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async updateResearchSession(
    queryParams: UpdateResearchSessionQueryParams,
    dto: UpdateResearchSessionDto,
    researchSessionId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!researchSessionId) {
        throw new BadRequestException('No Research Session Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        dto,
        entityType: 'researchSession',
      })) as ResearchSessionUpdateDataObject;

      const updateObject: ResearchSessionUpdateObject = {
        where: { id: researchSessionId },
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
        updateObject[chosenOptionType] = optionObject;
      }

      const foundResearchSessionToBeUpdated =
        await this.prisma.researchSession.findUnique({
          where: { id: researchSessionId },
        });

      if (!foundResearchSessionToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Research Session to be updated with the provided information.',
        );
      }

      const updatedResearchSession =
        await this.prisma.researchSession.update(updateObject);

      if (!updatedResearchSession) {
        throw new BadRequestException(
          'Could not update Research Session with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'researchSessions',
        specifiers: [
          {
            label: 'userId',
            value: updatedResearchSession.userIdForArchivePurposes,
          },
          {
            label: 'researchPhaseId',
            value: updatedResearchSession.researchPhaseId,
          },
        ],
        type: 'modify',
      });

      return this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedResearchSession,
        message: `Successfully updated Research Session named ${updatedResearchSession.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
