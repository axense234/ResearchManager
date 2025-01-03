// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { SettingController } from './setting.controller';
// Services
import { SettingService } from './services/setting.service';
import { GetSettingsService } from './services/getSettings.service';
import { GetSettingService } from './services/getSetting.service';
import { CreateSettingService } from './services/createSetting.service';
import { UpdateSettingService } from './services/updateSetting.service';
import { DeleteSettingService } from './services/deleteSetting.service';

@Module({
  providers: [
    SettingService,
    GetSettingsService,
    GetSettingService,
    CreateSettingService,
    UpdateSettingService,
    DeleteSettingService,
  ],
  controllers: [SettingController],
})
export class SettingModule {}
