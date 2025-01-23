// NestJS
import { Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Types
import GetResearchLogsQueryParams from '../types/GetResearchLogsQueryParams';

@Injectable()
export class GetResearchLogsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getResearchLogs(queryParams: GetResearchLogsQueryParams, url: string) {
    try {
      const foundResearchLogs = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchLogs = await this.prisma.researchLog.findMany({
            where: {
              AND: [
                { userIdForArchivePurposes: queryParams.userId },
                { researchPhaseId: queryParams.researchPhaseId },
              ],
            },
          });
          return researchLogs;
        },
      );

      if (foundResearchLogs.length < 1) {
        return {
          nbHits: 0,
          message: 'Could not find any Research Logs given the params.',
          researchLogs: [],
        };
      }

      return {
        nbHits: foundResearchLogs.length,
        message: `Successfully found ${foundResearchLogs.length} Research Logs with the provided params.`,
        researchLogs: foundResearchLogs,
      };
    } catch (error) {
      throw error;
    }
  }
}
