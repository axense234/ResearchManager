// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsArray, IsOptional, IsString } from 'class-validator';
// Options
import { updateUserDtoOptions } from '../data/swagger/options/parameter';
export class UpdateUserDto {
  @ApiProperty(updateUserDtoOptions['username'])
  @IsString()
  @IsOptional()
  username?: string;

  @ApiProperty(updateUserDtoOptions['email'])
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty(updateUserDtoOptions['password'])
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty(updateUserDtoOptions['profileImageSrc'])
  @IsString()
  @IsOptional()
  profileImageSrc?: string;

  @ApiProperty(updateUserDtoOptions['backgroundImageSrc'])
  @IsString()
  @IsOptional()
  backgroundImageSrc?: string;

  @ApiProperty(updateUserDtoOptions['settings'])
  @IsString()
  @IsOptional()
  settings?: string;

  @ApiProperty(updateUserDtoOptions['activityFeeds'])
  @IsArray()
  @IsOptional()
  activityFeeds?: string[];

  @ApiProperty(updateUserDtoOptions['archivedResearchActivities'])
  @IsArray()
  @IsOptional()
  archivedResearchActivities?: string[];

  @ApiProperty(updateUserDtoOptions['archivedResearchLogs'])
  @IsArray()
  @IsOptional()
  archivedResearchLogs?: string[];

  @ApiProperty(updateUserDtoOptions['archivedResearchPhases'])
  @IsArray()
  @IsOptional()
  archivedResearchPhases?: string[];

  @ApiProperty(updateUserDtoOptions['archivedResearchSessions'])
  @IsArray()
  @IsOptional()
  archivedResearchSessions?: string[];

  @ApiProperty(updateUserDtoOptions['archivedTags'])
  @IsArray()
  @IsOptional()
  archivedTags?: string[];

  @ApiProperty(updateUserDtoOptions['researchActivities'])
  @IsArray()
  @IsOptional()
  researchActivities?: string[];

  @ApiProperty(updateUserDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];
}
