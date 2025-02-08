// Validators
import { IsArray, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateResearchActivityDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsArray()
  @IsOptional()
  researchPhases: string[];

  @IsString()
  @IsOptional()
  activityFeed: string;

  @IsArray()
  @IsOptional()
  tags: string[];

  @IsUUID()
  userId: string;

  @IsUUID()
  userIdForArchivePurposes: string;
}

export class UpdateResearchActivityDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsArray()
  @IsOptional()
  researchPhases: string[];

  @IsString()
  @IsOptional()
  activityFeed: string;

  @IsArray()
  @IsOptional()
  tags: string[];

  @IsUUID()
  @IsOptional()
  userId: string;

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes: string;
}
