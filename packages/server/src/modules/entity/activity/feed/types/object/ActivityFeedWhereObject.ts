// Validators
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class ActivityFeedWhereObject {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  type?: 'RESEARCH_ACTIVITY' | 'USER';

  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @Type(() => ActivityFeedWhereObject)
  @IsOptional()
  AND?: ActivityFeedWhereObject;

  @Type(() => ActivityFeedWhereObject)
  @IsOptional()
  NOT?: ActivityFeedWhereObject;

  @ValidateNested()
  @Type(() => ActivityFeedWhereObject)
  @IsOptional()
  OR?: ActivityFeedWhereObject[];
}
