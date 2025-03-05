// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Prisma
import { TagFontFamily } from '@prisma/client';
// Validators
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
// Options
import {
  createTagDtoOptions,
  updateTagDtoOptions,
} from '../data/swagger/options/parameter';

export class CreateTagDto {
  @ApiProperty(createTagDtoOptions['title'])
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty(createTagDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(createTagDtoOptions['fontSize'])
  @IsNumber()
  @IsOptional()
  fontSize?: number;

  @ApiProperty(createTagDtoOptions['fontFamily'])
  @IsString()
  @IsOptional()
  fontFamily?: TagFontFamily;

  @ApiProperty(createTagDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty(createTagDtoOptions['researchActivities'])
  @IsArray()
  @IsOptional()
  researchActivities?: string[];

  @ApiProperty(createTagDtoOptions['researchPhases'])
  @IsArray()
  @IsOptional()
  researchPhases?: string[];

  @ApiProperty(createTagDtoOptions['researchLogs'])
  @IsArray()
  @IsOptional()
  researchLogs?: string[];

  @ApiProperty(createTagDtoOptions['researchSessions'])
  @IsArray()
  @IsOptional()
  researchSessions?: string[];

  @ApiProperty(createTagDtoOptions['userId'])
  @IsUUID()
  userId: string;
}

export class UpdateTagDto {
  @ApiProperty(updateTagDtoOptions['title'])
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty(updateTagDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(updateTagDtoOptions['fontSize'])
  @IsNumber()
  @IsOptional()
  fontSize?: number;

  @ApiProperty(updateTagDtoOptions['fontFamily'])
  @IsString()
  @IsOptional()
  fontFamily?: TagFontFamily;

  @ApiProperty(updateTagDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty(updateTagDtoOptions['researchActivities'])
  @IsArray()
  @IsOptional()
  researchActivities?: string[];

  @ApiProperty(updateTagDtoOptions['researchPhases'])
  @IsArray()
  @IsOptional()
  researchPhases?: string[];

  @ApiProperty(updateTagDtoOptions['researchLogs'])
  @IsArray()
  @IsOptional()
  researchLogs?: string[];

  @ApiProperty(updateTagDtoOptions['researchSessions'])
  @IsArray()
  @IsOptional()
  researchSessions?: string[];

  @ApiProperty(updateTagDtoOptions['userId'])
  @IsUUID()
  @IsOptional()
  userId?: string;
}
