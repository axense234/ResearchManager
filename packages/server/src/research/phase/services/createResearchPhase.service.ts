// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/index.service';
// Dtos
import { CreateResearchPhaseDto } from '../dto';

@Injectable()
export class CreateResearchPhaseService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async createResearchPhase(dto: CreateResearchPhaseDto) {
    try {
      const createdResearchPhase = await this.prisma.researchPhase.create({
        data: { ...dto },
      });

      if (!createdResearchPhase) {
        throw new BadRequestException(
          'Could not create Research Phase with the given information.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'researchPhases',
        [
          {
            label: 'userId',
            value: createdResearchPhase.userIdForArchivePurposes,
          },
          {
            label: 'researchActivityId',
            value: createdResearchPhase.researchActivityId,
          },
        ],
        'create',
      );

      return {
        message: `Successfully created Research Phase named ${createdResearchPhase.name}!`,
        researchPhase: createdResearchPhase,
      };
    } catch (error) {
      throw error;
    }
  }
}
