// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { createResearchPhaseDtoOptions } from '../options/parameter';
// Validators
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsArray,
} from 'class-validator';

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
