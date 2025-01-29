// Validators
import {
  IsArray,
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class ResearchSessionCreateDataObject {
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
  researchPhaseId: string;

  @IsUUID()
  userIdForArchivePurposes: string;
}
