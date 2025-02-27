// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Prisma
import { ResearchSessionStatusType } from '@prisma/client';
// Class Validators
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
// Dtos
import {
  createResearchSessionDtoOptions,
  updateResearchSessionDtoOptions,
} from '../data/swagger/options/parameter/dto';

export class CreateResearchSessionDto {
  @ApiProperty(createResearchSessionDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(createResearchSessionDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(createResearchSessionDtoOptions['researchPoints'])
  @IsNumber()
  @IsOptional()
  researchPoints?: number;

  @ApiProperty(createResearchSessionDtoOptions['content'])
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty(createResearchSessionDtoOptions['imagesSrc'])
  @IsArray()
  @IsOptional()
  imagesSrc?: string[];

  @ApiProperty(createResearchSessionDtoOptions['currentStatusType'])
  @IsEnum(ResearchSessionStatusType)
  @IsOptional()
  currentStatusType?: ResearchSessionStatusType;

  @ApiProperty(createResearchSessionDtoOptions['currentStatusDate'])
  @IsDateString()
  @IsOptional()
  currentStatusDate?: Date;

  @ApiProperty(createResearchSessionDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty(createResearchSessionDtoOptions['userIdForArchivePurposes'])
  @IsUUID()
  userIdForArchivePurposes: string;

  @ApiProperty(createResearchSessionDtoOptions['researchPhaseId'])
  @IsUUID()
  researchPhaseId: string;
}

export class UpdateResearchSessionDto {
  @ApiProperty(updateResearchSessionDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(updateResearchSessionDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(updateResearchSessionDtoOptions['researchPoints'])
  @IsNumber()
  @IsOptional()
  researchPoints?: number;

  @ApiProperty(updateResearchSessionDtoOptions['content'])
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty(updateResearchSessionDtoOptions['imagesSrc'])
  @IsArray()
  @IsOptional()
  imagesSrc?: string[];

  @ApiProperty(updateResearchSessionDtoOptions['currentStatusType'])
  @IsEnum(ResearchSessionStatusType)
  @IsOptional()
  currentStatusType?: ResearchSessionStatusType;

  @ApiProperty(updateResearchSessionDtoOptions['currentStatusDate'])
  @IsDateString()
  @IsOptional()
  currentStatusDate?: Date;

  @ApiProperty(updateResearchSessionDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty(updateResearchSessionDtoOptions['userIdForArchivePurposes'])
  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes?: string;

  @ApiProperty(updateResearchSessionDtoOptions['researchPhaseId'])
  @IsUUID()
  @IsOptional()
  researchPhaseId?: string;
}
