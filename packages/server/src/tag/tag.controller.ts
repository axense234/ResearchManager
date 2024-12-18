// NestJS
import {
  Body,
  Controller,
  Get,
  Param,
  Query,
  UseGuards,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';
// Services
import { TagService } from './tag.service';
// Dtos
import { CreateTagDto, UpdateTagDto } from './dto';

@UseGuards(JwtGuard)
@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  getTags(@Query('userId') userId: string) {
    return this.tagService.getTags(userId);
  }

  @Get(':tagId')
  getTag(@Param('tagId') tagId: string) {
    return this.tagService.getTag(tagId);
  }

  @Post('create')
  createTag(@Body() dto: CreateTagDto) {
    return this.tagService.createTag(dto);
  }

  @Patch(':tagId/update')
  updateTag(@Param('tagId') tagId: string, @Body() dto: UpdateTagDto) {
    return this.tagService.updateTag(dto, tagId);
  }

  @Delete(':tagId/delete')
  deleteTag(@Param('tagId') tagId: string) {
    return this.tagService.deleteTag(tagId);
  }
}
