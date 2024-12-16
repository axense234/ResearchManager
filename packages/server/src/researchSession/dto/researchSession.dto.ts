// Prisma Enum
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

  @IsUUID()
  userIdForArchivePurposes: string;

  @IsUUID()
  researchPhaseId: string;
}
