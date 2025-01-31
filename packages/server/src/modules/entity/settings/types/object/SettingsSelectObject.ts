// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class SettingsSelectObject {
  @IsBoolean()
  @IsOptional()
  id?: boolean;

  @IsBoolean()
  @IsOptional()
  sidebarPosition?: boolean;

  @IsBoolean()
  @IsOptional()
  warningOverlayTimeInSeconds?: boolean;

  @IsBoolean()
  @IsOptional()
  purgeDirectly?: boolean;

  @IsBoolean()
  @IsOptional()
  allowNotifications?: boolean;

  @IsBoolean()
  @IsOptional()
  userId?: boolean;

  @IsBoolean()
  @IsOptional()
  user?: boolean;

  @IsBoolean()
  @IsOptional()
  updatedAt?: boolean;

  @IsBoolean()
  @IsOptional()
  createdAt?: boolean;
}
