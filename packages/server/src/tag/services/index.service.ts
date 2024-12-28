// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetTagsService } from './getTags.service';
import { GetTagService } from './getTag.service';
import { CreateTagService } from './createTag.service';
import { UpdateTagService } from './updateTag.service';
import { DeleteTagService } from './deleteTag.service';

@Injectable()
export class TagService {
  constructor(
    public GetTagsService: GetTagsService,
    public GetTagService: GetTagService,
    public CreateTagService: CreateTagService,
    public UpdateTagService: UpdateTagService,
    public DeleteTagService: DeleteTagService,
  ) {}
}
