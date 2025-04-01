// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { createActivityDayDtoOptions } from '../options/parameter';
// Validators
import { IsUUID, IsArray, IsOptional } from 'class-validator';

export class CreateActivityDayDtoSwaggerWrapper {
  @ApiProperty(createActivityDayDtoOptions['activityFeedId'])
  @IsUUID()
  activityFeedId: string;

  @ApiProperty(createActivityDayDtoOptions['activityLogs'])
  @IsArray()
  @IsOptional()
  activityLogs?: string[];
}
