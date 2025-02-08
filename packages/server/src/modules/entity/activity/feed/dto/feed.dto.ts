// Prisma Client
import { ActivityFeedType } from '@prisma/client';
// Class Validator
import { IsArray, IsEnum, IsOptional, IsUUID } from 'class-validator';

export class CreateActivityFeedDto {
  @IsEnum(ActivityFeedType)
  @IsOptional()
  type: ActivityFeedType;

  @IsUUID()
  userId: string;

  @IsUUID()
  @IsOptional()
  researchActivityId: string;

  @IsArray()
  @IsOptional()
  dayActivities: string[];
}

export class UpdateActivityFeedDto {
  @IsEnum(ActivityFeedType)
  @IsOptional()
  type: ActivityFeedType;

  @IsUUID()
  @IsOptional()
  userId: string;

  @IsUUID()
  @IsOptional()
  researchActivityId: string;

  @IsArray()
  @IsOptional()
  dayActivities: string[];
}
