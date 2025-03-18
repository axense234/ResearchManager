// Validators
import { IsArray, IsEnum, IsOptional, IsUUID } from "class-validator";
// Prisma
import { ActivityFeedType } from "@prisma/client";

export class CreateActivityFeedDto {
  @IsEnum(ActivityFeedType)
  @IsOptional()
  type?: ActivityFeedType;

  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @IsArray()
  @IsOptional()
  activityDays?: string[];
}
