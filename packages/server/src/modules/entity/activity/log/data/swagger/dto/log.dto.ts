// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Prisma
import { ActivitySubject } from '@prisma/client';
// Validators
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
// Data
import {
  createActivityLogDtoOptions,
  updateActivityLogDtoOptions,
} from '../options/parameter';

export class CreateActivityLogDtoSwaggerWrapper {
  @ApiProperty(createActivityLogDtoOptions['subject'])
  @IsEnum(ActivitySubject)
  @IsOptional()
  subject?: ActivitySubject;

  @ApiProperty(createActivityLogDtoOptions['message'])
  @IsString()
  @IsOptional()
  message?: string;

  @ApiProperty(createActivityLogDtoOptions['activityDays'])
  @IsArray()
  @IsOptional()
  activityDays?: string[];
}

export class UpdateActivityLogDtoSwaggerWrapper {
  @ApiProperty(updateActivityLogDtoOptions['subject'])
  @IsEnum(ActivitySubject)
  @IsOptional()
  subject?: ActivitySubject;

  @ApiProperty(updateActivityLogDtoOptions['message'])
  @IsString()
  @IsOptional()
  message?: string;

  @ApiProperty(updateActivityLogDtoOptions['activityDays'])
  @IsArray()
  @IsOptional()
  activityDays?: string[];
}
