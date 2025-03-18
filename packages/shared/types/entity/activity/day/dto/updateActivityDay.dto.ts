// Validators
import { IsArray, IsOptional, IsUUID } from "class-validator";

export class UpdateActivityDayDto {
  @IsUUID()
  @IsOptional()
  activityFeedId?: string;

  @IsArray()
  @IsOptional()
  activityLogs?: string[];
}
