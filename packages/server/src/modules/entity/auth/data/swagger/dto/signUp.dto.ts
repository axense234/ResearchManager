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
import { signUpDtoOptions } from '../options/parameter';

export class SignUpDtoSwaggerWrapper {
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

  @ApiProperty(signUpDtoOptions['researchActivities'])
  @IsArray()
  @IsOptional()
  researchActivities?: string[];

  @ApiProperty(signUpDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];
}
