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
export class GetResearchSessionService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getResearchSession(researchSessionId: string, url: string) {
    try {
      if (!researchSessionId) {
        throw new BadRequestException('Please provide a Research Session Id!');
      }

      const foundResearchSession =
        await this.redis.GetOrSetCacheService.getOrSetCache(url, async () => {
          const researchSession = await this.prisma.researchSession.findUnique({
            where: { id: researchSessionId },
          });
          return researchSession;
        });

      if (!foundResearchSession) {
        throw new NotFoundException(
          'Could not find any Research Session with the information provided.',
        );
      }

      return {
        message: `Successfully found Research Session named ${foundResearchSession.name}!`,
        researchSession: foundResearchSession,
      };
    } catch (error) {
      throw error;
    }
  }
}
