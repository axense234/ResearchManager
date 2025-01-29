// Validators
import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  IsArray,
  IsObject,
  IsUUID,
} from 'class-validator';

export class ResearchSessionUpdateDataObject {
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

  @IsArray()
  @IsOptional()
  imagesSrc?: string[];

  @IsObject()
  @IsOptional()
  tags?: { connect: { id: string }[] };

  @IsUUID()
  @IsOptional()
  researchPhaseId?: string;

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes?: string;
}
