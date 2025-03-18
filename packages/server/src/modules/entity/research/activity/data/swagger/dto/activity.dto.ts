// Validators
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
// Data
import {
  createResearchActivityDtoOptions,
  updateResearchActivityDtoOptions,
} from '../options/parameter';

export class CreateResearchActivityDtoSwaggerWrapper {
  @ApiProperty(createResearchActivityDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(createResearchActivityDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty(createResearchActivityDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(createResearchActivityDtoOptions['researchPhases'])
  @IsArray()
  @IsOptional()
  researchPhases?: string[];

  @ApiProperty(createResearchActivityDtoOptions['activityFeed'])
  @IsString()
  @IsOptional()
  activityFeed?: string;

  @ApiProperty(createResearchActivityDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty(createResearchActivityDtoOptions['userId'])
  @IsUUID()
  userId: string;
}

export class UpdateResearchActivityDtoSwaggerWrapper {
  @ApiProperty(updateResearchActivityDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(updateResearchActivityDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty(updateResearchActivityDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(updateResearchActivityDtoOptions['researchPhases'])
  @IsArray()
  @IsOptional()
  researchPhases?: string[];

  @ApiProperty(updateResearchActivityDtoOptions['activityFeed'])
  @IsString()
  @IsOptional()
  activityFeed?: string;

  @ApiProperty(updateResearchActivityDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty(updateResearchActivityDtoOptions['userId'])
  @IsUUID()
  @IsOptional()
  userId?: string;
}
