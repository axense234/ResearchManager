// Validators
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

export class UpdateResearchPhaseDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @IsArray()
  @IsOptional()
  researchLogs?: string[];

  @IsArray()
  @IsOptional()
  researchSessions?: string[];

  @IsArray()
  @IsOptional()
  tags?: string[];
}
