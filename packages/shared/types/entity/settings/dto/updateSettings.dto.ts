// Validators
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsUUID,
} from "class-validator";
// Prisma
import { SettingsSidebarPosition } from "@prisma/client";

export class UpdateSettingsDto {
  @IsEnum(SettingsSidebarPosition)
  @IsOptional()
  sidebarPosition?: SettingsSidebarPosition;

  @IsNumber()
  @IsOptional()
  warningOverlayTimeInSeconds?: number;

  @IsBoolean()
  @IsOptional()
  purgeDirectly?: boolean;

  @IsBoolean()
  @IsOptional()
  allowNotifications?: boolean;

  @IsUUID()
  @IsOptional()
  userId?: string;
}
