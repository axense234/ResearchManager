// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { createResearchLogDtoOptions } from '../options/parameter';
// Validators
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsArray,
  IsUUID,
} from 'class-validator';

export class CreateResearchLogDtoSwaggerWrapper {
  @ApiProperty(createResearchLogDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(createResearchLogDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty(createResearchLogDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(createResearchLogDtoOptions['researchPoints'])
  @IsNumber()
  @IsOptional()
  researchPoints?: number;

  @ApiProperty(createResearchLogDtoOptions['content'])
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty(createResearchLogDtoOptions['imagesSrc'])
  @IsArray()
  @IsOptional()
  imagesSrc?: string[];

  @ApiProperty(createResearchLogDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty(createResearchLogDtoOptions['researchPhaseId'])
  @IsUUID()
  researchPhaseId: string;
}
