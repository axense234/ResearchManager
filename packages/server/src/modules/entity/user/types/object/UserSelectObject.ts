// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class UserSelectObject {
  @IsBoolean()
  @IsOptional()
  id?: boolean;

  @IsBoolean()
  @IsOptional()
  username?: boolean;

  @IsBoolean()
  @IsOptional()
  email?: boolean;

  @IsBoolean()
  @IsOptional()
  hash?: boolean;

  @IsBoolean()
  @IsOptional()
  createdAt?: boolean;

  @IsBoolean()
  @IsOptional()
  updatedAt?: boolean;

  @IsBoolean()
  @IsOptional()
  backgroundImageSrc?: boolean;

  @IsBoolean()
  @IsOptional()
  profileImageSrc?: boolean;

  @IsBoolean()
  @IsOptional()
  tags?: boolean;

  @IsBoolean()
  @IsOptional()
  researchActivities?: boolean;

  @IsBoolean()
  @IsOptional()
  settings?: boolean;

  @IsBoolean()
  @IsOptional()
  activityFeed?: boolean;
}
