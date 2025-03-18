// Validators
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
// Prisma
import { TagFontFamily } from "@prisma/client";

export class CreateTagDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @IsNumber()
  @IsOptional()
  fontSize?: number;

  @IsString()
  @IsOptional()
  fontFamily?: TagFontFamily;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @IsArray()
  @IsOptional()
  researchActivities?: string[];

  @IsArray()
  @IsOptional()
  researchPhases?: string[];

  @IsArray()
  @IsOptional()
  researchLogs?: string[];

  @IsArray()
  @IsOptional()
  researchSessions?: string[];

  @IsUUID()
  userId: string;
}
