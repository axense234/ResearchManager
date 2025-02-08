// Prisma
import { ResearchSessionStatusType } from '@prisma/client';
// Class Validator
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateResearchSessionDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsNumber()
  @IsOptional()
  researchPoints: number;

  @IsString()
  @IsOptional()
  content: string;

  @IsArray()
  @IsOptional()
  imagesSrc: string[];

  @IsEnum(ResearchSessionStatusType)
  @IsOptional()
  currentStatusType: ResearchSessionStatusType;

  @IsDateString()
  @IsOptional()
  currentStatusDate: Date;

  @IsArray()
  @IsOptional()
  tags: string[];

  @IsUUID()
  userIdForArchivePurposes: string;

  @IsUUID()
  researchPhaseId: string;
}

export class UpdateResearchSessionDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsNumber()
  @IsOptional()
  researchPoints: number;

  @IsString()
  @IsOptional()
  content: string;

  @IsArray()
  @IsOptional()
  imagesSrc: string[];

  @IsEnum(ResearchSessionStatusType)
  @IsOptional()
  currentStatusType: ResearchSessionStatusType;

  @IsDateString()
  @IsOptional()
  currentStatusDate: Date;

  @IsArray()
  @IsOptional()
  tags: string[];

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes: string;

  @IsUUID()
  @IsOptional()
  researchPhaseId: string;
}
