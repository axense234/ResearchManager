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
export class GetResearchPhaseService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getResearchPhase(researchPhaseId: string, url: string) {
    try {
      if (!researchPhaseId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchPhase =
        await this.redis.GetOrSetCacheService.getOrSetCache(url, async () => {
          const researchPhase = await this.prisma.researchPhase.findUnique({
            where: { id: researchPhaseId },
          });
          return researchPhase;
        });

      if (!foundResearchPhase) {
        throw new NotFoundException(
          'Could not find Research Phase matching the given id.',
        );
      }

      return {
        message: `Successfully found Research Phase named ${foundResearchPhase.name}!`,
        researchPhase: foundResearchPhase,
      };
    } catch (error) {
      throw error;
    }
  }
}
