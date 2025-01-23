// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { TagController } from './tag.controller';
// Services
import { TagService } from './services/tag.service';
import { GetTagService } from './services/getTag.service';
import { GetTagsService } from './services/getTags.service';
import { CreateTagService } from './services/createTag.service';
import { UpdateTagService } from './services/updateTag.service';
import { DeleteTagService } from './services/deleteTag.service';

@Module({
  providers: [
    TagService,
    GetTagService,
    GetTagsService,
    CreateTagService,
    UpdateTagService,
    DeleteTagService,
  ],
  controllers: [TagController],
})
export class TagModule {}
