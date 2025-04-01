// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { createSettingsDtoOptions } from '../options/parameter';
// Prisma
import { SettingsSidebarPosition } from '@prisma/client';
// Validators
import {
  IsEnum,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsUUID,
} from 'class-validator';

export class CreateSettingsDtoSwaggerWrapper {
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
