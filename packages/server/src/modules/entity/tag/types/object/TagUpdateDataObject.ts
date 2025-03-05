// Types
import { TagFontFamily } from '@prisma/client';
// Validators
import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class TagUpdateDataObject {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsString()
  @IsOptional()
  fontFamily: TagFontFamily;

  @IsNumber()
  @IsOptional()
  fontSize: number;

  @IsNumber()
  @IsOptional()
  archived: boolean;

  @IsObject()
  @IsOptional()
  researchActivities: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  researchPhases: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  researchLogs: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  researchSessions: { connect: { id: string }[] };

  @IsUUID()
  @IsOptional()
  userId: string;
}
