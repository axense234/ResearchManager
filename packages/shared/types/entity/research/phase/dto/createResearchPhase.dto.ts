// Validators
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

export class CreateResearchPhaseDto {
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
  researchActivityId: string;

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
