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
import { UpdateResearchLogDto } from '@researchmanager/shared/types';
// Types
import {
  ResearchLogUpdateDataObject,
  ResearchLogUpdateObject,
  UpdateResearchLogQueryParams,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class UpdateResearchLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async updateResearchLog(
    queryParams: UpdateResearchLogQueryParams,
    dto: UpdateResearchLogDto,
    researchLogId: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      if (!researchLogId) {
        throw new BadRequestException('Please provide a Research Log Id!');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        dto,
        entityType: 'researchLog',
        actionType: 'UPDATE',
        options: {},
      })) as ResearchLogUpdateDataObject;

      const updateObject: ResearchLogUpdateObject = {
        where: { id: researchLogId },
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
        updateObject[chosenOptionType] = optionObject;
      }

      const foundResearchLogToBeUpdated =
        await this.prisma.researchLog.findUnique({
          where: { id: researchLogId },
        });

      if (!foundResearchLogToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Research Log to be updated with the provided information.',
        );
      }

      const updatedResearchLog =
        await this.prisma.researchLog.update(updateObject);

      if (!updatedResearchLog) {
        throw new BadRequestException(
          'Could not update Research Log with the given data.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'researchLog',
        base: 'researchLogs',
        actionType: 'UPDATE',
        specifiers: [
          {
            label: 'researchPhaseId',
            possibleValues: [updatedResearchLog.researchPhaseId],
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedResearchLog,
        message: `Successfully updated Research Log named ${updatedResearchLog.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
