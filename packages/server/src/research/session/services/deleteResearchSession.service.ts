// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/index.service';

@Injectable()
export class DeleteResearchSessionService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async deleteResearchSession(researchSessionId: string) {
    try {
      if (!researchSessionId) {
        throw new BadRequestException('No Research Session Id provided.');
      }

      const foundResearchSessionToBeDeleted =
        await this.prisma.researchSession.findUnique({
          where: { id: researchSessionId },
        });

      if (!foundResearchSessionToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Research Session with the data provided.',
        );
      }

      const deletedResearchSession = await this.prisma.researchSession.delete({
        where: { id: researchSessionId },
      });

      if (!deletedResearchSession) {
        throw new BadRequestException(
          'Could not delete Research Session with the data provided.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'researchSessions',
        [
          {
            label: 'userId',
            value: deletedResearchSession.userIdForArchivePurposes,
          },
          {
            label: 'researchPhaseId',
            value: deletedResearchSession.researchPhaseId,
          },
        ],
        'modify',
      );

      return {
        message: `Successfully deleted Research Session named ${deletedResearchSession.name}!`,
        researchSession: deletedResearchSession,
      };
    } catch (error) {
      throw error;
    }
  }
}
