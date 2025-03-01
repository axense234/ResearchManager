// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Prisma
import { SettingsSidebarPosition } from '@prisma/client';
// Validators
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';
// Data
import {
  createSettingsDtoOptions,
  updateSettingsDtoOptions,
} from '../data/swagger/options/parameter';

export class CreateSettingsDto {
  @ApiProperty(createSettingsDtoOptions['sidebarPosition'])
  @IsEnum(SettingsSidebarPosition)
  @IsOptional()
  sidebarPosition?: SettingsSidebarPosition;

  @ApiProperty(createSettingsDtoOptions['warningOverlayTimeInSeconds'])
  @IsNumber()
  @IsOptional()
  warningOverlayTimeInSeconds?: number;

  @ApiProperty(createSettingsDtoOptions['purgeDirectly'])
  @IsBoolean()
  @IsOptional()
  purgeDirectly?: boolean;

  @ApiProperty(createSettingsDtoOptions['allowNotifications'])
  @IsBoolean()
  @IsOptional()
  allowNotifications?: boolean;

  @ApiProperty(createSettingsDtoOptions['userId'])
  @IsUUID()
  userId: string;
}

export class UpdateSettingsDto {
  @ApiProperty(updateSettingsDtoOptions['sidebarPosition'])
  @IsEnum(SettingsSidebarPosition)
  @IsOptional()
  sidebarPosition?: SettingsSidebarPosition;

  @ApiProperty(updateSettingsDtoOptions['warningOverlayTimeInSeconds'])
  @IsNumber()
  @IsOptional()
  warningOverlayTimeInSeconds?: number;

  @ApiProperty(updateSettingsDtoOptions['purgeDirectly'])
  @IsBoolean()
  @IsOptional()
  purgeDirectly?: boolean;

  @ApiProperty(updateSettingsDtoOptions['allowNotifications'])
  @IsBoolean()
  @IsOptional()
  allowNotifications?: boolean;

  @ApiProperty(updateSettingsDtoOptions['userId'])
  @IsUUID()
  @IsOptional()
  userId?: string;
}
