// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ActivityFeedIncludeObject {
  @IsBoolean()
  @IsOptional()
  researchActivity?: boolean;

  @IsBoolean()
  @IsOptional()
  user?: boolean;

  @IsBoolean()
  @IsOptional()
  activityDays?: boolean;
}
