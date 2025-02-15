// Validators
import { IsArray, IsOptional, IsString } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  profileImageSrc?: string;

  @IsString()
  @IsOptional()
  backgroundImageSrc?: string;

  @IsString()
  @IsOptional()
  settings?: string;

  @IsArray()
  @IsOptional()
  activityFeeds?: string[];

  @IsArray()
  @IsOptional()
  archivedResearchActivities?: string[];

  @IsArray()
  @IsOptional()
  archivedResearchLogs?: string[];

  @IsArray()
  @IsOptional()
  archivedResearchPhases?: string[];

  @IsArray()
  @IsOptional()
  archivedResearchSessions?: string[];

  @IsArray()
  @IsOptional()
  archivedTags?: string[];

  @IsArray()
  @IsOptional()
  researchActivities?: string[];

  @IsArray()
  @IsOptional()
  tags?: string[];
}
