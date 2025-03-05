// Validators
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class ResearchActivityWhereObject {
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
  userId?: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @Type(() => ResearchActivityWhereObject)
  @IsOptional()
  AND?: ResearchActivityWhereObject;

  @Type(() => ResearchActivityWhereObject)
  @IsOptional()
  NOT?: ResearchActivityWhereObject;

  @ValidateNested()
  @Type(() => ResearchActivityWhereObject)
  @IsOptional()
  OR?: ResearchActivityWhereObject[];
}
