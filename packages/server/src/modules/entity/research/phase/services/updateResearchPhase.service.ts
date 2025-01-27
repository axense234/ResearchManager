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
import { UpdateResearchPhaseDto } from '../dto';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  ResearchPhaseUpdateDataObject,
  ResearchPhaseUpdateObject,
  UpdateResearchPhaseQueryParams,
} from '../types';

@Injectable()
export class UpdateResearchPhaseService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async updateResearchPhase(
    queryParams: UpdateResearchPhaseQueryParams,
    dto: UpdateResearchPhaseDto,
    researchPhaseId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!researchPhaseId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = this.objectBuilder.buildDataObject({
        dto,
        entityType: 'researchPhase',
      }) as ResearchPhaseUpdateDataObject;

      const foundResearchPhaseToBeUpdated =
        await this.prisma.researchPhase.findUnique({
          where: { id: researchPhaseId },
        });

      const updateObject: ResearchPhaseUpdateObject = {
        where: { id: researchPhaseId },
        data: dataObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchPhase',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        updateObject[chosenOptionType] = optionObject;
      }

      if (!foundResearchPhaseToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Research Phase matching the provided id.',
        );
      }

      const updatedResearchPhase =
        await this.prisma.researchPhase.update(updateObject);

      if (!updatedResearchPhase) {
        throw new BadRequestException(
          'Could not update Research Phase with the provided data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'researchPhases',
        specifiers: [
          {
            label: 'userId',
            value: updatedResearchPhase.userIdForArchivePurposes,
          },
          {
            label: 'researchActivityId',
            value: updatedResearchPhase.researchActivityId,
          },
        ],
        type: 'modify',
      });

      return this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedResearchPhase,
        message: `Successfully updated Research Phase named ${updatedResearchPhase.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
