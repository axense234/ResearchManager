// Validators
import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsUUID,
  ValidateNested,
  IsDateString,
} from 'class-validator';

export class SettingsWhereObject {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  sidebarPosition?: 'LEFT' | 'RIGHT';

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

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @Type(() => SettingsWhereObject)
  @IsOptional()
  AND?: SettingsWhereObject;

  @Type(() => SettingsWhereObject)
  @IsOptional()
  NOT?: SettingsWhereObject;

  @ValidateNested()
  @Type(() => SettingsWhereObject)
  @IsOptional()
  OR?: SettingsWhereObject[];
}
