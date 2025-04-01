// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { updateSettingsDtoOptions } from '../options/parameter';
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

export class UpdateSettingsDtoSwaggerWrapper {
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
