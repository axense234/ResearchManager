// Class Validators
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
// Prisma
import { ResearchSessionStatusType } from "@prisma/client";

export class CreateResearchSessionDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @IsNumber()
  @IsOptional()
  researchPoints?: number;

  @IsString()
  @IsOptional()
  content?: string;

  @IsArray()
  @IsOptional()
  imagesSrc?: string[];

  @IsEnum(ResearchSessionStatusType)
  @IsOptional()
  currentStatusType?: ResearchSessionStatusType;

  @IsDateString()
  @IsOptional()
  currentStatusDate?: Date;

  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsUUID()
  researchPhaseId: string;
}
