// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { SettingsController } from './settings.controller';
// Services
import { SettingsService } from './services/settings.service';
import { CreateSettingsService } from './services/createSettings.service';
import { DeleteSettingsService } from './services/deleteSettings.service';
import { GetManySettingsService } from './services/getManySettings.service';
import { GetSettingsService } from './services/getSettings.service';
import { UpdateSettingsService } from './services/updateSettings.service';

@Module({
  providers: [
    SettingsService,
    GetManySettingsService,
    GetSettingsService,
    CreateSettingsService,
    UpdateSettingsService,
    DeleteSettingsService,
  ],
  controllers: [SettingsController],
})
export class SettingModule {}
