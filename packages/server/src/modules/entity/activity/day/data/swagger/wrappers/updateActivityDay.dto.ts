// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { updateActivityDayDtoOptions } from '../options/parameter';
// Validators
import { IsUUID, IsOptional, IsArray } from 'class-validator';

export class UpdateActivityDayDtoSwaggerWrapper {
  @ApiProperty(updateActivityDayDtoOptions['activityFeedId'])
  @IsUUID()
  @IsOptional()
  activityFeedId?: string;

  @ApiProperty(updateActivityDayDtoOptions['activityLogs'])
  @IsArray()
  @IsOptional()
  activityLogs?: string[];
}
