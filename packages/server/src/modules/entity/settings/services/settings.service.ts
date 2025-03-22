// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetSettingsService } from './getSettings.service';
import { GetManySettingsService } from './getManySettings.service';
import { CreateSettingsService } from './createSettings.service';
import { UpdateSettingsService } from './updateSettings.service';
import { DeleteSettingsService } from './deleteSettings.service';
// Types
import {
  CreateSettingsQueryParams,
  DeleteSettingsQueryParams,
  GetManySettingsQueryParams,
  GetSettingsQueryParams,
  UpdateSettingsQueryParams,
} from '../types';
// Dtos
import {
  CreateSettingsDto,
  UpdateSettingsDto,
} from '@researchmanager/shared/types';

@Injectable()
export class SettingsService {
  constructor(
    private getSettingsService: GetSettingsService,
    private getManySettingsService: GetManySettingsService,
    private createSettingsService: CreateSettingsService,
    private updateSettingsService: UpdateSettingsService,
    private deleteSettingsService: DeleteSettingsService,
  ) {}

  async getManySettings(queryParams: GetManySettingsQueryParams, url: string) {
    return await this.getManySettingsService.getManySettings(queryParams, url);
  }

  async getSettings(
    queryParams: GetSettingsQueryParams,
    settingId: string,
    url: string,
  ) {
    return await this.getSettingsService.getSettings(
      queryParams,
      settingId,
      url,
    );
  }

  async createSettings(
    queryParams: CreateSettingsQueryParams,
    dto: CreateSettingsDto,
  ) {
    return await this.createSettingsService.createSettings(queryParams, dto);
  }

  async updateSettings(
    queryParams: UpdateSettingsQueryParams,
    dto: UpdateSettingsDto,
    settingId: string,
  ) {
    return await this.updateSettingsService.updateSettings(
      queryParams,
      dto,
      settingId,
    );
  }

  async deleteSettings(
    queryParams: DeleteSettingsQueryParams,
    settingId: string,
  ) {
    return await this.deleteSettingsService.deleteSettings(
      queryParams,
      settingId,
    );
  }
}
