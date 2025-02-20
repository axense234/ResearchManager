// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsArray, IsOptional, IsString, IsUUID } from 'class-validator';
// Data
import {
  createResearchActivityDtoOptions,
  updateResearchActivityDtoOptions,
} from '../data/swagger/options/parameter';

export class CreateResearchActivityDto {
  @ApiProperty(createResearchActivityDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

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

  @ApiProperty(createResearchActivityDtoOptions['userIdForArchivePurposes'])
  @IsUUID()
  userIdForArchivePurposes: string;
}

export class UpdateResearchActivityDto {
  @ApiProperty(updateResearchActivityDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

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

  @ApiProperty(updateResearchActivityDtoOptions['userIdForArchivePurposes'])
  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes?: string;
}
