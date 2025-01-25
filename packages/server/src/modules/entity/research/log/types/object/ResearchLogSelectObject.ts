// Validators
import { IsOptional, IsBoolean } from 'class-validator';

export class ResearchLogSelectObject {
  @IsBoolean()
  @IsOptional()
  id?: boolean;

  @IsBoolean()
  @IsOptional()
  name?: boolean;

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
  tags?: boolean;

  @IsBoolean()
  @IsOptional()
  researchPhase?: boolean;

  @IsBoolean()
  @IsOptional()
  researchPhaseId?: boolean;

  @IsBoolean()
  @IsOptional()
  userIdForArchivePurposes?: boolean;

  @IsBoolean()
  @IsOptional()
  userForArchivePurposes?: boolean;

  @IsBoolean()
  @IsOptional()
  createdAt?: boolean;

  @IsBoolean()
  @IsOptional()
  updatedAt?: boolean;
}
