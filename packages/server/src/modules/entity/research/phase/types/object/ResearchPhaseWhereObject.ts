// Validators
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class ResearchPhaseWhereObject {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @Type(() => ResearchPhaseWhereObject)
  @IsOptional()
  AND?: ResearchPhaseWhereObject;

  @Type(() => ResearchPhaseWhereObject)
  @IsOptional()
  NOT?: ResearchPhaseWhereObject;

  @ValidateNested()
  @Type(() => ResearchPhaseWhereObject)
  @IsOptional()
  OR?: ResearchPhaseWhereObject[];
}
