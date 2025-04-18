// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ResearchSessionSelectObject {
  @IsBoolean()
  @IsOptional()
  id?: boolean;

  @IsBoolean()
  @IsOptional()
  name?: boolean;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @IsBoolean()
  @IsOptional()
  content?: boolean;

  @IsBoolean()
  @IsOptional()
  researchPoints?: boolean;

  @IsBoolean()
  @IsOptional()
  backgroundColorOrImageSrc?: boolean;

  @IsBoolean()
  @IsOptional()
  imagesSrc?: boolean;

  @IsBoolean()
  @IsOptional()
  currentStatusDate?: boolean;

  @IsBoolean()
  @IsOptional()
  currentStatusType?: boolean;

  @IsBoolean()
  @IsOptional()
  tags?: boolean;

  @IsBoolean()
  @IsOptional()
  researchPhase?: boolean;

  @IsBoolean()
  @IsOptional()
  researchPhaseId?: boolean;

  @IsBoolean()
  @IsOptional()
  createdAt?: boolean;

  @IsBoolean()
  @IsOptional()
  updatedAt?: boolean;
}
