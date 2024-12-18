// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Dtos
import { CreateTagDto, UpdateTagDto } from './dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async getTags(userId?: string) {
    try {
      const foundTags = await this.prisma.tag.findMany({
        where: { AND: [{ userId }] },
      });

      if (foundTags.length < 1) {
        return {
          nbHits: 0,
          message: 'No Tags found given the input.',
          tags: [],
        };
      }

      return {
        nbHits: foundTags.length,
        message: `Successfully found ${foundTags.length} Tags given the input!`,
        tags: foundTags,
      };
    } catch (error) {
      throw error;
    }
  }

  async getTag(tagId: string) {
    try {
      if (!tagId) {
        throw new BadRequestException('No Tag Id provided!');
      }

      const foundTag = await this.prisma.tag.findUnique({
        where: { id: tagId },
      });

      if (!foundTag) {
        throw new NotFoundException(
          'Could not find any Tag with the provided data.',
        );
      }

      return {
        message: `Successfully found Tag: ${foundTag.title}!`,
        tag: foundTag,
      };
    } catch (error) {
      throw error;
    }
  }

  async createTag(dto: CreateTagDto) {
    try {
      const createdTag = await this.prisma.tag.create({
        data: { ...dto },
      });

      if (!createdTag) {
        throw new BadRequestException(
          'Could not create Tag with the data provided.',
        );
      }

      return {
        message: `Successfully created Tag named ${createdTag.title}!`,
        tag: createdTag,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateTag(dto: UpdateTagDto, tagId: string) {
    try {
      if (!tagId) {
        throw new BadRequestException('No Tag Id provided.');
      }

      const foundTagToBeUpdated = await this.prisma.tag.findUnique({
        where: { id: tagId },
      });

      if (!foundTagToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Tag to update with the given data.',
        );
      }

      const updatedTag = await this.prisma.tag.update({
        where: { id: tagId },
        data: { ...dto },
      });

      if (!updatedTag) {
        throw new BadRequestException(
          'Could not update Tag with the provided data.',
        );
      }

      return {
        message: `Successfully updated Tag named ${updatedTag.title}!`,
        tag: updatedTag,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteTag(tagId: string) {
    try {
      if (!tagId) {
        throw new BadRequestException('No Tag Id provided.');
      }

      const foundTagToBeDeleted = await this.prisma.tag.findUnique({
        where: { id: tagId },
      });

      if (!foundTagToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Tag with the provided data.',
        );
      }

      const deletedTag = await this.prisma.tag.delete({ where: { id: tagId } });

      if (!deletedTag) {
        throw new BadRequestException(
          'Could not delete Tag with the provided information.',
        );
      }

      return {
        message: `Successfully deleted Tag named ${deletedTag.title}!`,
        tag: deletedTag,
      };
    } catch (error) {
      throw error;
    }
  }
}
