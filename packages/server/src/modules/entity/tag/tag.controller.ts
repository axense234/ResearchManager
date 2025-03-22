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
import { CreateTagDto, UpdateTagDto } from '@researchmanager/shared/types';
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
// Swagger
import { ApiTags } from '@nestjs/swagger';
// Custom Decorators
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';
import { SwaggerAuth } from 'src/decorators/swagger/swaggerAuth.decorator';
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerPathParams } from 'src/decorators/swagger/swaggerPathParams.decorator';

@JwtAuth()
@SwaggerAuth()
@ApiTags('Tags')
@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}

  @SwaggerHead('tag', 'GET MULTIPLE')
  @SwaggerResponses('tag', 'GET MULTIPLE')
  @Get()
  getTags(@Query() queryParams: GetTagsQueryParams, @Req() req: Request) {
    return this.tagService.getTags(queryParams, req.url);
  }

  @SwaggerHead('tag', 'GET SINGLE')
  @SwaggerResponses('tag', 'GET SINGLE')
  @SwaggerPathParams('tag', 'GET SINGLE')
  @Get(':tagId')
  getTag(
    @Query() queryParams: GetTagQueryParams,
    @Param('tagId') tagId: string,
    @Req() req: Request,
  ) {
    return this.tagService.getTag(queryParams, tagId, req.url);
  }

  @SwaggerHead('tag', 'CREATE')
  @SwaggerBody('tag', 'CREATE')
  @SwaggerResponses('tag', 'CREATE')
  @Post('create')
  createTag(
    @Query() queryParams: CreateTagQueryParams,
    @Body() dto: CreateTagDto,
  ) {
    return this.tagService.createTag(queryParams, dto);
  }

  @SwaggerHead('tag', 'UPDATE')
  @SwaggerBody('tag', 'UPDATE')
  @SwaggerResponses('tag', 'UPDATE')
  @SwaggerPathParams('tag', 'UPDATE')
  @Patch(':tagId/update')
  updateTag(
    @Query() queryParams: UpdateTagQueryParams,
    @Param('tagId') tagId: string,
    @Body() dto: UpdateTagDto,
  ) {
    return this.tagService.updateTag(queryParams, dto, tagId);
  }

  @SwaggerHead('tag', 'DELETE')
  @SwaggerResponses('tag', 'DELETE')
  @SwaggerPathParams('tag', 'DELETE')
  @Delete(':tagId/delete')
  deleteTag(
    @Query() queryParams: DeleteTagQueryParams,
    @Param('tagId') tagId: string,
  ) {
    return this.tagService.deleteTag(queryParams, tagId);
  }
}
