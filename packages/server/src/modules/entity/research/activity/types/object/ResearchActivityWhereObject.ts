import { Type } from 'class-transformer';
import {
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class ResearchActivityWhereCustomObject {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  name?: string;

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

  @Type(() => ResearchActivityWhereCustomObject)
  @IsOptional()
  AND?: ResearchActivityWhereCustomObject;

  @Type(() => ResearchActivityWhereCustomObject)
  @IsOptional()
  NOT?: ResearchActivityWhereCustomObject;

  @ValidateNested()
  @Type(() => ResearchActivityWhereCustomObject)
  @IsOptional()
  OR?: ResearchActivityWhereCustomObject[];
}
