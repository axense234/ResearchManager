// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsArray, IsOptional, IsUUID } from 'class-validator';
// Data
import {
  createActivityDayDtoOptions,
  updateActivityDayDtoOptions,
} from '../data/swagger/options/parameter';

export class CreateActivityDayDto {
  @ApiProperty(createActivityDayDtoOptions['activityFeedId'])
  @IsUUID()
  activityFeedId: string;

  @ApiProperty(createActivityDayDtoOptions['activityLogs'])
  @IsArray()
  @IsOptional()
  activityLogs?: string[];
}

export class UpdateActivityDayDto {
  @ApiProperty(updateActivityDayDtoOptions['activityFeedId'])
  @IsUUID()
  @IsOptional()
  activityFeedId?: string;

  @ApiProperty(updateActivityDayDtoOptions['activityLogs'])
  @IsArray()
  @IsOptional()
  activityLogs?: string[];
}
