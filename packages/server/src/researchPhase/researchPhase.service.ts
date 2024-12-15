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
import { CreateResearchPhaseDto } from './dto';

@Injectable()
export class ResearchPhaseService {
  constructor(private prisma: PrismaService) {}

  async getResearchPhases(queryParams: GetResearchPhasesQueryParams) {
    try {
      const foundResearchPhases = await this.prisma.researchPhase.findMany({
        where: {
          AND: [
            {
              userIdForArchivePurposes: queryParams.userId,
              researchActivityId: queryParams.researchActivityId,
            },
          ],
        },
      });

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

  async getResearchPhase(researchPhaseId: string) {
    try {
      if (!researchPhaseId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchPhase = await this.prisma.researchPhase.findUnique({
        where: { id: researchPhaseId },
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
    } catch (error) {
      throw error;
    }
  }
}
