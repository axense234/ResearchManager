// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class UserIncludeObject {
  @IsBoolean()
  @IsOptional()
  activityFeeds?: boolean;

  @IsBoolean()
  @IsOptional()
  archivedResearchActivities?: boolean;

  @IsBoolean()
  @IsOptional()
  archivedResearchLogs?: boolean;

  @IsBoolean()
  @IsOptional()
  archivedResearchPhases?: boolean;

  @IsBoolean()
  @IsOptional()
  archivedResearchSessions?: boolean;

  @IsBoolean()
  @IsOptional()
  archivedTags?: boolean;

  @IsBoolean()
  @IsOptional()
  researchActivities?: boolean;

  @IsBoolean()
  @IsOptional()
  settings?: boolean;

  @IsBoolean()
  @IsOptional()
  tags?: boolean;
}
