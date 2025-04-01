// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { createActivityFeedDtoOptions } from '../options/parameter';
// Types
import { ActivityFeedType } from '@prisma/client';
// Validators
import { IsEnum, IsOptional, IsUUID, IsArray } from 'class-validator';

export class CreateActivityFeedDtoSwaggerWrapper {
  @ApiProperty(createActivityFeedDtoOptions['type'])
  @IsEnum(ActivityFeedType)
  @IsOptional()
  type?: ActivityFeedType;

  @ApiProperty(createActivityFeedDtoOptions['userId'])
  @IsOptional()
  @IsUUID()
  userId?: string;

  @ApiProperty(createActivityFeedDtoOptions['researchActivityId'])
  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @ApiProperty(createActivityFeedDtoOptions['activityDays'])
  @IsArray()
  @IsOptional()
  activityDays?: string[];
}
