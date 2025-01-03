// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';

@Injectable()
export class DeleteResearchPhaseService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async deleteResearchPhase(researchPhaseId: string) {
    try {
      if (!researchPhaseId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchPhaseToBeDeleted =
        await this.prisma.researchPhase.findUnique({
          where: { id: researchPhaseId },
        });

      if (!foundResearchPhaseToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Research Phase to delete using the given id.',
        );
      }

      const deletedResearchPhase = await this.prisma.researchPhase.delete({
        where: { id: researchPhaseId },
      });

      if (!deletedResearchPhase) {
        throw new BadRequestException(
          'Could not delete Research Phase with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'researchPhases',
        specifiers: [
          {
            label: 'userId',
            value: deletedResearchPhase.userIdForArchivePurposes,
          },
          {
            label: 'researchActivityId',
            value: deletedResearchPhase.researchActivityId,
          },
        ],
        type: 'modify',
      });

      return {
        message: `Successfully deleted Research Phase named ${deletedResearchPhase.name}!`,
        researchPhase: deletedResearchPhase,
      };
    } catch (error) {
      throw error;
    }
  }
}
