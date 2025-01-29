// Validators
import { Type } from 'class-transformer';
import {
  IsUUID,
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  ValidateNested,
} from 'class-validator';

export class ResearchSessionWhereObject {
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

  @IsDateString()
  @IsOptional()
  currentStatusDate?: Date;

  @IsString()
  @IsOptional()
  currentStatusType?: 'FINISHED' | 'RESUMED' | 'PAUSED' | 'STARTED';

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

  @Type(() => ResearchSessionWhereObject)
  @IsOptional()
  AND?: ResearchSessionWhereObject;

  @Type(() => ResearchSessionWhereObject)
  @IsOptional()
  NOT?: ResearchSessionWhereObject;

  @ValidateNested()
  @Type(() => ResearchSessionWhereObject)
  @IsOptional()
  OR?: ResearchSessionWhereObject[];
}
