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
// Dtos
import { UpdateResearchSessionDto } from '../dto';

@Injectable()
export class UpdateResearchSessionService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async updateResearchSession(
    dto: UpdateResearchSessionDto,
    researchSessionId: string,
  ) {
    try {
      if (!researchSessionId) {
        throw new BadRequestException('No Research Session Id provided.');
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

      const updatedResearchSession = await this.prisma.researchSession.update({
        where: { id: researchSessionId },
        data: { ...dto },
      });

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

      return {
        message: `Successfully updated Research Session named ${updatedResearchSession.name}!`,
        researchSession: updatedResearchSession,
      };
    } catch (error) {
      throw error;
    }
  }
}
