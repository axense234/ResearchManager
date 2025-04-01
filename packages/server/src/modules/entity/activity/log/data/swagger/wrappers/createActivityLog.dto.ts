// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { createActivityLogDtoOptions } from '../options/parameter';
// Prisma
import { ActivitySubject } from '@prisma/client';
// Validators
import { IsEnum, IsOptional, IsString, IsArray } from 'class-validator';

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
