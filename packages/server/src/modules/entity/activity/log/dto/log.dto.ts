// Prisma
import { ActivitySubject } from '@prisma/client';
// Validators
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateActivityLogDto {
  @IsEnum(ActivitySubject)
  @IsOptional()
  subject: ActivitySubject;

  @IsString()
  @IsOptional()
  message: string;

  @IsArray()
  @IsOptional()
  activityDays: string[];
}

export class UpdateActivityLogDto {
  @IsEnum(ActivitySubject)
  @IsOptional()
  subject: ActivitySubject;

  @IsString()
  @IsOptional()
  message: string;

  @IsArray()
  @IsOptional()
  activityDays: string[];
}
