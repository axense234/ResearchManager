// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ActivityLogIncludeObject {
  @IsBoolean()
  @IsOptional()
  activityDays?: boolean;
}
