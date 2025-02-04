// Validators
import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
// Types
import { TagFontFamily } from '@prisma/client';

export class TagCreateDataObject {
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
  userId: string;

  @IsUUID()
  userIdForArchivePurposes: string;
}
