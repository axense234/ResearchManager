// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ActivityLogSelectObject {
  @IsBoolean()
  @IsOptional()
  id?: boolean;

  @IsBoolean()
  @IsOptional()
  activityDays?: boolean;

  @IsBoolean()
  @IsOptional()
  message?: boolean;

  @IsBoolean()
  @IsOptional()
  subject?: boolean;

  @IsBoolean()
  @IsOptional()
  createdAt?: boolean;
}
