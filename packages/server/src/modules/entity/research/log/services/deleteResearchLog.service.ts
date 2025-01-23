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

@Injectable()
export class DeleteResearchLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async deleteResearchLog(researchLogId: string) {
    try {
      if (!researchLogId) {
        throw new BadRequestException('Please provide a Research Log Id!');
      }

      const foundResearchLogToBeDeleted =
        await this.prisma.researchLog.findUnique({
          where: { id: researchLogId },
        });

      if (!foundResearchLogToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Research Logs matching the respective provided id.',
        );
      }

      const deletedResearchLog = await this.prisma.researchLog.delete({
        where: { id: researchLogId },
      });
      if (!deletedResearchLog) {
        throw new BadRequestException(
          'Could not delete Research Log with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'researchPhases',
        specifiers: [
          {
            label: 'userId',
            value: deletedResearchLog.userIdForArchivePurposes,
          },
          {
            label: 'researchPhaseId',
            value: deletedResearchLog.researchPhaseId,
          },
        ],
        type: 'modify',
      });

      return {
        message: `Successfully deleted Research Log named ${deletedResearchLog.name}!`,
        researchLog: deletedResearchLog,
      };
    } catch (error) {
      throw error;
    }
  }
}
