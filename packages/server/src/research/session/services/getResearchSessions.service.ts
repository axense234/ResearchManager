// NestJS
import { Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';
// Type
import GetResearchSessionsQueryParams from '../types/GetResearchSessionsQueryParams';

@Injectable()
export class GetResearchSessionsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getResearchSessions(
    queryParams: GetResearchSessionsQueryParams,
    url: string,
  ) {
    try {
      const foundResearchSessions = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchSessions = await this.prisma.researchSession.findMany({
            where: {
              AND: [
                { userIdForArchivePurposes: queryParams.userId },
                { researchPhaseId: queryParams.researchPhaseId },
              ],
            },
          });

          return researchSessions;
        },
      );

      if (foundResearchSessions.length < 1) {
        return {
          nbHits: 0,
          message:
            'Could not find any Research Sessions matching the query params.',
          researchSessions: [],
        };
      }

      return {
        nbHits: foundResearchSessions.length,
        message: `Successfully found ${foundResearchSessions.length} Research Sessions using the given query params.`,
        researchSessions: foundResearchSessions,
      };
    } catch (error) {
      throw error;
    }
  }
}
