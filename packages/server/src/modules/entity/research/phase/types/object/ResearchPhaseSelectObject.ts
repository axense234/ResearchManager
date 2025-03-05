// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ResearchPhaseSelectObject {
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
  backgroundColorOrImageSrc?: boolean;

  @IsBoolean()
  @IsOptional()
  researchActivityId?: boolean;

  @IsBoolean()
  @IsOptional()
  researchActivity?: boolean;

  @IsBoolean()
  @IsOptional()
  researchLogs?: boolean;

  @IsBoolean()
  @IsOptional()
  researchSessions?: boolean;

  @IsBoolean()
  @IsOptional()
  tags?: boolean;

  @IsBoolean()
  @IsOptional()
  createdAt?: boolean;

  @IsBoolean()
  @IsOptional()
  updatedAt?: boolean;
}
