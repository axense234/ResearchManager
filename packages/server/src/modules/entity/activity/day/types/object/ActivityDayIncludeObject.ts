// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ActivityDayIncludeObject {
  @IsBoolean()
  @IsOptional()
  activityFeed?: boolean;

  @IsBoolean()
  @IsOptional()
  activityLogs?: boolean;
}
