// Validators
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsOptional,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class ActivityDayWhereObject {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsUUID()
  @IsOptional()
  activityFeedId?: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @Type(() => ActivityDayWhereObject)
  @IsOptional()
  AND?: ActivityDayWhereObject;

  @Type(() => ActivityDayWhereObject)
  @IsOptional()
  NOT?: ActivityDayWhereObject;

  @ValidateNested()
  @Type(() => ActivityDayWhereObject)
  @IsOptional()
  OR?: ActivityDayWhereObject[];
}
