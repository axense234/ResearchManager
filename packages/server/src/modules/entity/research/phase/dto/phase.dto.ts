// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsArray, IsOptional, IsString, IsUUID } from 'class-validator';
// Data
import {
  createResearchPhaseDtoOptions,
  updateResearchPhaseDtoOptions,
} from '../data/swagger/options/parameter';

export class CreateResearchPhaseDto {
  @ApiProperty(createResearchPhaseDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(createResearchPhaseDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(createResearchPhaseDtoOptions['researchActivityId'])
  @IsUUID()
  researchActivityId: string;

  @ApiProperty(createResearchPhaseDtoOptions['userIdForArchivePurposes'])
  @IsUUID()
  userIdForArchivePurposes: string;

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

export class UpdateResearchPhaseDto {
  @ApiProperty(updateResearchPhaseDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(updateResearchPhaseDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(updateResearchPhaseDtoOptions['researchActivityId'])
  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @ApiProperty(updateResearchPhaseDtoOptions['userIdForArchivePurposes'])
  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes?: string;

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
