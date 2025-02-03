// Validators
import { Type } from 'class-transformer';
import {
  IsUUID,
  IsOptional,
  IsDateString,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ActivityLogWhereObject {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  message?: string;

  @IsString()
  @IsOptional()
  subject?:
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'RESTORE'
    | 'PURGE'
    | 'RESEARCH_START'
    | 'RESEARCH_PAUSE'
    | 'RESEARCH_RESUME'
    | 'RESEARCH_END'
    | 'SETTINGS'
    | 'OTHER';

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @Type(() => ActivityLogWhereObject)
  @IsOptional()
  AND?: ActivityLogWhereObject;

  @Type(() => ActivityLogWhereObject)
  @IsOptional()
  NOT?: ActivityLogWhereObject;

  @ValidateNested()
  @Type(() => ActivityLogWhereObject)
  @IsOptional()
  OR?: ActivityLogWhereObject[];
}
