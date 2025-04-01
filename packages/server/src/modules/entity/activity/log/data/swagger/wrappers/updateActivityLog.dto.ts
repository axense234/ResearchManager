// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { updateActivityLogDtoOptions } from '../options/parameter';
// Prisma
import { ActivitySubject } from '@prisma/client';
// Validators
import { IsEnum, IsOptional, IsString, IsArray } from 'class-validator';

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
