// Validators
import { IsArray, IsEnum, IsOptional, IsUUID } from "class-validator";
// Prisma
import { ActivityFeedType } from "@prisma/client";

export class UpdateActivityFeedDto {
  @IsEnum(ActivityFeedType)
  @IsOptional()
  type?: ActivityFeedType;

  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @IsArray()
  @IsOptional()
  activityDays?: string[];
}
