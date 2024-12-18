// NestJS
import { Module } from '@nestjs/common';
// Services
import { SettingService } from './setting.service';
// Controllers
import { SettingController } from './setting.controller';

@Module({
  providers: [SettingService],
  controllers: [SettingController],
})
export class SettingModule {}
