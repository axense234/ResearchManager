// Validators
import {
  IsString,
  IsUUID,
  IsBoolean,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class SettingsCreateDataObject {
  @IsString()
  @IsOptional()
  sidebarPosition: 'LEFT' | 'RIGHT';

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
