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
import { JwtGuard } from 'src/auth/guard';
// Services
import { SettingService } from './services/setting.service';
// Dtos
import { CreateSettingDto, UpdateSettingDto } from './dto';

@UseGuards(JwtGuard)
@Controller('settings')
export class SettingController {
  constructor(private settingService: SettingService) {}

  @Get()
  getSettings(@Query('userId') userId: string, @Req() req: Request) {
    return this.settingService.getSettings(userId, req.url);
  }

  @Get(':settingId')
  getSetting(@Param('settingId') settingId: string, @Req() req: Request) {
    return this.settingService.getSetting(settingId, req.url);
  }

  @Post('create')
  createSetting(@Body() dto: CreateSettingDto) {
    return this.settingService.createSetting(dto);
  }

  @Patch(':settingId/update')
  updateSetting(
    @Param('settingId') settingId: string,
    @Body() dto: UpdateSettingDto,
  ) {
    return this.settingService.updateSetting(dto, settingId);
  }

  @Delete(':settingId/delete')
  deleteSetting(@Param('settingId') settingId: string) {
    return this.settingService.deleteSetting(settingId);
  }
}
