// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/index.service';
// Dtos
import { CreateResearchLogDto } from '../dto';

@Injectable()
export class CreateResearchLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async createResearchLog(dto: CreateResearchLogDto) {
    try {
      const createdResearchLog = await this.prisma.researchLog.create({
        data: { ...dto },
      });

      if (!createdResearchLog) {
        throw new BadRequestException(
          'Could not create Research Log with the provided information.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'researchPhases',
        [
          {
            label: 'userId',
            value: createdResearchLog.userIdForArchivePurposes,
          },
          {
            label: 'researchPhaseId',
            value: createdResearchLog.researchPhaseId,
          },
        ],
        'create',
      );

      return {
        message: `Successfully created Research Log named ${createdResearchLog.name}!`,
        researchLog: createdResearchLog,
      };
    } catch (error) {
      throw error;
    }
  }
}
