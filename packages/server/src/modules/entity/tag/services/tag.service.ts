// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { CreateTagService } from './createTag.service';
import { DeleteTagService } from './deleteTag.service';
import { GetTagService } from './getTag.service';
import { GetTagsService } from './getTags.service';
import { UpdateTagService } from './updateTag.service';
// Dtos
import { CreateTagDto, UpdateTagDto } from '../dto';

@Injectable()
export class TagService {
  constructor(
    private getTagsService: GetTagsService,
    private getTagService: GetTagService,
    private createTagService: CreateTagService,
    private updateTagService: UpdateTagService,
    private deleteTagService: DeleteTagService,
  ) {}

  async getTags(userId: string, url: string) {
    return await this.getTagsService.getTags(userId, url);
  }

  async getTag(tagId: string, url: string) {
    return await this.getTagService.getTag(tagId, url);
  }

  async createTag(dto: CreateTagDto) {
    return await this.createTagService.createTag(dto);
  }

  async updateTag(dto: UpdateTagDto, tagId: string) {
    return await this.updateTagService.updateTag(dto, tagId);
  }

  async deleteTag(tagId: string) {
    return await this.deleteTagService.deleteTag(tagId);
  }
}
