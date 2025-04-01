// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { createResearchSessionDtoOptions } from '../options/parameter';
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

export class CreateResearchSessionDtoSwaggerWrapper {
  @ApiProperty(createResearchSessionDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(createResearchSessionDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

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

  @ApiProperty(createResearchSessionDtoOptions['researchPhaseId'])
  @IsUUID()
  researchPhaseId: string;
}
