// Prisma
import { TagFontFamily } from '@prisma/client';
// Validators
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTagDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsNumber()
  @IsOptional()
  fontSize: number;

  @IsString()
  @IsOptional()
  fontFamily: TagFontFamily;

  @IsArray()
  @IsOptional()
  researchActivities: string[];

  @IsArray()
  @IsOptional()
  researchPhases: string[];

  @IsArray()
  @IsOptional()
  researchLogs: string[];

  @IsArray()
  @IsOptional()
  researchSessions: string[];

  @IsUUID()
  userId: string;

  @IsUUID()
  userIdForArchivePurposes: string;
}

export class UpdateTagDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsNumber()
  @IsOptional()
  fontSize: number;

  @IsString()
  @IsOptional()
  fontFamily: TagFontFamily;

  @IsArray()
  @IsOptional()
  researchActivities: string[];

  @IsArray()
  @IsOptional()
  researchPhases: string[];

  @IsArray()
  @IsOptional()
  researchLogs: string[];

  @IsArray()
  @IsOptional()
  researchSessions: string[];

  @IsUUID()
  @IsOptional()
  userId: string;

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes: string;
}
