// Validators
import { IsArray, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateActivityDayDto {
  @IsUUID()
  @IsOptional()
  activityFeedId?: string;

  @IsString()
  @IsOptional()
  createdAt?: string;

  @IsArray()
  @IsOptional()
  activityLogs?: string[];
}
