// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { createTagDtoOptions } from '../options/parameter';
// Prisma
import { TagFontFamily } from '@prisma/client';
// Validators
import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsArray,
  IsUUID,
} from 'class-validator';

export class CreateTagDtoSwaggerWrapper {
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
