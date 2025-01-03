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
export class GetResearchActivityService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getResearchActivity(researchActivityId: string, url: string) {
    try {
      if (!researchActivityId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchActivity = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchActivity =
            await this.prisma.researchActivity.findUnique({
              where: { id: researchActivityId },
            });
          return researchActivity;
        },
      );

      if (!foundResearchActivity) {
        throw new NotFoundException(
          'Could not find any Research Activity with the provided id.',
        );
      }

      return {
        message: `Successfully found Research Activity: ${foundResearchActivity.name}!`,
        researchActivity: foundResearchActivity,
      };
    } catch (error) {
      throw error;
    }
  }
}
