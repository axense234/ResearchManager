import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateResearchLogDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsNumber()
  @IsOptional()
  researchPoints: number;

  @IsString()
  @IsOptional()
  content: string;

  @IsArray()
  @IsOptional()
  imagesSrc: string[];

  @IsUUID()
  userIdForArchivePurposes: string;

  @IsUUID()
  researchPhaseId: string;
}

export class UpdateResearchLogDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsNumber()
  @IsOptional()
  researchPoints: number;

  @IsString()
  @IsOptional()
  content: string;

  @IsArray()
  @IsOptional()
  imagesSrc: string[];

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes: string;

  @IsUUID()
  @IsOptional()
  researchPhaseId: string;
}
