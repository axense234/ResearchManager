// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Types
import GetResearchSessionsQueryParams from './types/GetResearchSessionsQueryParams';
import { CreateResearchSessionDto } from './dto';

@Injectable()
export class ResearchSessionService {
  constructor(private prisma: PrismaService) {}

  async getResearchSessions(queryParams: GetResearchSessionsQueryParams) {
    try {
      const foundResearchSessions = await this.prisma.researchSession.findMany({
        where: {
          AND: [
            { userIdForArchivePurposes: queryParams.userId },
            { researchPhaseId: queryParams.researchPhaseId },
          ],
        },
      });

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

  async getResearchSession(researchSessionId: string) {
    try {
      if (!researchSessionId) {
        throw new BadRequestException('Please provide a Research Session Id!');
      }

      const foundResearchSession = await this.prisma.researchSession.findUnique(
        { where: { id: researchSessionId } },
      );

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

  async createResearchSession(dto: CreateResearchSessionDto) {
    try {
      const createdResearchSession = await this.prisma.researchSession.create({
        data: { ...dto },
      });

      if (!createdResearchSession) {
        throw new BadRequestException(
          'Could not create Research Session with the provided information.',
        );
      }

      return {
        message: `Successfully created Research Session ${createdResearchSession.name}!`,
        researchSession: createdResearchSession,
      };
    } catch (error) {
      throw error;
    }
  }
}
