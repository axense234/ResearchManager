// Validators
import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsUUID,
} from 'class-validator';

export class SettingsUpdateDataObject {
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
  @IsOptional()
  userId: string;
}
