// Validators
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsEmail,
  IsArray,
} from "class-validator";

export class SignUpDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  backgroundImageSrc?: string;

  @IsString()
  @IsOptional()
  profileImageSrc?: string;

  @IsString()
  @IsOptional()
  settings?: string;

  @IsArray()
  @IsOptional()
  activityFeeds?: string[];

  @IsArray()
  @IsOptional()
  researchActivities?: string[];

  @IsArray()
  @IsOptional()
  tags?: string[];
}
