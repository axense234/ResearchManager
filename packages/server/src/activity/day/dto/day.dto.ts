import { IsDateString, IsOptional, IsUUID } from 'class-validator';

export class CreateActivityDayDto {
  @IsDateString()
  @IsOptional()
  createdAt: Date;

  @IsUUID()
  activityFeedId: string;
}

export class UpdateActivityDayDto {
  @IsDateString()
  @IsOptional()
  createdAt: Date;

  @IsUUID()
  @IsOptional()
  activityFeedId: string;
}
