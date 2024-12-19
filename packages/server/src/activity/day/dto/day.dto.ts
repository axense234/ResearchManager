import { IsDateString, IsOptional, IsUUID } from 'class-validator';

export class CreateDayActivityDto {
  @IsDateString()
  @IsOptional()
  createdAt: Date;

  @IsUUID()
  activityFeedId: string;
}

export class UpdateDayActivityDto {
  @IsDateString()
  @IsOptional()
  createdAt: Date;

  @IsUUID()
  @IsOptional()
  activityFeedId: string;
}
