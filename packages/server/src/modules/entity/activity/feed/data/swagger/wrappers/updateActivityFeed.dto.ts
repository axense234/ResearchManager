// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { updateActivityFeedDtoOptions } from '../options/parameter';
// Types
import { ActivityFeedType } from '@prisma/client';
// Validators
import { IsEnum, IsOptional, IsUUID, IsArray } from 'class-validator';

export class UpdateActivityFeedDtoSwaggerWrapper {
  @ApiProperty(updateActivityFeedDtoOptions['type'])
  @IsEnum(ActivityFeedType)
  @IsOptional()
  type?: ActivityFeedType;

  @ApiProperty(updateActivityFeedDtoOptions['userId'])
  @IsUUID()
  @IsOptional()
  userId?: string;

  @ApiProperty(updateActivityFeedDtoOptions['researchActivityId'])
  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @ApiProperty(updateActivityFeedDtoOptions['activityDays'])
  @IsArray()
  @IsOptional()
  activityDays?: string[];
}
