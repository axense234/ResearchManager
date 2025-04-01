// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { updateResearchLogDtoOptions } from '../options/parameter';
// Validators
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsArray,
  IsUUID,
} from 'class-validator';

export class UpdateResearchLogDtoSwaggerWrapper {
  @ApiProperty(updateResearchLogDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(updateResearchLogDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty(updateResearchLogDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(updateResearchLogDtoOptions['researchPoints'])
  @IsNumber()
  @IsOptional()
  researchPoints?: number;

  @ApiProperty(updateResearchLogDtoOptions['content'])
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty(updateResearchLogDtoOptions['imagesSrc'])
  @IsArray()
  @IsOptional()
  imagesSrc?: string[];

  @ApiProperty(updateResearchLogDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty(updateResearchLogDtoOptions['researchPhaseId'])
  @IsUUID()
  @IsOptional()
  researchPhaseId?: string;
}
