// NestJS
import { Module } from '@nestjs/common';
// Services
import { TagService } from './tag.service';
// Controllers
import { TagController } from './tag.controller';

@Module({
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {}
