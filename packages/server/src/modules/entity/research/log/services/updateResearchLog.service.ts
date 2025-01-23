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
// Dtos
import { UpdateResearchLogDto } from '../dto';

@Injectable()
export class UpdateResearchLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async updateResearchLog(dto: UpdateResearchLogDto, researchLogId: string) {
    try {
      if (!researchLogId) {
        throw new BadRequestException('Please provide a Research Log Id!');
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

      const updatedResearchLog = await this.prisma.researchLog.update({
        where: { id: researchLogId },
        data: { ...dto },
      });

      if (!updatedResearchLog) {
        throw new BadRequestException(
          'Could not update Research Log with the given data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'researchPhases',
        specifiers: [
          {
            label: 'userId',
            value: updatedResearchLog.userIdForArchivePurposes,
          },
          {
            label: 'researchPhaseId',
            value: updatedResearchLog.researchPhaseId,
          },
        ],
        type: 'modify',
      });

      return {
        message: `Successfully updated Research Log named ${updatedResearchLog.name}!`,
        researchLog: updatedResearchLog,
      };
    } catch (error) {
      throw error;
    }
  }
}
