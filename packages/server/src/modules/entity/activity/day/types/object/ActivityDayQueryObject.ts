// Validators
import { IsOptional, IsString, IsObject } from 'class-validator';

export class ActivityDayQueryObject {
  @IsOptional()
  @IsString()
  activityFeedId?: string;

  @IsOptional()
  @IsObject()
  searchByKey?: { contains: string };
}
