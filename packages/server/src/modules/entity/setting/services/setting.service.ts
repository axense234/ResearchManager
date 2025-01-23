// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetSettingsService } from './getSettings.service';
import { GetSettingService } from './getSetting.service';
import { CreateSettingService } from './createSetting.service';
import { UpdateSettingService } from './updateSetting.service';
import { DeleteSettingService } from './deleteSetting.service';
// Dtos
import { CreateSettingDto, UpdateSettingDto } from '../dto';

@Injectable()
export class SettingService {
  constructor(
    private getSettingsService: GetSettingsService,
    private getSettingService: GetSettingService,
    private createSettingService: CreateSettingService,
    private updateSettingService: UpdateSettingService,
    private deleteSettingService: DeleteSettingService,
  ) {}

  async getSettings(userId?: string, url?: string) {
    return await this.getSettingsService.getSettings(userId, url);
  }

  async getSetting(settingId: string, url: string) {
    return await this.getSettingService.getSetting(settingId, url);
  }

  async createSetting(dto: CreateSettingDto) {
    return await this.createSettingService.createSetting(dto);
  }

  async updateSetting(dto: UpdateSettingDto, settingId: string) {
    return await this.updateSettingService.updateSetting(dto, settingId);
  }

  async deleteSetting(settingId: string) {
    return await this.deleteSettingService.deleteSetting(settingId);
  }
}
