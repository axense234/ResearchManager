import { ActivitySubject } from '@prisma/client';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateActivityLogDto {
  @IsEnum(ActivitySubject)
  @IsOptional()
  subject: ActivitySubject;

  @IsString()
  @IsOptional()
  message: string;

  @IsArray()
  @IsOptional()
  messageValues: string[];

  @IsDateString()
  @IsOptional()
  createdAt: Date;
}

export class UpdateActivityLogDto {
  @IsEnum(ActivitySubject)
  @IsOptional()
  subject: ActivitySubject;

  @IsString()
  @IsOptional()
  message: string;

  @IsArray()
  @IsOptional()
  messageValues: string[];

  @IsDateString()
  @IsOptional()
  createdAt: Date;
}
