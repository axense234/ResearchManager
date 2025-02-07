// Validators
import { IsString, IsOptional, IsEmail, IsObject } from 'class-validator';

export class UserCreateDataObject {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  hash: string;

  @IsString()
  @IsOptional()
  password: string;

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
