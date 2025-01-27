// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ResearchPhaseIncludeObject {
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
  userForArchivePurposes?: boolean;

  @IsBoolean()
  @IsOptional()
  tags?: boolean;
}
