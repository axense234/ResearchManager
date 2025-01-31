// NestJS
import {
  Controller,
  Query,
  UseGuards,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Patch,
  Req,
} from '@nestjs/common';
// Custom Guard
import { JwtGuard } from 'src/modules/entity/auth/guard';
// Services
import { SettingsService } from './services/settings.service';
// Dtos
import { CreateSettingsDto, UpdateSettingsDto } from './dto';
// Types
import {
  CreateSettingsQueryParams,
  DeleteSettingsQueryParams,
  GetManySettingsQueryParams,
  GetSettingsQueryParams,
  UpdateSettingsQueryParams,
} from './types';

@UseGuards(JwtGuard)
@Controller('settings')
export class SettingsController {
  constructor(private settingsService: SettingsService) {}

  @Get()
  getManySettings(
    @Query() queryParams: GetManySettingsQueryParams,
    @Req() req: Request,
  ) {
    return this.settingsService.getManySettings(queryParams, req.url);
  }

  @Get(':settingsId')
  getSettings(
    @Query() queryParams: GetSettingsQueryParams,
    @Param('settingsId') settingId: string,
    @Req() req: Request,
  ) {
    return this.settingsService.getSettings(queryParams, settingId, req.url);
  }

  @Post('create')
  createSettings(
    @Query() queryParams: CreateSettingsQueryParams,
    @Body() dto: CreateSettingsDto,
  ) {
    return this.settingsService.createSettings(queryParams, dto);
  }

  @Patch(':settingsId/update')
  updateSettings(
    @Query() queryParams: UpdateSettingsQueryParams,
    @Param('settingsId') settingsId: string,
    @Body() dto: UpdateSettingsDto,
  ) {
    return this.settingsService.updateSettings(queryParams, dto, settingsId);
  }

  @Delete(':settingsId/delete')
  deleteSettings(
    @Query() queryParams: DeleteSettingsQueryParams,
    @Param('settingsId') settingsId: string,
  ) {
    return this.settingsService.deleteSettings(queryParams, settingsId);
  }
}
