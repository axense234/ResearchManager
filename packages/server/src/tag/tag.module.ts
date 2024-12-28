// NestJS
import { Module } from '@nestjs/common';
// Services
import { TagService } from './services/index.service';
// Controllers
import { TagController } from './tag.controller';

@Module({
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {}
