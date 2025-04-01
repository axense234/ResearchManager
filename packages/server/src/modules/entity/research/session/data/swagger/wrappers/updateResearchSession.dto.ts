// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { updateResearchSessionDtoOptions } from '../options/parameter';
// Prisma
import { ResearchSessionStatusType } from '@prisma/client';
// Validators
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsArray,
  IsEnum,
  IsDateString,
  IsUUID,
} from 'class-validator';

export class UpdateResearchSessionDtoSwaggerWrapper {
  @ApiProperty(updateResearchSessionDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(updateResearchSessionDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

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

  @ApiProperty(updateResearchSessionDtoOptions['researchPhaseId'])
  @IsUUID()
  @IsOptional()
  researchPhaseId?: string;
}
