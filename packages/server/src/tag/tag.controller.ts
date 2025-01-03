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
  Req,
} from '@nestjs/common';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';
// Dtos
import { CreateTagDto, UpdateTagDto } from './dto';
// Services
import { TagService } from './services/tag.service';

@UseGuards(JwtGuard)
@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  getTags(@Query('userId') userId: string, @Req() req: Request) {
    return this.tagService.getTags(userId, req.url);
  }

  @Get(':tagId')
  getTag(@Param('tagId') tagId: string, @Req() req: Request) {
    return this.tagService.getTag(tagId, req.url);
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
