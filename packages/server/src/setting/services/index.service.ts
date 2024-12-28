// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetSettingsService } from './getSettings.service';
import { GetSettingService } from './getSetting.service';
import { CreateSettingService } from './createSetting.service';
import { UpdateSettingService } from './updateSetting.service';
import { DeleteSettingService } from './deleteSetting.service';

@Injectable()
export class SettingService {
  constructor(
    public GetSettingsService: GetSettingsService,
    public GetSettingService: GetSettingService,
    public CreateSettingService: CreateSettingService,
    public UpdateSettingService: UpdateSettingService,
    public DeleteSettingService: DeleteSettingService,
  ) {}
}
