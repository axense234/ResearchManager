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
import { UpdateResearchSessionDto } from '@researchmanager/shared/types';
// Types
import {
  ResearchSessionUpdateDataObject,
  ResearchSessionUpdateObject,
  UpdateResearchSessionQueryParams,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

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
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      if (!researchSessionId) {
        throw new BadRequestException('No Research Session Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        dto,
        entityType: 'researchSession',
        actionType: 'UPDATE',
        options: {},
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

      await this.redis.deleteCacheDeep({
        entityType: 'researchSession',
        base: 'researchSessions',
        actionType: 'UPDATE',
        specifiers: [
          {
            label: 'researchPhaseId',
            possibleValues: [updatedResearchSession.researchPhaseId],
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
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
