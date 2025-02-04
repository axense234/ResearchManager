import { TagFontFamily } from '@prisma/client';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

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

  @IsUUID()
  @IsOptional()
  userId: string;

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes: string;
}
