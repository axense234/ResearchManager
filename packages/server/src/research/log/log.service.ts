// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Types
import GetResearchLogsQueryParams from './types/GetResearchLogsQueryParams';
// Dtos
import { CreateResearchLogDto, UpdateResearchLogDto } from './dto';

@Injectable()
export class ResearchLogService {
  constructor(private prisma: PrismaService) {}

  async getResearchLogs(queryParams: GetResearchLogsQueryParams) {
    try {
      const foundResearchLogs = await this.prisma.researchLog.findMany({
        where: {
          AND: [
            { userIdForArchivePurposes: queryParams.userId },
            { researchPhaseId: queryParams.researchPhaseId },
          ],
        },
      });

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

  async getResearchLog(researchLogId: string) {
    try {
      if (!researchLogId) {
        throw new BadRequestException('No Research Log Id provided!');
      }

      const foundResearchLog = await this.prisma.researchLog.findUnique({
        where: { id: researchLogId },
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

  async createResearchLog(dto: CreateResearchLogDto) {
    try {
      const createdResearchLog = await this.prisma.researchLog.create({
        data: { ...dto },
      });

      if (!createdResearchLog) {
        throw new BadRequestException(
          'Could not create Research Log with the provided information.',
        );
      }

      return {
        message: `Successfully created Research Log named ${createdResearchLog.name}!`,
        researchLog: createdResearchLog,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateResearchLog(dto: UpdateResearchLogDto, researchLogId: string) {
    try {
      if (!researchLogId) {
        throw new BadRequestException('Please provide a Research Log Id!');
      }

      const foundResearchLogToBeUpdated =
        await this.prisma.researchLog.findUnique({
          where: { id: researchLogId },
        });
      if (!foundResearchLogToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Research Log to be updated with the provided information.',
        );
      }

      const updatedResearchLog = await this.prisma.researchLog.update({
        where: { id: researchLogId },
        data: { ...dto },
      });

      if (!updatedResearchLog) {
        throw new BadRequestException(
          'Could not update Research Log with the given data.',
        );
      }

      return {
        message: `Successfully updated Research Log named ${updatedResearchLog.name}!`,
        researchLog: updatedResearchLog,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteResearchLog(researchLogId: string) {
    try {
      if (!researchLogId) {
        throw new BadRequestException('Please provide a Research Log Id!');
      }

      const foundResearchLogToBeDeleted =
        await this.prisma.researchLog.findUnique({
          where: { id: researchLogId },
        });

      if (!foundResearchLogToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Research Logs matching the respective provided id.',
        );
      }

      const deletedResearchLog = await this.prisma.researchLog.delete({
        where: { id: researchLogId },
      });
      if (!deletedResearchLog) {
        throw new BadRequestException(
          'Could not delete Research Log with the provided information.',
        );
      }

      return {
        message: `Successfully deleted Research Log named ${deletedResearchLog.name}!`,
        researchLog: deletedResearchLog,
      };
    } catch (error) {
      throw error;
    }
  }
}
