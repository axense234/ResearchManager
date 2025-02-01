// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ActivityFeedSelectObject {
  @IsBoolean()
  @IsOptional()
  id?: boolean;

  @IsBoolean()
  @IsOptional()
  type?: boolean;

  @IsBoolean()
  @IsOptional()
  user?: boolean;

  @IsBoolean()
  @IsOptional()
  activityDays?: boolean;

  @IsBoolean()
  @IsOptional()
  userId?: boolean;

  @IsBoolean()
  @IsOptional()
  researchActivity?: boolean;

  @IsBoolean()
  @IsOptional()
  researchActivityId?: boolean;

  @IsBoolean()
  @IsOptional()
  createdAt?: boolean;

  @IsBoolean()
  @IsOptional()
  updatedAt?: boolean;
}
