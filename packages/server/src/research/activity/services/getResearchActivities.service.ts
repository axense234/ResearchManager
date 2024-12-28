// NestJS
import { Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/index.service';

@Injectable()
export class GetResearchActivitiesService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getResearchActivities(userId?: string, url?: string) {
    try {
      const foundResearchActivities =
        await this.redis.GetOrSetCacheService.getOrSetCache(url, async () => {
          const researchActivities =
            await this.prisma.researchActivity.findMany({
              where: { AND: [{ userId }] },
            });
          return researchActivities;
        });

      if (foundResearchActivities.length < 1) {
        return {
          nbHits: 0,
          message: 'No Research Activities found given the input.',
          researchActivities: [],
        };
      }

      return {
        nbHits: foundResearchActivities.length,
        message: `Successfully found ${foundResearchActivities.length} Research Activities given the input!`,
        researchActivities: foundResearchActivities,
      };
    } catch (error) {
      throw error;
    }
  }
}
