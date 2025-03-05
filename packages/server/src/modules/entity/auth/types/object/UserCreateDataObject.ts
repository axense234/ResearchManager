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
  settings: { connect: { id: string } } | { create: object };

  @IsObject()
  @IsOptional()
  activityFeed: { connect: { id: string } } | { create: object };

  @IsObject()
  @IsOptional()
  researchActivities: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  tags: { connect: { id: string }[] };
}
