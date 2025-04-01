// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { updateTagDtoOptions } from '../options/parameter';
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

export class UpdateTagDtoSwaggerWrapper {
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
