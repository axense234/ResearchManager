// Validators
import { Type } from 'class-transformer';
import {
  IsUUID,
  IsOptional,
  IsString,
  IsDateString,
  ValidateNested,
  IsNumber,
} from 'class-validator';

export class ResearchLogWhereObject {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsNumber()
  @IsOptional()
  researchPoints?: number;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @IsUUID()
  @IsOptional()
  researchPhaseId?: string;

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes?: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @Type(() => ResearchLogWhereObject)
  @IsOptional()
  AND?: ResearchLogWhereObject;

  @Type(() => ResearchLogWhereObject)
  @IsOptional()
  NOT?: ResearchLogWhereObject;

  @ValidateNested()
  @Type(() => ResearchLogWhereObject)
  @IsOptional()
  OR?: ResearchLogWhereObject[];
}
