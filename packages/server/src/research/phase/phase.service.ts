// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Types
import GetResearchPhasesQueryParams from './types/GetResearchPhasesQueryParams';
// Dto
import { CreateResearchPhaseDto, UpdateResearchPhaseDto } from './dto';
// Redis Caching
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class ResearchPhaseService {
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

  async getResearchPhase(researchPhaseId: string, url: string) {
    try {
      if (!researchPhaseId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchPhase = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchPhase = await this.prisma.researchPhase.findUnique({
            where: { id: researchPhaseId },
          });
          return researchPhase;
        },
      );

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

  async createResearchPhase(dto: CreateResearchPhaseDto) {
    try {
      const createdResearchPhase = await this.prisma.researchPhase.create({
        data: { ...dto },
      });

      if (!createdResearchPhase) {
        throw new BadRequestException(
          'Could not create Research Phase with the given information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
        'researchPhases',
        [
          {
            label: 'userId',
            value: createdResearchPhase.userIdForArchivePurposes,
          },
          {
            label: 'researchActivityId',
            value: createdResearchPhase.researchActivityId,
          },
        ],
        'create',
      );

      return {
        message: `Successfully created Research Phase named ${createdResearchPhase.name}!`,
        researchPhase: createdResearchPhase,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateResearchPhase(
    dto: UpdateResearchPhaseDto,
    researchPhaseId: string,
  ) {
    try {
      if (!researchPhaseId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchPhaseToBeUpdated =
        await this.prisma.researchPhase.findUnique({
          where: { id: researchPhaseId },
        });

      if (!foundResearchPhaseToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Research Phase matching the provided id.',
        );
      }

      const updatedResearchPhase = await this.prisma.researchPhase.update({
        where: { id: researchPhaseId },
        data: { ...dto },
      });

      if (!updatedResearchPhase) {
        throw new BadRequestException(
          'Could not update Research Phase with the provided data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
        'researchPhases',
        [
          {
            label: 'userId',
            value: updatedResearchPhase.userIdForArchivePurposes,
          },
          {
            label: 'researchActivityId',
            value: updatedResearchPhase.researchActivityId,
          },
        ],
        'modify',
      );

      return {
        message: `Successfully updated Research Phase named ${updatedResearchPhase.name}!`,
        researchPhase: updatedResearchPhase,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteResearchPhase(researchPhaseId: string) {
    try {
      if (!researchPhaseId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchPhaseToBeDeleted =
        await this.prisma.researchPhase.findUnique({
          where: { id: researchPhaseId },
        });

      if (!foundResearchPhaseToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Research Phase to delete using the given id.',
        );
      }

      const deletedResearchPhase = await this.prisma.researchPhase.delete({
        where: { id: researchPhaseId },
      });

      if (!deletedResearchPhase) {
        throw new BadRequestException(
          'Could not delete Research Phase with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
        'researchPhases',
        [
          {
            label: 'userId',
            value: deletedResearchPhase.userIdForArchivePurposes,
          },
          {
            label: 'researchActivityId',
            value: deletedResearchPhase.researchActivityId,
          },
        ],
        'modify',
      );

      return {
        message: `Successfully deleted Research Phase named ${deletedResearchPhase.name}!`,
        researchPhase: deletedResearchPhase,
      };
    } catch (error) {
      throw error;
    }
  }
}
