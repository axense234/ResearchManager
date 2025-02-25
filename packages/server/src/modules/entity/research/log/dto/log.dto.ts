// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
// Data
import {
  createResearchLogDtoOptions,
  updateResearchLogDtoOptions,
} from '../data/swagger/options/parameter';

export class CreateResearchLogDto {
  @ApiProperty(createResearchLogDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

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

  @ApiProperty(createResearchLogDtoOptions['userIdForArchivePurposes'])
  @IsUUID()
  userIdForArchivePurposes: string;

  @ApiProperty(createResearchLogDtoOptions['researchPhaseId'])
  @IsUUID()
  researchPhaseId: string;
}

export class UpdateResearchLogDto {
  @ApiProperty(updateResearchLogDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

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

  @ApiProperty(updateResearchLogDtoOptions['userIdForArchivePurposes'])
  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes?: string;

  @ApiProperty(updateResearchLogDtoOptions['researchPhaseId'])
  @IsUUID()
  @IsOptional()
  researchPhaseId?: string;
}
