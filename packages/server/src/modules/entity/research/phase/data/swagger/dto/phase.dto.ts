// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
// Data
import {
  createResearchPhaseDtoOptions,
  updateResearchPhaseDtoOptions,
} from '../options/parameter';

export class CreateResearchPhaseDtoSwaggerWrapper {
  @ApiProperty(createResearchPhaseDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(createResearchPhaseDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty(createResearchPhaseDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(createResearchPhaseDtoOptions['researchActivityId'])
  @IsUUID()
  researchActivityId: string;

  @ApiProperty(createResearchPhaseDtoOptions['researchLogs'])
  @IsArray()
  @IsOptional()
  researchLogs?: string[];

  @ApiProperty(createResearchPhaseDtoOptions['researchSessions'])
  @IsArray()
  @IsOptional()
  researchSessions?: string[];

  @ApiProperty(createResearchPhaseDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];
}

export class UpdateResearchPhaseDtoSwaggerWrapper {
  @ApiProperty(updateResearchPhaseDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(updateResearchPhaseDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty(updateResearchPhaseDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(updateResearchPhaseDtoOptions['researchActivityId'])
  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @ApiProperty(updateResearchPhaseDtoOptions['researchLogs'])
  @IsArray()
  @IsOptional()
  researchLogs?: string[];

  @ApiProperty(updateResearchPhaseDtoOptions['researchSessions'])
  @IsArray()
  @IsOptional()
  researchSessions?: string[];

  @ApiProperty(updateResearchPhaseDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];
}
