// Validators
import { IsString, IsOptional, IsObject } from 'class-validator';

export class ActivityLogUpdateDataObject {
  @IsString()
  @IsOptional()
  message: string;

  @IsString()
  @IsOptional()
  subject:
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

  @IsObject()
  @IsOptional()
  activityDays: { connect: { id: string }[] };
}
