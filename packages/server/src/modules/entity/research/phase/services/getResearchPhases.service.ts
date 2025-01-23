// NestJS
import { Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Types
import GetResearchPhasesQueryParams from '../types/GetResearchPhasesQueryParams';

@Injectable()
export class GetResearchPhasesService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getResearchPhases(
    queryParams: GetResearchPhasesQueryParams,
    url: string,
  ) {
    try {
      const foundResearchPhases = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchPhases = await this.prisma.researchPhase.findMany({
            where: {
              AND: [
                {
                  userIdForArchivePurposes: queryParams.userId,
                  researchActivityId: queryParams.researchActivityId,
                },
              ],
            },
          });
          return researchPhases;
        },
      );

      if (foundResearchPhases.length < 1) {
        return {
          message: 'Could not find any Research Phases with the given params.',
          researchPhases: [],
        };
      }

      return {
        nbHits: foundResearchPhases.length,
        message: `Successfully found ${foundResearchPhases.length} Research Phases, given the params.`,
        researchPhases: foundResearchPhases,
      };
    } catch (error) {
      throw error;
    }
  }
}
