// NestJS
import { Module } from '@nestjs/common';
// Services
import { SettingService } from './services/index.service';
// Controllers
import { SettingController } from './setting.controller';

@Module({
  providers: [SettingService],
  controllers: [SettingController],
})
export class SettingModule {}
