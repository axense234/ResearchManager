// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Prisma
import { ActivityFeedType } from '@prisma/client';
// Class Validators
import { IsArray, IsEnum, IsOptional, IsUUID } from 'class-validator';
// Data
import {
  createActivityFeedDtoOptions,
  updateActivityFeedDtoOptions,
} from '../data/swagger/options/parameter';

export class CreateActivityFeedDto {
  @ApiProperty(createActivityFeedDtoOptions['type'])
  @IsEnum(ActivityFeedType)
  @IsOptional()
  type?: ActivityFeedType;

  @ApiProperty(createActivityFeedDtoOptions['userId'])
  @IsUUID()
  userId: string;

  @ApiProperty(createActivityFeedDtoOptions['researchActivityId'])
  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @ApiProperty(createActivityFeedDtoOptions['activityDays'])
  @IsArray()
  @IsOptional()
  activityDays?: string[];
}

export class UpdateActivityFeedDto {
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
