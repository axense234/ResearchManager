// Validators
import {
  IsUUID,
  IsOptional,
  IsString,
  IsDateString,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
// Types
import { TagFontFamily } from '@prisma/client';

export class TagWhereObject {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  fontSize?: number;

  @IsString()
  @IsOptional()
  fontFamily?: TagFontFamily;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes?: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @Type(() => TagWhereObject)
  @IsOptional()
  AND?: TagWhereObject;

  @Type(() => TagWhereObject)
  @IsOptional()
  NOT?: TagWhereObject;

  @ValidateNested()
  @Type(() => TagWhereObject)
  @IsOptional()
  OR?: TagWhereObject[];
}
