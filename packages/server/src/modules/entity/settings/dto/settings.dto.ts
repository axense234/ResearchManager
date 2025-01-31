// Validators
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateSettingsDto {
  @IsString()
  sidebarPosition: 'left' | 'right';

  @IsNumber()
  warningOverlayTimeInSeconds: number;

  @IsBoolean()
  purgeDirectly: boolean;

  @IsBoolean()
  allowNotifications: boolean;

  @IsUUID()
  userId: string;
}

export class UpdateSettingsDto {
  @IsString()
  @IsOptional()
  sidebarPosition: 'left' | 'right';

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
  @IsOptional()
  userId: string;
}
