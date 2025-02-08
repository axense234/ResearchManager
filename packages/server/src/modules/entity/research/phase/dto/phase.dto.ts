// Validators
import { IsArray, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateResearchPhaseDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsUUID()
  researchActivityId: string;

  @IsUUID()
  userIdForArchivePurposes: string;

  @IsArray()
  @IsOptional()
  researchLogs: string[];

  @IsArray()
  @IsOptional()
  researchSessions: string[];

  @IsArray()
  @IsOptional()
  tags: string[];
}

export class UpdateResearchPhaseDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsUUID()
  @IsOptional()
  researchActivityId: string;

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes: string;

  @IsArray()
  @IsOptional()
  researchLogs: string[];

  @IsArray()
  @IsOptional()
  researchSessions: string[];

  @IsArray()
  @IsOptional()
  tags: string[];
}
