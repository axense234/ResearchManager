// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { CreateTagService } from './createTag.service';
import { DeleteTagService } from './deleteTag.service';
import { GetTagService } from './getTag.service';
import { GetTagsService } from './getTags.service';
import { UpdateTagService } from './updateTag.service';
// Dtos
import type { CreateTagDto, UpdateTagDto } from '@researchmanager/shared/types';
// Types
import {
  CreateTagQueryParams,
  DeleteTagQueryParams,
  GetTagQueryParams,
  GetTagsQueryParams,
  UpdateTagQueryParams,
} from '../types';

@Injectable()
export class TagService {
  constructor(
    private getTagsService: GetTagsService,
    private getTagService: GetTagService,
    private createTagService: CreateTagService,
    private updateTagService: UpdateTagService,
    private deleteTagService: DeleteTagService,
  ) {}

  async getTags(queryParams: GetTagsQueryParams, url: string) {
    return await this.getTagsService.getTags(queryParams, url);
  }

  async getTag(queryParams: GetTagQueryParams, tagId: string, url: string) {
    return await this.getTagService.getTag(queryParams, tagId, url);
  }

  async createTag(queryParams: CreateTagQueryParams, dto: CreateTagDto) {
    return await this.createTagService.createTag(queryParams, dto);
  }

  async updateTag(
    queryParams: UpdateTagQueryParams,
    dto: UpdateTagDto,
    tagId: string,
  ) {
    return await this.updateTagService.updateTag(queryParams, dto, tagId);
  }

  async deleteTag(queryParams: DeleteTagQueryParams, tagId: string) {
    return await this.deleteTagService.deleteTag(queryParams, tagId);
  }
}
