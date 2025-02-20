// Validators
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsEmail,
  IsArray,
} from 'class-validator';
// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Data
import { signUpDtoOptions } from '../data/swagger/options';

export class SignUpDto {
  @ApiProperty(signUpDtoOptions['username'])
  @IsString()
  @IsOptional()
  username?: string;

  @ApiProperty(signUpDtoOptions['password'])
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty(signUpDtoOptions['email'])
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty(signUpDtoOptions['backgroundImageSrc'])
  @IsString()
  @IsOptional()
  backgroundImageSrc?: string;

  @ApiProperty(signUpDtoOptions['profileImageSrc'])
  @IsString()
  @IsOptional()
  profileImageSrc?: string;

  @ApiProperty(signUpDtoOptions['settings'])
  @IsString()
  @IsOptional()
  settings?: string;

  @ApiProperty(signUpDtoOptions['activityFeeds'])
  @IsArray()
  @IsOptional()
  activityFeeds?: string[];

  @ApiProperty(signUpDtoOptions['archivedResearchActivities'])
  @IsArray()
  @IsOptional()
  archivedResearchActivities?: string[];

  @ApiProperty(signUpDtoOptions['archivedResearchLogs'])
  @IsArray()
  @IsOptional()
  archivedResearchLogs?: string[];

  @ApiProperty(signUpDtoOptions['archivedResearchPhases'])
  @IsArray()
  @IsOptional()
  archivedResearchPhases?: string[];

  @ApiProperty(signUpDtoOptions['archivedResearchSessions'])
  @IsArray()
  @IsOptional()
  archivedResearchSessions?: string[];

  @ApiProperty(signUpDtoOptions['archivedTags'])
  @IsArray()
  @IsOptional()
  archivedTags?: string[];

  @ApiProperty(signUpDtoOptions['researchActivities'])
  @IsArray()
  @IsOptional()
  researchActivities?: string[];

  @ApiProperty(signUpDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];
}
