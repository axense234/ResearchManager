// Validators
import { Type } from 'class-transformer';
import {
  IsUUID,
  IsOptional,
  IsDateString,
  IsString,
  IsEmail,
  ValidateNested,
} from 'class-validator';

export class UserWhereObject {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  hash?: string;

  @IsString()
  @IsOptional()
  backgroundImageSrc?: string;

  @IsString()
  @IsOptional()
  profileImageSrc?: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @Type(() => UserWhereObject)
  @IsOptional()
  AND?: UserWhereObject;

  @Type(() => UserWhereObject)
  @IsOptional()
  NOT?: UserWhereObject;

  @ValidateNested()
  @Type(() => UserWhereObject)
  @IsOptional()
  OR?: UserWhereObject[];
}
