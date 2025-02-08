// Prisma
import { SettingsSidebarPosition } from '@prisma/client';
// Validators
import {
  IsUUID,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsEnum,
} from 'class-validator';

export class SettingsCreateDataObject {
  @IsEnum(SettingsSidebarPosition)
  @IsOptional()
  sidebarPosition: SettingsSidebarPosition;

  @IsNumber()
  @IsOptional()
  warningOverlayTimeInSeconds: number;

  @IsBoolean()
  @IsOptional()
  purgeDirectly: boolean;

  @IsBoolean()
  @IsOptional()
  allowNotifications: boolean;

  @IsUUID()
  userId: string;
}
