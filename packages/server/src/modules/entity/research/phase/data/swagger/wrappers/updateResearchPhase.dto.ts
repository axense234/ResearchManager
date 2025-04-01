// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { updateResearchPhaseDtoOptions } from '../options/parameter';
// Validators
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsArray,
} from 'class-validator';

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
