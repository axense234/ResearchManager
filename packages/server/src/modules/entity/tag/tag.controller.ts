// NestJS
import {
  Body,
  Controller,
  Get,
  Param,
  Query,
  Post,
  Delete,
  Patch,
  Req,
} from '@nestjs/common';
// Dtos
import { CreateTagDto, UpdateTagDto } from './dto';
// Services
import { TagService } from './services/tag.service';
// Types
import {
  CreateTagQueryParams,
  DeleteTagQueryParams,
  GetTagQueryParams,
  GetTagsQueryParams,
  UpdateTagQueryParams,
} from './types';
// Custom Decorators
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';

@JwtAuth()
@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  getTags(@Query() queryParams: GetTagsQueryParams, @Req() req: Request) {
    return this.tagService.getTags(queryParams, req.url);
  }

  @Get(':tagId')
  getTag(
    @Query() queryParams: GetTagQueryParams,
    @Param('tagId') tagId: string,
    @Req() req: Request,
  ) {
    return this.tagService.getTag(queryParams, tagId, req.url);
  }

  @Post('create')
  createTag(
    @Query() queryParams: CreateTagQueryParams,
    @Body() dto: CreateTagDto,
  ) {
    return this.tagService.createTag(queryParams, dto);
  }

  @Patch(':tagId/update')
  updateTag(
    @Query() queryParams: UpdateTagQueryParams,
    @Param('tagId') tagId: string,
    @Body() dto: UpdateTagDto,
  ) {
    return this.tagService.updateTag(queryParams, dto, tagId);
  }

  @Delete(':tagId/delete')
  deleteTag(
    @Query() queryParams: DeleteTagQueryParams,
    @Param('tagId') tagId: string,
  ) {
    return this.tagService.deleteTag(queryParams, tagId);
  }
}
