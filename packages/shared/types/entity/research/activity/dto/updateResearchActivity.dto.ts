// Validators
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

export class UpdateResearchActivityDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @IsArray()
  @IsOptional()
  researchPhases?: string[];

  @IsString()
  @IsOptional()
  activityFeed?: string;

  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsUUID()
  @IsOptional()
  userId?: string;
}
