// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/index.service';
// Dtos
import { CreateResearchSessionDto } from '../dto';

@Injectable()
export class CreateResearchSessionService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async createResearchSession(dto: CreateResearchSessionDto) {
    try {
      const createdResearchSession = await this.prisma.researchSession.create({
        data: { ...dto },
      });

      if (!createdResearchSession) {
        throw new BadRequestException(
          'Could not create Research Session with the provided information.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'researchSessions',
        [
          {
            label: 'userId',
            value: createdResearchSession.userIdForArchivePurposes,
          },
          {
            label: 'researchPhaseId',
            value: createdResearchSession.researchPhaseId,
          },
        ],
        'create',
      );

      return {
        message: `Successfully created Research Session ${createdResearchSession.name}!`,
        researchSession: createdResearchSession,
      };
    } catch (error) {
      throw error;
    }
  }
}
