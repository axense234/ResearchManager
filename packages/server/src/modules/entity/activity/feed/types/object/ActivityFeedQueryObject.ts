// Validators
import { IsOptional, IsString, IsObject } from 'class-validator';

export class ActivityFeedQueryObject {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  researchActivityId?: string;

  @IsOptional()
  @IsObject()
  searchByKey?: { contains: string };
}
