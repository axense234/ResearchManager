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
export class DeleteResearchActivityService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async deleteResearchActivity(researchActivityId: string) {
    try {
      if (!researchActivityId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchActivityToBeDeleted =
        await this.prisma.researchActivity.findUnique({
          where: { id: researchActivityId },
        });

      if (!foundResearchActivityToBeDeleted) {
        throw new NotFoundException(
          'Could not find Research Activity to be deleted with the given id.',
        );
      }

      const deletedResearchActivity = await this.prisma.researchActivity.delete(
        { where: { id: researchActivityId } },
      );

      if (!deletedResearchActivity) {
        throw new BadRequestException(
          'Could not delete Research Activity with the data provided.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'researchActivities',
        [{ label: 'userId', value: deletedResearchActivity.userId }],
        'modify',
      );

      return {
        message: `Successfully deleted Research Activity named ${deletedResearchActivity.name}!`,
        researchActivity: deletedResearchActivity,
      };
    } catch (error) {
      throw error;
    }
  }
}
