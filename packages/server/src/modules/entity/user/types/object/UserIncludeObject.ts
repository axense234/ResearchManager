// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class UserIncludeObject {
  @IsBoolean()
  @IsOptional()
  activityFeed?: boolean;

  @IsBoolean()
  @IsOptional()
  researchActivities?: boolean;

  @IsBoolean()
  @IsOptional()
  settings?: boolean;

  @IsBoolean()
  @IsOptional()
  tags?: boolean;
}
