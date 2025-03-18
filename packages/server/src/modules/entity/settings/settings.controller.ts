// NestJS
import {
  Controller,
  Query,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Patch,
  Req,
} from '@nestjs/common';
// Services
import { SettingsService } from './services/settings.service';
// Dtos
import type {
  CreateSettingsDto,
  UpdateSettingsDto,
} from '@researchmanager/shared/types';
// Types
import {
  CreateSettingsQueryParams,
  DeleteSettingsQueryParams,
  GetManySettingsQueryParams,
  GetSettingsQueryParams,
  UpdateSettingsQueryParams,
} from './types';
// Swagger
import { ApiTags } from '@nestjs/swagger';
// Custom Decorators
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';
import { SwaggerAuth } from 'src/decorators/swagger/swaggerAuth.decorator';
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerPathParams } from 'src/decorators/swagger/swaggerPathParams.decorator';

@JwtAuth()
@SwaggerAuth()
@ApiTags('Settings')
@Controller('settings')
export class SettingsController {
  constructor(private settingsService: SettingsService) {}

  @SwaggerHead('settings', 'GET MULTIPLE')
  @SwaggerResponses('settings', 'GET MULTIPLE')
  @Get()
  getManySettings(
    @Query() queryParams: GetManySettingsQueryParams,
    @Req() req: Request,
  ) {
    return this.settingsService.getManySettings(queryParams, req.url);
  }

  @SwaggerHead('settings', 'GET SINGLE')
  @SwaggerResponses('settings', 'GET SINGLE')
  @SwaggerPathParams('settings', 'GET SINGLE')
  @Get(':settingsId')
  getSettings(
    @Query() queryParams: GetSettingsQueryParams,
    @Param('settingsId') settingId: string,
    @Req() req: Request,
  ) {
    return this.settingsService.getSettings(queryParams, settingId, req.url);
  }

  @SwaggerHead('settings', 'CREATE')
  @SwaggerBody('settings', 'CREATE')
  @SwaggerResponses('settings', 'CREATE')
  @Post('create')
  createSettings(
    @Query() queryParams: CreateSettingsQueryParams,
    @Body() dto: CreateSettingsDto,
  ) {
    return this.settingsService.createSettings(queryParams, dto);
  }

  @SwaggerHead('settings', 'UPDATE')
  @SwaggerBody('settings', 'UPDATE')
  @SwaggerResponses('settings', 'UPDATE')
  @SwaggerPathParams('settings', 'UPDATE')
  @Patch(':settingsId/update')
  updateSettings(
    @Query() queryParams: UpdateSettingsQueryParams,
    @Param('settingsId') settingsId: string,
    @Body() dto: UpdateSettingsDto,
  ) {
    return this.settingsService.updateSettings(queryParams, dto, settingsId);
  }

  @SwaggerHead('settings', 'DELETE')
  @SwaggerResponses('settings', 'DELETE')
  @SwaggerPathParams('settings', 'DELETE')
  @Delete(':settingsId/delete')
  deleteSettings(
    @Query() queryParams: DeleteSettingsQueryParams,
    @Param('settingsId') settingsId: string,
  ) {
    return this.settingsService.deleteSettings(queryParams, settingsId);
  }
}
