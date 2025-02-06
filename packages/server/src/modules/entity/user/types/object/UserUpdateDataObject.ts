// Validators
import { IsEmail, IsObject, IsOptional, IsString } from 'class-validator';

export class UserUpdateDataObject {
  @IsString()
  @IsOptional()
  username: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  hash: string;

  @IsString()
  @IsOptional()
  backgroundImageSrc: string;

  @IsString()
  @IsOptional()
  profileImageSrc: string;

  @IsObject()
  @IsOptional()
  settings: { connect: { id: string } };

  @IsObject()
  @IsOptional()
  activityFeeds: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  archivedResearchActivities: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  archivedResearchLogs: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  archivedResearchPhases: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  archivedResearchSessions: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  archivedTags: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  researchActivities: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  tags: { connect: { id: string }[] };
}
