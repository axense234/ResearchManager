// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ActivityDaySelectObject {
  @IsBoolean()
  @IsOptional()
  id?: boolean;

  @IsBoolean()
  @IsOptional()
  activityFeed?: boolean;

  @IsBoolean()
  @IsOptional()
  activityFeedId?: boolean;

  @IsBoolean()
  @IsOptional()
  activityLogs?: boolean;

  @IsBoolean()
  @IsOptional()
  createdAt?: boolean;

  @IsBoolean()
  @IsOptional()
  updatedAt?: boolean;
}
