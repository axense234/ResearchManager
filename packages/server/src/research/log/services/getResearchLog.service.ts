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

@Injectable()
export class GetResearchLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getResearchLog(researchLogId: string, url: string) {
    try {
      if (!researchLogId) {
        throw new BadRequestException('No Research Log Id provided!');
      }

      const foundResearchLog = await this.redis.getOrSetCache(url, async () => {
        const researchLog = await this.prisma.researchLog.findUnique({
          where: { id: researchLogId },
        });
        return researchLog;
      });

      if (!foundResearchLog) {
        throw new NotFoundException(
          'Could not find Research Log with the provided id.',
        );
      }

      return {
        message: `Successfully found Research Log named ${foundResearchLog.name}!`,
        researchLog: foundResearchLog,
      };
    } catch (error) {
      throw error;
    }
  }
}
